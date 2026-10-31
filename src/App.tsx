import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { IntroStrip } from "./components/IntroStrip";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { PhotoGallery } from "./components/PhotoGallery";
import { Experience } from "./components/Experience";
import { ResumeCallout } from "./components/ResumeCallout";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  type Theme = "light" | "dark";
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <div className="site-shell" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <IntroStrip />
        <About />
        <Projects />
        <Experience />
        <PhotoGallery />
        <ResumeCallout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
