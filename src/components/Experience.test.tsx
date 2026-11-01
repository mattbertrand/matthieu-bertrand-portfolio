import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Experience } from "./Experience";

describe("Experience", () => {
  it("renders the experience section heading", () => {
    render(<Experience />);

    expect(
      screen.getByRole("heading", {
        name: "Experience that travels with me.",
      })
    ).toBeInTheDocument();
  });

  it("renders both professional experiences", () => {
    render(<Experience />);

    expect(
      screen.getByRole("heading", { name: "Accenture" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        name: "Hospitality Industry - Worldwide",
      })
    ).toBeInTheDocument();
  });

  it("displays the correct employment dates and roles", () => {
    render(<Experience />);

    expect(screen.getByText("JAN 2022 — NOV 2025")).toBeInTheDocument();
    expect(screen.getByText("SEP 2008 — DEC 2021")).toBeInTheDocument();

    expect(
      screen.getByText(
        "Application Developer Associate → Application Developer Analyst"
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText("Server → Restaurant & Bar Manager")
    ).toBeInTheDocument();
  });

  it("displays the experience descriptions", () => {
    render(<Experience />);

    expect(
      screen.getByText(/statewide healthcare case-management platform/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/14 years of experience in hospitality/i)
    ).toBeInTheDocument();
  });

  it("renders the correct skill tags for each experience", () => {
    render(<Experience />);

    const accentureHeading = screen.getByRole("heading", {
      name: "Accenture",
    });

    const accentureCard =
      accentureHeading.closest<HTMLElement>(".experience-card");
    expect(accentureCard).not.toBeNull();

    const accenture = within(accentureCard!);

    [
      "Web applications",
      "Issue resolution",
      "Cross-functional teamwork",
    ].forEach((tag) => {
      expect(accenture.getByText(tag)).toBeInTheDocument();
    });

    const hospitalityHeading = screen.getByRole("heading", {
      name: "Hospitality Industry - Worldwide",
    });

    const hospitalityCard =
      hospitalityHeading.closest<HTMLElement>(".experience-card");
    expect(hospitalityCard).not.toBeNull();

    const hospitality = within(hospitalityCard!);

    ["Communication", "Organization", "Leadership"].forEach((tag) => {
      expect(hospitality.getByText(tag)).toBeInTheDocument();
    });
  });

  it("renders all five company logos with descriptive alt text", () => {
    render(<Experience />);

    const logos = [
      "Accenture logo",
      "Barrel House logo",
      "Hilton logo",
      "Paul Bocuse logo",
      "Trader Vic's logo",
    ];

    logos.forEach((altText) => {
      expect(screen.getByRole("img", { name: altText })).toBeInTheDocument();
    });
  });
});
