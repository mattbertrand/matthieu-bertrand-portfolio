import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { IntroStrip } from "./IntroStrip";

describe("IntroStrip", () => {
  it("renders the section with the correct accessible label", () => {
    render(<IntroStrip />);

    expect(
      screen.getByRole("region", { name: "Core strengths" })
    ).toBeInTheDocument();
  });

  it("displays all four core strengths", () => {
    render(<IntroStrip />);

    const section = screen.getByRole("region", {
      name: "Core strengths",
    });

    [
      "PRODUCT MINDSET",
      "CONTINUOUS LEARNING",
      "END-TO-END OWNERSHIP",
      "TEAM COLLABORATION",
    ].forEach((strength) => {
      expect(within(section).getByText(strength)).toBeInTheDocument();
    });
  });

  it("renders three decorative separators", () => {
    render(<IntroStrip />);

    const section = screen.getByRole("region", {
      name: "Core strengths",
    });

    expect(section.querySelectorAll("b")).toHaveLength(3);
  });
});
