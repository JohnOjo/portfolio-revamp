import Image from "next/image";
import Angular from '../assets/angular.svg'
import AmazonWebServices from '../assets/amazon_web_services.svg'
import NodeJs from '../assets/nodejs.svg'
import NetCore from '../assets/net_core.svg'
import ReactImage from '../assets/react.svg'
import Postgresql from '../assets/postgresql.svg'
import MongoDB from '../assets/mongo_db.svg'
import Html from '../assets/html.svg'
import TypeScript from '../assets/typescript.svg'
import JavaScript from '../assets/javascript.svg'
import CSharp from '../assets/csharp.png'
import Css from '../assets/css.svg'
import Docker from '../assets/docker.png'
import Express from '../assets/express.png'
import Java from '../assets/java.svg'
import Azure from '../assets/azure.svg'
import Kubernetes from '../assets/kubernetes.svg'
import NameInCode from '../assets/name_in_code.svg'
import LinkedIn from '../assets/linked-in.svg'
import LeetCode from '../assets/leetcode.svg'
import CvIcon from '../assets/cv.svg'
import JohnImage from '../assets/john_image.png'
import TanEllipse from '../assets/tan_ellipse.svg'
import BrownEllipse from '../assets/brown_ellipse.svg'
import "./Home.css";

export default function Home() {
  const bioTitle = 'Hi! I\'m John Ojo and I solve problems'
        const bioSubTitleStart = 'Software Engineer |'
        const bioSubTitleEnd = ' AWS Certified | Microsoft Azure Certified'
        const bioBody = 'What I love the most about my field is that it\'s all about solving problems, challenging each other as a team, enhancing user experience and continuously improving. I want to be part of a team that thinks differently and has various approaches to problem-solving while adding value to people. I want to be a bridge between customers and their solutions, and I want to build software that inspires and makes an impact.'
        const linkedInLink = 'https://www.linkedin.com/in/john-ojo-b2b24115b/'
        const leetCodeLink = 'https://leetcode.com/johnojo97/'
        const technologiesUsed = [
            { name: 'Java', logo: Java }, { name: 'React', logo: ReactImage }, { name: 'Node.js', logo: NodeJs },
            { name: '.NET Core', logo: NetCore }, { name: 'AWS', logo: AmazonWebServices }, { name: 'Azure', logo: Azure },
            { name: 'Kubernetes', logo:  Kubernetes }, { name: 'Docker', logo: Docker }, { name: 'Angular', logo: Angular }, { name: 'PostgreSQL', logo: Postgresql },
            { name: 'Express', logo: Express }, { name: 'TypeScript', logo: TypeScript }, { name: 'JavaScript', logo: JavaScript },
            { name: 'C#', logo:  CSharp }, { name: 'HTML', logo:  Html }, { name: 'CSS', logo:  Css }, { name: 'MongoDB', logo: MongoDB },
        ]

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className={'about-me-container'}>
          <div className={'about-me-bio'}>
              <Image className={'name-in-code'} src={NameInCode} alt={'name'} />
              <div className={'about-me-title'}>{bioTitle}</div>
              <div className={'about-me-subtitle'}>
                  <div className={'about-me-subtitle-start'}>{bioSubTitleStart}&nbsp;</div>
                  <div className={'about-me-subtitle-end'}>{bioSubTitleEnd}</div>
              </div>
              <div className={'about-me-body'}>{bioBody}</div>
              <div className={'contact-icons-container'}>
                  <a href={linkedInLink} target={'_blank'} rel={'noopener noreferrer'}>
                      <Image className={'contact-icon'} src={LinkedIn} alt={'LinkedIn'} />
                  </a>
                  <a href={'https://github.com/JohnOjo/Portfolio/blob/main/src/assets/John%20Ojo%20-%20CV.pdf'} target={'_blank'} rel={'noopener noreferrer'}>
                      <Image className={'contact-icon'} src={CvIcon} alt={'CV'} />
                  </a>
                  <a href={leetCodeLink} target={'_blank'} rel={'noopener noreferrer'}>
                      <Image className={'contact-icon'} src={LeetCode} alt={'LeetCode'} />
                  </a>
              </div>
          </div>
          <div className={'about-me-image-container'}>
              <Image className={'about-me-tan-ellipse'} src={TanEllipse} alt={'Tan Ellipse'}/>
              <Image className={'about-me-brown-ellipse'} src={BrownEllipse} alt={'Brown Ellipse'}/>
              <Image className={'about-me-image'} src={JohnImage} alt={'John'}/>
          </div>
      </div>
    </div>
  );
}
