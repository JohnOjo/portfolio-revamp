import "./TechnologiesUsed.css";
import { technologiesUsed } from "@/app/data/homePageData";
import TechnologyItem from "../TechnologyItem/TechnologyItem";
import { TECHNOLOGIES_USED } from "@/app/constants/headerConstants";

const TechnologiesUsed = () => {
  const renderTechnologies = () => {
    return technologiesUsed.map((technology) => (
      <TechnologyItem key={technology.name} technology={technology} />
    ));
  };

  return (
    <div className={"technologies-container reveal"}>
      <div className={"technologies-title"}>{TECHNOLOGIES_USED}</div>
      <div className={"technologies-list-container"}>
        {renderTechnologies()}
      </div>
    </div>
  );
};

export default TechnologiesUsed;
