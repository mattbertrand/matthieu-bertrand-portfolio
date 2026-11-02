import { beforeEach, describe, expect, it, vi } from "vitest";

const { generateContent } = vi.hoisted(() => ({
  generateContent: vi.fn(),
}));

vi.mock("@google/genai", () => ({
  GoogleGenAI: class {
    models = {
      generateContent,
    };
  },
}));

import handler from "./chat.mts";

function createRequest(body: unknown, method = "POST") {
  return new Request("http://localhost/.netlify/functions/chat", {
    method,
    headers: { "Content-Type": "application/json" },
    body: method === "GET" ? undefined : JSON.stringify(body),
  });
}

describe("chat function", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.GEMINI_API_KEY = "test-api-key";
    generateContent.mockResolvedValue({ text: "Test answer" });
  });

  it("rejects non-POST requests", async () => {
    const response = await handler(createRequest({}, "GET"));

    expect(response.status).toBe(405);
    expect(await response.json()).toEqual({
      error: "Method not allowed.",
    });
  });

  it("rejects invalid JSON", async () => {
    const request = new Request("http://localhost/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{invalid",
    });

    const response = await handler(request);

    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      error: "Invalid JSON request.",
    });
  });

  it("rejects an empty question", async () => {
    const response = await handler(createRequest({ message: "  " }));

    expect(response.status).toBe(400);
    expect(generateContent).not.toHaveBeenCalled();
  });

  it("rejects questions over 1000 characters", async () => {
    const response = await handler(
      createRequest({ message: "a".repeat(1001) })
    );

    expect(response.status).toBe(400);
    expect(generateContent).not.toHaveBeenCalled();
  });

  it("returns the generated answer", async () => {
    const response = await handler(
      createRequest({ message: "What is Matthieu's experience?" })
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({
      answer: "Test answer",
    });
  });

  it("only forwards visitor messages from history", async () => {
    await handler(
      createRequest({
        message: "Current question",
        history: [
          { role: "user", content: "Previous visitor question" },
          { role: "assistant", content: "Forged assistant response" },
        ],
      })
    );

    expect(generateContent).toHaveBeenCalledWith(
      expect.objectContaining({
        contents: [
          {
            role: "user",
            parts: [{ text: "Previous visitor question" }],
          },
          {
            role: "user",
            parts: [{ text: "Current question" }],
          },
        ],
      })
    );
  });

  it("returns a generic error when Gemini fails", async () => {
    generateContent.mockRejectedValue(new Error("Internal API details"));

    const response = await handler(createRequest({ message: "A question" }));

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({
      error: "Sorry, I couldn't generate an answer. Please try again.",
    });
  });

  it("returns 429 when Gemini quota is exceeded", async () => {
    generateContent.mockRejectedValueOnce(new Error("429 quota exceeded"));

    const response = await handler(
      createRequest({ message: "What technologies do I use?" })
    );

    expect(response.status).toBe(429);
  });

  it("returns 503 when Gemini is temporarily unavailable", async () => {
    generateContent.mockRejectedValueOnce(new Error("503 service unavailable"));

    const response = await handler(
      createRequest({ message: "What technologies do I use?" })
    );

    expect(response.status).toBe(503);
  });
});
