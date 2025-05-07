import { render, screen } from "@testing-library/react";
import Bio from "./Bio";
import { bioData, socialLinks } from "@/app/data/homePageData";

// Mock the Image component from next/image
jest.mock("next/image", () => {
  return (props: any) => <img {...props} />;
});

// Mock the CSS module to avoid style-related errors in tests
jest.mock("./Bio.css", () => ({}));

// Mock the data module
jest.mock("@/app/data/homePageData", () => ({
  bioData: {
    nameInCode: "/path/to/name.svg",
    title: "Test Title",
    subtitleStart: "Start of subtitle",
    subtitleEnd: "End of subtitle",
    body: "Test bio body.",
    tanEllipse: "/path/to/tan.svg",
    brownEllipse: "/path/to/brown.svg",
    johnImage: "/path/to/john.png",
  },
  socialLinks: [
    {
      link: "https://linkedin.com/test",
      icon: "/path/to/linkedin.svg",
      alternateText: "LinkedIn",
    },
    {
      link: "https://github.com/test",
      icon: "/path/to/github.svg",
      alternateText: "GitHub",
    },
  ],
}));

describe("Bio Component", () => {
  it("renders the bio title", () => {
    render(<Bio />);
    expect(screen.getByText(bioData.title)).toBeInTheDocument();
  });

  it("renders the bio subtitle", () => {
    render(<Bio />);
    expect(
      screen.getByText(`${bioData.subtitleStart} ${bioData.subtitleEnd}`)
    ).toBeInTheDocument();
  });

  it("renders the bio body", () => {
    render(<Bio />);
    expect(screen.getByText(bioData.body)).toBeInTheDocument();
  });

  it('renders the "name" image with the correct src and alt', () => {
    render(<Bio />);
    const nameImage = screen.getByAltText("name");
    expect(nameImage).toBeInTheDocument();
    expect(nameImage).toHaveAttribute("src", bioData.nameInCode);
  });

  it("renders the tan ellipse image with the correct src and alt", () => {
    render(<Bio />);
    const tanEllipseImage = screen.getByAltText("Tan Ellipse");
    expect(tanEllipseImage).toBeInTheDocument();
    expect(tanEllipseImage).toHaveAttribute("src", bioData.tanEllipse);
  });

  it("renders the brown ellipse image with the correct src and alt", () => {
    render(<Bio />);
    const brownEllipseImage = screen.getByAltText("Brown Ellipse");
    expect(brownEllipseImage).toBeInTheDocument();
    expect(brownEllipseImage).toHaveAttribute("src", bioData.brownEllipse);
  });

  it("renders the john image with the correct src and alt", () => {
    render(<Bio />);
    const johnImage = screen.getByAltText("John");
    expect(johnImage).toBeInTheDocument();
    expect(johnImage).toHaveAttribute("src", bioData.johnImage);
  });

  it("renders the social links", () => {
    render(<Bio />);
    const socialLinkElements = screen.getAllByRole("link");
    expect(socialLinkElements).toHaveLength(socialLinks.length);

    socialLinkElements.forEach((linkElement, index) => {
      const social = socialLinks[index];
      expect(linkElement).toHaveAttribute("href", social.link);
      expect(linkElement).toHaveAttribute("target", "_blank");
      expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
      const icon = linkElement.querySelector("img");
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute("src", social.icon);
      expect(icon).toHaveAttribute("alt", social.alternateText);
    });
  });

  it("uses the alternateText as the key for social links", () => {
    render(<Bio />);
    const socialLinkElements = screen.getAllByRole("link");
    socialLinkElements.forEach((linkElement, index) => {
      expect(linkElement).toHaveAttribute(
        "key",
        socialLinks[index].alternateText
      );
    });
  });
});
