"use client";
import Image from "next/image";
import { TECHNOLOGIES_USED } from "./constants/headerConstants";
import "./Home.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footnote from "./components/Footnote/Footnote";
import { generateFireFlies } from "./helpers/animationHelper";
import { bioData, socialLinks, technologiesUsed } from "./data/homePageData";
import { useScrollReveal } from "./hooks/useScrollReveal";
import TechnologyItem from "./components/TechnologyItem/TechnologyItem";

const Home = () => {
  useScrollReveal(".reveal", 80);

  const renderTechnologies = (technologies: any[]) => {
    return technologies.map((technology, index) => (
      <TechnologyItem key={index} technology={technology} />
    ));
  };

  return (
    <div className="App">
      <Header />
      {generateFireFlies()}
      <div className={"about-me-container"}>
        <div className={"about-me-bio"}>
          <Image
            className={"name-in-code"}
            src={bioData.nameInCode}
            alt={"name"}
          />
          <div className={"about-me-title"}>{bioData.title}</div>
          <div className={"about-me-subtitle"}>
            <div className={"about-me-subtitle-start"}>
              {bioData.subtitleStart}&nbsp;
            </div>
            <div className={"about-me-subtitle-end"}>{bioData.subtitleEnd}</div>
          </div>
          <div className={"about-me-body"}>{bioData.body}</div>
          <div className={"contact-icons-container"}>
            <a
              href={socialLinks.linkedIn}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Image
                className={"contact-icon"}
                src={socialLinks.linkedInIcon}
                alt={"LinkedIn"}
              />
            </a>
            <a
              href={socialLinks.cv}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Image
                className={"contact-icon"}
                src={socialLinks.cvIcon}
                alt={"CV"}
              />
            </a>
            <a
              href={socialLinks.leetCode}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <Image
                className={"contact-icon"}
                src={socialLinks.leetCodeIcon}
                alt={"LeetCode"}
              />
            </a>
          </div>
        </div>
        <div className={"about-me-image-container"}>
          <Image
            className={"about-me-tan-ellipse"}
            src={bioData.tanEllipse}
            alt={"Tan Ellipse"}
          />
          <Image
            className={"about-me-brown-ellipse"}
            src={bioData.brownEllipse}
            alt={"Brown Ellipse"}
          />
          <Image
            className={"about-me-image"}
            src={bioData.johnImage}
            alt={"John"}
          />
        </div>
      </div>
      <div className={"technologies-container reveal"}>
        <div className={"technologies-title"}>{TECHNOLOGIES_USED}</div>
        <div className={"technologies-list-container"}>
          {renderTechnologies(technologiesUsed)}
        </div>
      </div>
      <Projects />
      <About />
      <Footnote />
    </div>
  );
};

export default Home;
