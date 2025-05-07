"use client";
import { useState } from "react";
import "./Projects.css";
import { MY_WORK } from "../../constants/headerConstants";
import Image from "next/image";
import { favouriteProjects, otherProjects } from "@/app/data/projectsData";
import FireFlies from "../FireFlies/FireFlies";

const Projects = () => {
  const [showFavouriteProjects, setShowFavouriteProjects] =
    useState<boolean>(true);

  const generateProjects = (profiles: any) => {
    if (profiles?.length > 0) {
      return profiles.map((profile: any, index: any) =>
        renderProject(profile, index)
      );
    }
  };

  const renderProject = (project: any, index: any) => {
    return (
      <div className={"other-project-container"} key={index}>
        <div className={"project-container"}>
          <div className={"project-card-container"}>
            <div className={"project-card-chips-container"}>
              {generateChips(project?.chips)}
            </div>
            <div className={"project-card-content slide"}>
              <div className={"project-technologies-used-list-container"}>
                {generateProjectTechnologies(project?.technologiesUsedImages)}
              </div>
              <div className={"project-card-title"}>{project?.title}</div>
            </div>
          </div>
          <div className={"project-text-container"}>
            {generateProjectInfo(project?.body)}
            {project?.extraProjectInfo && (
              <div className={"project-text-container"}>
                {generateProjectInfo(project?.extraProjectInfo)}
                <br />
                {generateLinks(project?.links)}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const generateProjectInfo = (whoIsItFor: string[]) => {
    if (whoIsItFor?.length > 0) {
      return whoIsItFor.map((bodyItem: any, index: any) => {
        return (
          <li className={"list"} key={bodyItem}>
            <span className={"list-span"}>{bodyItem}</span>
          </li>
        );
      });
    }
  };

  const generateProjectTechnologies = (technologies: string[]) => {
    if (technologies?.length > 0) {
      return technologies.map((technology: any, index: any) => {
        return (
          <Image
            className={"project-technologies-used"}
            src={technology}
            alt={"technology"}
            key={index}
          />
        );
      });
    }
  };

  const generateLinks = (links: any) => {
    if (links?.length > 0) {
      return links.map((link: any, index: any) => {
        return (
          <div className={"link-container"} key={index}>
            <div className={"link-info"}>{link?.info}&nbsp;</div>
            <a
              className={"link"}
              href={link?.link}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {link?.linkDisplayName}
            </a>
          </div>
        );
      });
    }
  };

  const handleChipClick = (showFavouriteProjects: any) => {
    setShowFavouriteProjects(showFavouriteProjects);
  };

  const generateChips = (chips: any) => {
    if (chips?.length > 0) {
      return chips.map((chip: any, index: any) => {
        return (
          <div className={"chip-flexible-width"} key={index}>
            {chip}
          </div>
        );
      });
    }
  };

  const favouriteProjectsTitle = "Favourite Projects";
  const otherProjectsTitle = "All Projects";

  return (
    <div className={"projects-container"}>
      <FireFlies />
      <div className={"projects-title"}>{"Portfolio"}</div>
      <div className={"my-work-title"}>{MY_WORK}</div>
      <div className={"chip-container"}>
        <div
          className={showFavouriteProjects ? "chip" : "chip chip-shade"}
          onClick={() => handleChipClick(true)}
        >
          {favouriteProjectsTitle}
        </div>
        <div
          className={!showFavouriteProjects ? "chip" : "chip chip-shade"}
          onClick={() => handleChipClick(false)}
        >
          {otherProjectsTitle}
        </div>
      </div>
      <div className={"projects-title"}>
        {showFavouriteProjects ? favouriteProjectsTitle : otherProjectsTitle}
      </div>
      {generateProjects(
        showFavouriteProjects
          ? favouriteProjects
          : [...otherProjects, ...favouriteProjects]
      )}
    </div>
  );
};

export default Projects;
