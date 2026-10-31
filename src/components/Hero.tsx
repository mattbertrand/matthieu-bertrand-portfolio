import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  MapPin,
} from "lucide-react";

import { profile } from "../data/profile";
import { useState } from "react";

export function Hero() {
    const [imageError, setImageError] = useState(false);
  return (
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

      <div className="hero-art">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />

        <div className="portrait-frame">
          <div className="portrait-accent" />

          <div className="portrait-fallback" aria-hidden="true">
            YOUR
            <br />
            PHOTO
          </div>
        {!imageError && (
          <img
            className="portrait-image"
            src="/headshot.jpg"
            alt={`${profile.name} — professional headshot`}
            onError={() => setImageError(true)}
          />
        )}
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
  );
}