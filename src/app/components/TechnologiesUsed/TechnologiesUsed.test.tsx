import { render, screen } from "@testing-library/react";
import TechnologiesUsed from "./TechnologiesUsed";
import { technologiesUsed } from "@/app/data/homePageData";
import TechnologyItem from "../TechnologyItem/TechnologyItem";
import { TECHNOLOGIES_USED } from "@/app/constants/headerConstants";

// Mock the CSS module
jest.mock("./TechnologiesUsed.css", () => ({}));

// Mock the data module
jest.mock("@/app/data/homePageData", () => ({
  technologiesUsed: [
    { name: "React", logo: "/path/to/react.svg" },
    { name: "Node.js", logo: "/path/to/node.svg" },
  ],
}));

// Mock the TechnologyItem component
jest.mock("../TechnologyItem/TechnologyItem", () => {
  return function MockTechnologyItem(props: any) {
    return (
      <div data-testid={`technology-item-${props.technology.name}`}>
        {props.technology.name} - {props.technology.logo}
      </div>
    );
  };
});

// Mock the header constant
jest.mock("@/app/constants/headerConstants", () => ({
  TECHNOLOGIES_USED: "Skills & Tools",
}));

describe("TechnologiesUsed Component", () => {
  it("renders the technologies title", () => {
    render(<TechnologiesUsed />);
    expect(screen.getByText(TECHNOLOGIES_USED)).toBeInTheDocument();
  });

  it("renders the main container with correct CSS classes", () => {
    const { container } = render(<TechnologiesUsed />);
    const technologiesContainer = container.querySelector(
      ".technologies-container"
    );
    expect(technologiesContainer).toBeInTheDocument();
    expect(technologiesContainer).toHaveClass("reveal");
  });

  it("renders the title container with the correct CSS class", () => {
    const { container } = render(<TechnologiesUsed />);
    const technologiesTitleContainer = container.querySelector(
      ".technologies-title"
    );
    expect(technologiesTitleContainer).toBeInTheDocument();
  });

  it("renders the list container with the correct CSS class", () => {
    const { container } = render(<TechnologiesUsed />);
    const technologiesListContainer = container.querySelector(
      ".technologies-list-container"
    );
    expect(technologiesListContainer).toBeInTheDocument();
  });

  it("renders the correct number of TechnologyItem components", () => {
    render(<TechnologiesUsed />);
    expect(screen.getAllByTestId(/technology-item-/)).toHaveLength(
      technologiesUsed.length
    );
  });

  it("passes the correct technology data to each TechnologyItem", () => {
    render(<TechnologiesUsed />);
    technologiesUsed.forEach((technology) => {
      expect(
        screen.getByTestId(`technology-item-${technology.name}`)
      ).toHaveTextContent(`${technology.name} - ${technology.logo}`);
    });
  });

  it("uses the technology name as the key for TechnologyItem", () => {
    render(<TechnologiesUsed />);
    const renderedItems = screen.getAllByTestId(/technology-item-/);
    renderedItems.forEach((item, index) => {
      expect(item).toHaveAttribute(
        "data-testid",
        `technology-item-${technologiesUsed[index].name}`
      );
    });
  });
});
