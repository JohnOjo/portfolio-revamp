import Angular from "../../assets/angular.svg";
import AmazonWebServices from "../../assets/amazon_web_services.svg";
import NodeJs from "../../assets/nodejs.svg";
import NetCore from "../../assets/net_core.svg";
import ReactImage from "../../assets/react.svg";
import Postgresql from "../../assets/postgresql.svg";
import MongoDB from "../../assets/mongo_db.svg";
import Html from "../../assets/html.svg";
import TypeScript from "../../assets/typescript.svg";
import JavaScript from "../../assets/javascript.svg";
import CSharp from "../../assets/csharp.png";
import Css from "../../assets/css.svg";
import Docker from "../../assets/docker.png";
import Express from "../../assets/express.png";
import Java from "../../assets/java.svg";
import Azure from "../../assets/azure.svg";
import Kubernetes from "../../assets/kubernetes.svg";
import Teach from "../../assets/teach.svg";
import Lecture from "../../assets/lecture.svg";
import LinkedInIcon from "../../assets/linked-in.svg";
import CVIcon from "../../assets/cv.svg";
import LeetCodeIcon from "../../assets/leetcode.svg";

export const technologiesUsed: Technology[] = [
  { name: "Java", logo: Java },
  { name: "React", logo: ReactImage },
  { name: "Node.js", logo: NodeJs },
  { name: ".NET Core", logo: NetCore },
  { name: "AWS", logo: AmazonWebServices },
  { name: "Azure", logo: Azure },
  { name: "Kubernetes", logo: Kubernetes },
  { name: "Docker", logo: Docker },
  { name: "Angular", logo: Angular },
  { name: "PostgreSQL", logo: Postgresql },
  { name: "Express", logo: Express },
  { name: "TypeScript", logo: TypeScript },
  { name: "JavaScript", logo: JavaScript },
  { name: "C#", logo: CSharp },
  { name: "HTML", logo: Html },
  { name: "CSS", logo: Css },
  { name: "MongoDB", logo: MongoDB },
];

export const bioData = {
  title: "Hi! I'm John Ojo and I solve problems",
  subtitleStart: "Software Engineer |",
  subtitleEnd: " AWS Certified | Microsoft Azure Certified",
  body: "What I love the most about my field is that it's all about solving problems, challenging each other as a team, enhancing user experience and continuously improving. I want to be part of a team that thinks differently and has various approaches to problem-solving while adding value to people. I want to be a bridge between customers and their solutions, and I want to build software that inspires and makes an impact.",
  nameInCode: require("../../assets/name_in_code.svg"),
  tanEllipse: require("../../assets/tan_ellipse.svg"),
  brownEllipse: require("../../assets/brown_ellipse.svg"),
  johnImage: require("../../assets/john_image.png"),
};

export const socialLinks: SocialLink[] = [
  {
    link: "https://www.linkedin.com/in/john-ojo",
    icon: LinkedInIcon,
    alternateText: "LinkedIn",
  },
  {
    link: "https://github.com/JohnOjo/Portfolio/blob/main/src/assets/John%20Ojo%20-%20CV.pdf",
    icon: CVIcon,
    alternateText: "CV",
  },
  {
    link: "https://leetcode.com/johnojo97",
    icon: LeetCodeIcon,
    alternateText: "LeetCode",
  },
];

export const aboutCards: GivingBack[] = [
  {
    title: "Teaching Students",
    text: "Sharing information is one of the great things about our industry. There are plenty of online resources and question and answer websites to gain information from. This got me thinking, “How can I help others learn and grow in our industry?”. In 2021 I joined in on teaching university students industry technologies and practices. Seeing them innovate and work as a team was a joy to watch and be part of. I was able to give them knowledge that I didn’t have when I was in school and help nurture our industry.",
    image: Teach,
  },
  {
    title: "Guest Lecture",
    text: "In addition to teaching students, I got the opportunity to give a guest lecture on Git to over 100 students from all over the globe. As a student myself in undergrad I always admired my lecturers in how they played a big part in teaching the next generation and being able to help others in the same way was a pleasure.",
    image: Lecture,
  },
];
