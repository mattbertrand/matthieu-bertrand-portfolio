import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { projects } from "../data/projects";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders the projects section heading and introduction", () => {
    render(<Projects />);

    expect(
      screen.getByRole("heading", {
        name: "A couple of things I'm building.",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /independent projects that reflect how i approach problems/i
      )
    ).toBeInTheDocument();
  });

  it("renders every project from the projects data", () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(
        screen.getByRole("heading", { name: project.name })
      ).toBeInTheDocument();
    });
  });

  it("displays each project's description, status, and tags", () => {
    render(<Projects />);

    projects.forEach((project) => {
      const projectHeading = screen.getByRole("heading", {
        name: project.name,
      });

      const projectCard = projectHeading.closest("article");

      expect(projectCard).not.toBeNull();

      const card = within(projectCard!);

      expect(card.getByText(project.description)).toBeInTheDocument();
      expect(card.getByText(project.status)).toBeInTheDocument();

      project.tags.forEach((tag) => {
        expect(card.getByText(tag)).toBeInTheDocument();
      });
    });
  });

  it("renders project links with the correct destinations", () => {
    render(<Projects />);

    projects.forEach((project) => {
      const projectHeading = screen.getByRole("heading", {
        name: project.name,
      });

      const projectCard = projectHeading.closest("article")!;

      const link = within(projectCard).getByRole("link", {
        name: new RegExp(project.linkLabel, "i"),
      });

      expect(link).toHaveAttribute("href", project.link);
    });
  });

  it("opens external project links safely in a new tab", () => {
    render(<Projects />);

    projects.forEach((project) => {
      const projectHeading = screen.getByRole("heading", {
        name: project.name,
      });

      const projectCard = projectHeading.closest("article")!;

      const link = within(projectCard).getByRole("link", {
        name: new RegExp(project.linkLabel, "i"),
      });

      if (project.link.startsWith("http")) {
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
      } else {
        expect(link).not.toHaveAttribute("target");
        expect(link).not.toHaveAttribute("rel");
      }
    });
  });

  it("renders the project disclaimer", () => {
    render(<Projects />);

    expect(
      screen.getByText(
        /project status is described as of the date of this portfolio/i
      )
    ).toBeInTheDocument();
  });
});
