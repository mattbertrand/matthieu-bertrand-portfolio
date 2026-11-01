import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("renders the main navigation links", () => {
    render(<Navbar theme="light" toggleTheme={vi.fn()} />);

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about"
    );

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "#projects"
    );

    expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
      "href",
      "#experience"
    );

    expect(screen.getByRole("link", { name: /contact/i })).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  it("displays the correct theme toggle label in light mode", () => {
    render(<Navbar theme="light" toggleTheme={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: "Switch to dark mode" })
    ).toBeInTheDocument();
  });

  it("displays the correct theme toggle label in dark mode", () => {
    render(<Navbar theme="dark" toggleTheme={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: "Switch to light mode" })
    ).toBeInTheDocument();
  });

  it("calls the theme toggle function when clicked", async () => {
    const user = userEvent.setup();
    const toggleTheme = vi.fn();

    render(<Navbar theme="light" toggleTheme={toggleTheme} />);

    await user.click(
      screen.getByRole("button", { name: "Switch to dark mode" })
    );

    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  it("indicates whether dark mode is active", () => {
    const { rerender } = render(<Navbar theme="light" toggleTheme={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: "Switch to dark mode" })
    ).toHaveAttribute("aria-pressed", "false");

    rerender(<Navbar theme="dark" toggleTheme={vi.fn()} />);

    expect(
      screen.getByRole("button", { name: "Switch to light mode" })
    ).toHaveAttribute("aria-pressed", "true");
  });
});
