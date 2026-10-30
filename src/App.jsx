import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Wrench,
} from "lucide-react";

// EDIT THESE DETAILS before publishing. Replace the email and Relay URL with your own.
const profile = {
  name: "Matthieu Bertrand",
  role: "Software Engineer | React / Full-Stack",
  location: "Greater San Francisco Bay Area",
  email: "matt@matthieubertrand.com",
  linkedin: "https://www.linkedin.com/in/matthieu-bertrand/",
  github: "https://github.com/mattbertrand",
  resume: "/resume.pdf",
  swap4work: "https://swap4work.us/",
  relay: "https://aquatic-relay-ops-flow.base44.app",
};

const projects = [
  {
    number: "01",
    name: "Swap4Work",
    status: "LIVE · MARKETING",
    description:
      "A community platform that helps people exchange items, skills, and services. I took the idea from concept to a live product and continue to lead its launch and marketing.",
    tags: ["Product development", "React", "Launch & marketing"],
    link: profile.swap4work,
    linkLabel: "Visit Swap4Work",
    tone: "mint",
    icon: <Rocket size={22} />,
  },
  {
    number: "02",
    name: "Relay",
    status: "IN DEVELOPMENT",
    description:
      "A restaurant manager assistant designed to make day-to-day operations easier by bringing communications and customer feedback into a more manageable workflow.",
    tags: ["Product thinking", "Workflow tools", "AI-assisted development"],
    link: profile.relay,
    linkLabel: "Ask me about Relay",
    tone: "lavender",
    icon: <Wrench size={22} />,
  },
];

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Go to home">
          <span className="wordmark-mark">{"</>"}</span>
          <span>{profile.name}</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a className="nav-contact" href="#contact">
            Contact <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" /> OPEN TO OPPORTUNITIES
            </div>
            <p className="hero-kicker">
              Hello, I'm {profile.name.split(" ")[0]}.
            </p>
            <h1>
              I build useful software and turn ideas into{" "}
              <span>real products.</span>
            </h1>
            <p className="hero-description">
              Software engineer with 4 years of professional experience building
              and supporting production applications, with a strong focus on
              React and full-stack web development. Open to opportunities across
              software engineering, QA, application support, and implementation.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a
                className="button button-light"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                View resume <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> {profile.location}
              </span>
              <span>
                <Code2 size={15} /> React · TypeScript · Java · SQL
              </span>
            </div>
          </div>
          <div className="hero-art" aria-label="Professional headshot area">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="portrait-frame">
              <div className="portrait-accent" />
              <div className="portrait-fallback" aria-hidden="true">
                YOUR
                <br />
                PHOTO
              </div>
              <img
                className="portrait-image"
                src="/headshot.jpg"
                alt={`${profile.name} — professional headshot`}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="portrait-caption">
                <span className="availability-dot" /> Building what's next
              </div>
            </div>
            <div className="floating-chip chip-top">Curiosity → Code</div>
            <div className="floating-chip chip-bottom">
              Ship. Learn. Improve.
            </div>
            <div className="art-spark">✳</div>
          </div>
          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="intro-strip" aria-label="Core strengths">
          <span>PRODUCT MINDSET</span>
          <b>✳</b>
          <span>CONTINUOUS LEARNING</span>
          <b>✳</b>
          <span>END-TO-END OWNERSHIP</span>
          <b>✳</b>
          <span>TEAM COLLABORATION</span>
        </section>

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
                California counties. My work included React, Java, SQL,
                production debugging, testing, and collaborating across large
                Agile teams. I now apply that experience to independent product
                development, including Swap4Work, a full-stack application I
                built and launched, while continuing to explore AI-assisted
                development and practical product ideas.
              </p>
              <p>
                I’m open to opportunities where I can contribute, learn from a
                strong team, and grow—whether that’s software development,
                quality assurance, application support, or implementation.
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
                  target={
                    project.link.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    project.link.startsWith("http") ? "noreferrer" : undefined
                  }
                >
                  {project.linkLabel} <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
          <p className="project-disclaimer">
            Project status is described as of the date of this portfolio. Ask me
            for a walkthrough or additional details.
          </p>
        </section>

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
            </div>{" "}
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

          <section className="photo-gallery">
            <h2>A little more about me</h2>

            <div className="photo-gallery-grid">
              <figure>
                <img src="/dinner-award.jpg" alt="Dinner award in Qatar" />
                <figcaption>
                  Dinner Award recognition with Trader Vic's in Qatar
                </figcaption>
              </figure>
              <figure>
                <img src="/soccer.jpg" alt="Soccer coach photo" />
                <figcaption>Soccer coach for my son's team</figcaption>
              </figure>
              <figure>
                <img
                  src="/travel.JPG"
                  alt="Travel photo in Yellowstone National Park"
                />
                <figcaption>
                  3 months Road trip around the United States on a Harley
                  Davidson
                </figcaption>
              </figure>
            </div>
          </section>

          <div className="resume-callout">
            <div>
              <p className="eyebrow">WANT THE FULL PICTURE?</p>
              <h3>Download my resume.</h3>
              <p>
                For a detailed view of my experience, technical skills,
                education, and certification.
              </p>
            </div>
            <a
              className="button button-dark"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              Open resume <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-orb">✳</div>
          <p className="eyebrow">WHAT'S NEXT?</p>
          <h2>
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>
          <p className="contact-copy">
            I'm exploring my next opportunity in tech. If you're hiring, know a
            team I should meet, or simply want to talk about a project, I'd be
            glad to connect.
          </p>
          <a className="button button-white" href={`mailto:${profile.email}`}>
            {" "}
            <Mail size={17} /> Get in touch <ArrowUpRight size={16} />
          </a>
          <div className="social-links">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} /> Email
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#home">
          <span className="wordmark-mark">{"</>"}</span>
          <span>{profile.name}</span>
        </a>
        <span>Designed with care · © {new Date().getFullYear()}</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
