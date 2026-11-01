import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ResumeCallout } from "./ResumeCallout";
import { profile } from "../data/profile";

describe("ResumeCallout", () => {
  it("renders the resume callout section", () => {
    const { container } = render(<ResumeCallout />);

    expect(container.querySelector("#resume-callout")).toBeInTheDocument();
  });

  it("displays the heading and introductory copy", () => {
    render(<ResumeCallout />);

    expect(screen.getByText("WANT THE FULL PICTURE?")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Download my resume." })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "For a detailed view of my experience, technical skills, education, and certification."
      )
    ).toBeInTheDocument();
  });

  it("links to the resume defined in the profile", () => {
    render(<ResumeCallout />);

    const resumeLink = screen.getByRole("link", {
      name: /open resume/i,
    });

    expect(resumeLink).toHaveAttribute("href", profile.resume);
  });

  it("opens the resume in a new tab", () => {
    render(<ResumeCallout />);

    const resumeLink = screen.getByRole("link", {
      name: /open resume/i,
    });

    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noreferrer");
  });
});
