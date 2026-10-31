import {
  ArrowUpRight,
  Moon,
  Sun,
} from "lucide-react";

import { profile } from "../data/profile";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <header className="topbar">
      <a className="wordmark" href="#home" aria-label="Go to home">
        <span className="wordmark-mark">{"</>"}</span>
        <span>{profile.name}</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>

        <button
          className="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          aria-pressed={theme === "dark"}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        <a className="nav-contact" href="#contact">
          Contact <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}