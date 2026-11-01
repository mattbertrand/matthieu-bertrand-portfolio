import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "./About";

describe("About", () => {
  it("renders the section heading", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", {
        name: "Software engineer. Product-minded builder.",
      })
    ).toBeInTheDocument();
  });

  it("renders the introductory statement", () => {
    render(<About />);

    expect(
      screen.getByText(/i enjoy solving practical problems with technology/i)
    ).toBeInTheDocument();
  });

  it("describes professional experience and independent projects", () => {
    render(<About />);

    expect(
      screen.getByText(/nearly four years at accenture/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/statewide healthcare case-management system/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/swap4work, a full-stack application/i)
    ).toBeInTheDocument();
  });

  it("communicates the user's career objectives", () => {
    render(<About />);

    expect(
      screen.getByText(
        /looking for my next opportunity in software engineering/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText(/adjacent technical roles/i)).toBeInTheDocument();
  });

  it("renders all three skill categories", () => {
    render(<About />);

    expect(
      screen.getByRole("heading", { name: "Frontend" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Backend & data" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Delivery & support" })
    ).toBeInTheDocument();
  });

  it("displays the correct technologies in each skill category", () => {
    render(<About />);

    const frontend = screen
      .getByRole("heading", { name: "Frontend" })
      .closest<HTMLElement>(".skill-group");

    const backend = screen
      .getByRole("heading", { name: "Backend & data" })
      .closest<HTMLElement>(".skill-group");

    const delivery = screen
      .getByRole("heading", { name: "Delivery & support" })
      .closest<HTMLElement>(".skill-group");

    expect(frontend).not.toBeNull();
    expect(backend).not.toBeNull();
    expect(delivery).not.toBeNull();

    ["React", "Next.js", "JavaScript", "HTML / CSS", "Redux"].forEach(
      (skill) => {
        expect(within(frontend!).getByText(skill)).toBeInTheDocument();
      }
    );

    [
      "Java",
      "Node.js",
      "Deno",
      "REST APIs",
      "SQL",
      "MySQL",
      "PostgreSQL",
      "Oracle",
    ].forEach((skill) => {
      expect(within(backend!).getByText(skill)).toBeInTheDocument();
    });

    [
      "Git",
      "Jira",
      "ServiceNow",
      "Splunk",
      "SonarQube",
      "CI/CD",
      "AWS",
      "Testing",
      "Secure coding",
    ].forEach((skill) => {
      expect(within(delivery!).getByText(skill)).toBeInTheDocument();
    });
  });

  it("renders all 22 technical skill tags", () => {
    render(<About />);

    const skillTags = document.querySelectorAll(".skill-pills span");

    expect(skillTags).toHaveLength(22);
  });
});
