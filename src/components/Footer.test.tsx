import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";
import { profile } from "../data/profile";

describe("Footer", () => {
  it("displays the portfolio wordmark and name", () => {
    render(<Footer />);

    expect(screen.getByText("</>")).toBeInTheDocument();
    expect(screen.getByText(profile.name)).toBeInTheDocument();
  });

  it("displays the current year", () => {
    render(<Footer />);

    expect(
      screen.getByText(`Designed with care · © ${new Date().getFullYear()}`)
    ).toBeInTheDocument();
  });

  it("provides links back to the top of the page", () => {
    const { container } = render(<Footer />);

    const links = container.querySelectorAll('a[href="#home"]');

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent(profile.name);
    expect(links[1]).toHaveTextContent("Back to top");
  });
});
