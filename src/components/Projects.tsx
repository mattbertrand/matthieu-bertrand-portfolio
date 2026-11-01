import { ArrowUpRight } from "lucide-react";

import { projects } from "../data/projects";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading
        eyebrow="SELECTED WORK"
        title="A couple of things I'm building."
        copy="Independent projects that reflect how I approach problems, learn new tools, and take ownership."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.tone}`}
            key={project.number}
          >
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-status">{project.status}</span>
            </div>

            <div className="project-icon">{project.icon}</div>

            <h3>{project.name}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              className="project-link"
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : undefined}
              rel={
                project.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
            >
              {project.linkLabel} <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>

      <p className="project-disclaimer">
        Project status is described as of the date of this portfolio. Ask me for
        a walkthrough or additional details.
      </p>
    </section>
  );
}
