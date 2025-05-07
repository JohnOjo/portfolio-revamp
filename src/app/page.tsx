"use client";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Footnote from "./components/Footnote/Footnote";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Bio from "./components/Bio/Bio";
import TechnologiesUsed from "./components/TechnologiesUsed/TechnologiesUsed";
import FireFlies from "./components/FireFlies/FireFlies";

const Home = () => {
  useScrollReveal(".reveal", 80);

  return (
    <div className="App">
      <Header />
      <FireFlies />
      <Bio />
      <TechnologiesUsed />
      <Projects />
      <About />
      <Footnote />
    </div>
  );
};

export default Home;
