import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <SectionHeading
        eyebrow="MY BACKGROUND"
        title="Experience that travels with me."
      />

      <div className="experience-card">
        <div className="experience-date">JAN 2022 — NOV 2025</div>

        <div className="experience-main">
          <h3>Accenture</h3>
          <p className="experience-role">
            Application Developer Associate → Application Developer Analyst
          </p>
          <p>
            Developed and supported features for a statewide healthcare
            case-management platform serving millions of residents across 58
            California counties. Worked primarily with React, Redux, Java,
            Spring Boot, JSP and SQL, contributed to feature development,
            production troubleshooting, defect resolution, incident case
            management, and Agile delivery within a large cross-functional
            engineering team.
          </p>
          <div className="experience-tags">
            <span>Web applications</span>
            <span>Issue resolution</span>
            <span>Cross-functional teamwork</span>
          </div>
        </div>

        <div className="experience-logos hospitality-logos">
          <img src="/accenture-Logo.png" alt="Accenture logo" />
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-date">SEP 2008 — DEC 2021</div>

        <div className="experience-main">
          <h3>Hospitality Industry - Worldwide</h3>
          <p className="experience-role">Server → Restaurant & Bar Manager</p>
          <p>
            14 years of experience in hospitality and restaurant management
            developed my ability to communicate clearly, stay organized under
            pressure, lead teams, and understand customer needs. These
            experiences continue to influence how I approach software
            development, from understanding requirements to delivering solutions
            that create real value for users.
          </p>
          <div className="experience-tags">
            <span>Communication</span>
            <span>Organization</span>
            <span>Leadership</span>
          </div>
        </div>

        <div className="experience-logos hospitality-logos">
          <img src="/barrel-house-logo.jpg" alt="Barrel House logo" />
          <img src="/hilton-logo.png" alt="Hilton logo" />
          <img src="/paul-bocuse-logo.webp" alt="Paul Bocuse logo" />
          <img src="/trader-vics-logo.jpg" alt="Trader Vic's logo" />
        </div>
      </div>
    </section>
  );
}
