import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PhotoGallery } from "./PhotoGallery";

describe("PhotoGallery", () => {
  it("renders the gallery heading", () => {
    render(<PhotoGallery />);

    expect(
      screen.getByRole("heading", { name: "A little more about me" })
    ).toBeInTheDocument();
  });

  it("renders all three gallery images with descriptive alt text", () => {
    render(<PhotoGallery />);

    expect(
      screen.getByRole("img", { name: "Dinner award in Qatar" })
    ).toHaveAttribute("src", "/dinner-award.jpg");

    expect(
      screen.getByRole("img", { name: "Soccer coach photo" })
    ).toHaveAttribute("src", "/soccer.jpg");

    expect(
      screen.getByRole("img", {
        name: "Travel photo in Yellowstone National Park",
      })
    ).toHaveAttribute("src", "/travel.JPG");
  });

  it("renders the correct captions for all three photos", () => {
    render(<PhotoGallery />);

    expect(
      screen.getByText("Dinner Award recognition with Trader Vic's in Qatar")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Soccer coach for my son's team")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /three-month road trip across the united states on a harley-davidson/i
      )
    ).toBeInTheDocument();
  });

  it("loads the travel photo lazily", () => {
    render(<PhotoGallery />);

    expect(
      screen.getByRole("img", {
        name: "Travel photo in Yellowstone National Park",
      })
    ).toHaveAttribute("loading", "lazy");
  });

  it("groups each photo with its caption", () => {
    render(<PhotoGallery />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(3);

    images.forEach((img) => {
      const figure = img.closest("figure");

      expect(figure).not.toBeNull();
      expect(figure).toContainElement(img);
      expect(figure?.querySelector("figcaption")).not.toBeNull();
    });
  });
});
