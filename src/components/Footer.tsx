import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <a className="wordmark" href="#home">
        <span className="wordmark-mark">{"</>"}</span>
        <span>{profile.name}</span>
      </a>
      <span>Designed with care · © {new Date().getFullYear()}</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}
