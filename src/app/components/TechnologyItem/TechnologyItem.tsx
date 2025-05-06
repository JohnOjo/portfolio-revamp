import Image from "next/image";
import "./TechnologyItem.css";

interface TechnologyItemProps {
  technology: { name: string; logo: any };
}

const TechnologyItem: React.FC<TechnologyItemProps> = ({ technology }) => {
  return (
    <div className={"technology-used-container reveal"}>
      <Image
        className={"technology-used"}
        src={technology?.logo}
        alt={"technology"}
      />
      <div className={"technology-name"}>{technology?.name}</div>
    </div>
  );
};

export default TechnologyItem;
