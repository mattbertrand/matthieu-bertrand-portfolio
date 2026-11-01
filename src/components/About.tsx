import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading
        eyebrow="A LITTLE ABOUT ME"
        title="Software engineer. Product-minded builder."
      />

      <div className="about-grid">
        <div className="about-lead">
          <p className="large-copy">
            I enjoy solving practical problems with technology—and seeing an
            idea become something people can actually use.
          </p>

          <p>
            I spent nearly four years at Accenture building and supporting
            production applications, including a statewide healthcare
            case-management system serving millions of residents across 58
            California counties. My work included React, Java, SQL, production
            debugging, testing, and collaborating across large Agile teams. I
            now apply that experience to independent product development,
            including Swap4Work, a full-stack application I built and launched,
            while continuing to explore AI-assisted development and practical
            product ideas.
          </p>

          <p>
            I'm looking for my next opportunity in software engineering, where I
            can contribute to a strong team, continue developing my technical
            skills, and build products that solve practical problems. I'm also
            open to adjacent technical roles that provide opportunities to grow
            as an engineer.
          </p>
        </div>

        <div className="skills-panel">
          <p className="eyebrow">TOOLS & TECHNOLOGIES</p>

          <div className="skill-group">
            <h3>Frontend</h3>
            <div className="skill-pills">
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>HTML / CSS</span>
              <span>Redux</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Backend & data</h3>
            <div className="skill-pills">
              <span>Java</span>
              <span>Node.js</span>
              <span>Deno</span>
              <span>REST APIs</span>
              <span>SQL</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>Oracle</span>
            </div>
          </div>

          <div className="skill-group">
            <h3>Delivery & support</h3>
            <div className="skill-pills">
              <span>Git</span>
              <span>Jira</span>
              <span>ServiceNow</span>
              <span>Splunk</span>
              <span>SonarQube</span>
              <span>CI/CD</span>
              <span>AWS</span>
              <span>Testing</span>
              <span>Secure coding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
