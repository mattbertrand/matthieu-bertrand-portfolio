import { ArrowUpRight } from "lucide-react";

import { profile } from "../data/profile";

export function ResumeCallout() {
  return (
        <section className="section resume-callout-section" id="resume-callout">
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
    );
}