import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the main portfolio content", () => {
    render(<App />);

    expect(
      screen.getByText(/experience that travels with me/i)
    ).toBeInTheDocument();
  });

  it("starts in light mode when no preference is saved", () => {
    render(<App />);

    expect(document.querySelector(".site-shell")).toHaveAttribute(
      "data-theme",
      "light"
    );

    expect(
      screen.getByRole("button", { name: /switch to dark mode/i })
    ).toBeInTheDocument();
  });

  it("switches to dark mode when the theme button is clicked", async () => {
    const user = userEvent.setup();

    render(<App />);

    const themeButton = screen.getByRole("button", {
      name: /switch to dark mode/i,
    });

    await user.click(themeButton);

    expect(document.querySelector(".site-shell")).toHaveAttribute(
      "data-theme",
      "dark"
    );

    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toHaveAttribute("aria-pressed", "true");

    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });

  it("restores the previously saved theme preference", () => {
    localStorage.setItem("portfolio-theme", "dark");

    render(<App />);

    expect(document.querySelector(".site-shell")).toHaveAttribute(
      "data-theme",
      "dark"
    );

    expect(
      screen.getByRole("button", { name: /switch to light mode/i })
    ).toBeInTheDocument();
  });
});
