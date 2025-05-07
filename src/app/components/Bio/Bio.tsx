import "./Bio.css";
import { bioData, socialLinks } from "@/app/data/homePageData";
import Image from "next/image";

const Bio = () => {
  const renderSocialLinks = () => {
    return socialLinks.map((socialLink, index) => (
      <a
        href={socialLink.link}
        target={"_blank"}
        rel={"noopener noreferrer"}
        key={index}
      >
        <Image
          className={"contact-icon"}
          src={socialLink.icon}
          alt={socialLink.alternateText}
        />
      </a>
    ));
  };

  return (
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
        <div className={"contact-icons-container"}>{renderSocialLinks()}</div>
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
  );
};

export default Bio;
