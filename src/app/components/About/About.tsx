import { aboutCards } from "@/app/data/homePageData";
import { ABOUT_ME } from "../../constants/headerConstants";
import "./About.css";
import Image from "next/image";

const About = () => {
  const generateAbout = (aboutCards: any[]) => {
    if (aboutCards?.length > 0) {
      return aboutCards.map((aboutCard, index) => {
        return (
          <div className={"about-blocks-container"} key={index}>
            <div className={"about-image-container reveal"}>
              <div className={"about-text-container"}>
                <div className={"about-text-title"}>{aboutCard?.title}</div>
                <div className={"about-text"}>{aboutCard?.text}</div>
              </div>
              <Image
                className={"about-image"}
                src={aboutCard?.image}
                alt={"about"}
              />
            </div>
          </div>
        );
      });
    }
  };

  return (
    <div className={"about"}>
      <div className={"about-header-container"}>
        <div className={"about-header"}>{ABOUT_ME}</div>
      </div>
      {generateAbout(aboutCards)}
    </div>
  );
};

export default About;
