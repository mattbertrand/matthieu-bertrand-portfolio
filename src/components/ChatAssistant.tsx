import { useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import "./ChatAssistant.css";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestedQuestions = [
  "Tell me about Matthieu's experience at Accenture.",
  "What technologies does he work with?",
  "Tell me about his personal projects.",
];

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Matthieu's portfolio assistant. Ask me about his experience, technical skills, or projects. How can I help?",
    },
  ]);

  const sendMessage = async (question: string) => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: trimmedQuestion,
    };

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedQuestion,
          history: messages
            .slice(1)
            .slice(-10)
            .map((message) => ({
              role: message.role,
              content: message.content,
            })),
        }),
      });

      const data: { answer?: string; error?: string } = await response.json();

      if (!response.ok || !data.answer) {
        throw new Error(data.error || "Unable to generate a response.");
      }

      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer! },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-assistant">
      {isOpen && (
        <section className="chat-panel" aria-label="Portfolio assistant">
          <header className="chat-header">
            <div className="chat-header-info">
              <span className="chat-avatar">
                <Sparkles size={18} />
              </span>

              <div>
                <strong>Portfolio Assistant</strong>
                <span>Ask me anything about Matthieu</span>
              </div>
            </div>

            <button
              className="chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </header>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={`chat-message ${message.role}`}>
                {message.content}
              </div>
            ))}

            {isLoading && (
              <div className="chat-message assistant chat-loading">
                Thinking...
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="chat-suggestions">
              <span>TRY ASKING</span>

              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  disabled={isLoading}
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          <form
            className="chat-input-area"
            onSubmit={(event) => {
              event.preventDefault();
              void sendMessage(input);
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask a question..."
              maxLength={1000}
              aria-label="Your question"
              disabled={isLoading}
            />

            <button
              type="submit"
              aria-label="Send message"
              disabled={!input.trim() || isLoading}
            >
              <Send size={18} />
            </button>
          </form>
        </section>
      )}

      <button
        className="chat-launcher"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "Close assistant" : "Open assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={23} />}
      </button>
    </div>
  );
}
