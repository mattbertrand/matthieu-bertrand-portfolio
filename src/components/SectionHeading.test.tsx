import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionHeading } from "./SectionHeading";

describe("SectionHeading", () => {
  it("renders the eyebrow text", () => {
    render(<SectionHeading eyebrow="MY BACKGROUND" title="My experience" />);

    expect(screen.getByText("MY BACKGROUND")).toBeInTheDocument();
  });

  it("renders the title as an h2 heading", () => {
    render(<SectionHeading eyebrow="MY BACKGROUND" title="My experience" />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "My experience",
      })
    ).toBeInTheDocument();
  });

  it("renders the optional copy when provided", () => {
    render(
      <SectionHeading
        eyebrow="MY BACKGROUND"
        title="My experience"
        copy="A little more about my professional journey."
      />
    );

    expect(
      screen.getByText("A little more about my professional journey.")
    ).toBeInTheDocument();
  });

  it("does not render the copy element when omitted", () => {
    const { container } = render(
      <SectionHeading eyebrow="MY BACKGROUND" title="My experience" />
    );

    expect(container.querySelector(".section-copy")).not.toBeInTheDocument();
  });
});
