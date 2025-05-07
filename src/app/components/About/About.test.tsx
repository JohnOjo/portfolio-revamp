import { render, screen } from "@testing-library/react";
import About from "./About";
import { aboutCards } from "@/app/data/homePageData";
import { ABOUT_ME } from "../../constants/headerConstants";

// Mock the CSS module
jest.mock("./About.css", () => ({}));

// Mock the Image component
jest.mock("next/image", () => {
  return (props: any) => <img {...props} />;
});

// Mock the data module
jest.mock("@/app/data/homePageData", () => ({
  aboutCards: [
    {
      title: "Experience",
      text: "Passionate about building scalable and efficient software solutions.",
      image: "/path/to/experience.svg",
    },
    {
      title: "Skills",
      text: "Proficient in various technologies and frameworks.",
      image: "/path/to/skills.svg",
    },
  ],
}));

// Mock the header constant
jest.mock("../../constants/headerConstants", () => ({
  ABOUT_ME: "About Me",
}));

describe("About Component", () => {
  it('renders the "About Me" header', () => {
    render(<About />);
    expect(screen.getByText(ABOUT_ME)).toBeInTheDocument();
  });

  it("renders the main container with the correct CSS class", () => {
    const { container } = render(<About />);
    expect(container.querySelector(".about")).toBeInTheDocument();
  });

  it("renders the header container with the correct CSS class", () => {
    const { container } = render(<About />);
    expect(
      container.querySelector(".about-header-container")
    ).toBeInTheDocument();
  });

  it("renders the about header with the correct CSS class", () => {
    const { container } = render(<About />);
    expect(container.querySelector(".about-header")).toBeInTheDocument();
  });

  it("renders the correct number of about cards", () => {
    const { container } = render(<About />);
    expect(container.querySelectorAll(".about-blocks-container")).toHaveLength(
      aboutCards.length
    );
  });
});
