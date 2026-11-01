import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { profile } from "../data/profile";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders the main contact content", () => {
    render(<Contact />);

    expect(
      screen.getByRole("heading", {
        name: /let's build something\s*meaningful/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/exploring my next opportunity in tech/i)
    ).toBeInTheDocument();
  });

  it("renders the main email contact button", () => {
    render(<Contact />);

    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`
    );
  });

  it("links to the correct LinkedIn profile", () => {
    render(<Contact />);

    const link = screen.getByRole("link", { name: /linkedin/i });

    expect(link).toHaveAttribute("href", profile.linkedin);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("links to the correct GitHub profile", () => {
    render(<Contact />);

    const link = screen.getByRole("link", { name: /github/i });

    expect(link).toHaveAttribute("href", profile.github);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("provides an email link in the social links section", () => {
    render(<Contact />);

    const emailLinks = screen.getAllByRole("link", {
      name: /email|get in touch/i,
    });

    expect(emailLinks).toHaveLength(2);

    emailLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", `mailto:${profile.email}`);
    });
  });
});
