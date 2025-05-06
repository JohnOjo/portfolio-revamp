"use client";
import { TECHNOLOGIES_USED } from "./constants/headerConstants";
import "./Home.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footnote from "./components/Footnote/Footnote";
import { generateFireFlies } from "./helpers/animationHelper";
import { technologiesUsed } from "./data/homePageData";
import { useScrollReveal } from "./hooks/useScrollReveal";
import TechnologyItem from "./components/TechnologyItem/TechnologyItem";
import Bio from "./components/Bio/Bio";

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
      <Bio />
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
