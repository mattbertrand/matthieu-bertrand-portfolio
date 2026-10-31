import { profile } from "../data/profile";
import { ArrowUpRight, Linkedin, Github, Mail } from "lucide-react";

export function Contact() {
  return (
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
    );
}  