import "./Bio.css";
import { bioData, socialLinks } from "@/app/data/homePageData";
import Image from "next/image";

const Bio = () => {
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
  );
};

export default Bio;
