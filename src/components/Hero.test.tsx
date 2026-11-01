import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { profile } from "../data/profile";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the personalized greeting", () => {
    render(<Hero />);

    expect(
      screen.getByText(`Hello, I'm ${profile.name.split(" ")[0]}.`)
    ).toBeInTheDocument();
  });

  it("renders the main headline", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        name: /i build useful software and turn ideas into real products/i,
      })
    ).toBeInTheDocument();
  });

  it("displays the availability indicator", () => {
    render(<Hero />);

    expect(screen.getByText("OPEN TO OPPORTUNITIES")).toBeInTheDocument();
  });

  it("renders the professional introduction", () => {
    render(<Hero />);

    expect(
      screen.getByText(/4 years of professional experience/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/software engineering, qa, application support/i)
    ).toBeInTheDocument();
  });

  it("renders the Projects and Resume links correctly", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /explore my work/i })
    ).toHaveAttribute("href", "#projects");

    const resumeLink = screen.getByRole("link", {
      name: /view resume/i,
    });

    expect(resumeLink).toHaveAttribute("href", profile.resume);
    expect(resumeLink).toHaveAttribute("target", "_blank");
    expect(resumeLink).toHaveAttribute("rel", "noreferrer");
  });

  it("displays the location and technology stack", () => {
    render(<Hero />);

    expect(screen.getByText(profile.location)).toBeInTheDocument();

    expect(
      screen.getByText(/react · typescript · java · sql/i)
    ).toBeInTheDocument();
  });

  it("renders the professional headshot", () => {
    render(<Hero />);

    expect(
      screen.getByRole("img", {
        name: `${profile.name} — professional headshot`,
      })
    ).toHaveAttribute("src", "/headshot.jpg");
  });

  it("hides the headshot when the image fails to load", () => {
    render(<Hero />);

    const image = screen.getByRole("img", {
      name: `${profile.name} — professional headshot`,
    });

    fireEvent.error(image);

    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders the scroll link to the About section", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: /scroll to explore/i })
    ).toHaveAttribute("href", "#about");
  });
});
