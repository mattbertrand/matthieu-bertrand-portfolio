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
            Built and supported features for a statewide case-management
            system serving millions of residents across 58 California
            counties. Worked with React, Java, JSP, SQL, production
            debugging, testing, and Agile delivery; collaborated with teams
            of 50+ engineers and helped manage incidents and defects across
            production workflows.
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
          <p className="experience-role">
            Server → Restaurant & Bar Manager
          </p>
          <p>
            14 years of experience in hospitality and restaurant management
            taught me the importance of clear communication, organization,
            and delivering a positive customer experience. I understand how
            important it is to listen carefully, clarify requirements,
            manage expectations, and ensure that the final result meets the
            needs of the people relying on it.
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