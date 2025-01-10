import CardNoiseBackground from "../../assets/images/card-noise-background.png";
import CardImageSection from "../../assets/images/card-image-section.svg";
import PlayerInfoWrapper from "./PlayerInfoWrapper";

const PlayerInfoCard = ({ name, number, age }) => {
  return (
    <div className="w-[200px] h-[300px] bg-gray-700 rounded-lg shadow-lg overflow-hidden relative min-w-[200px] min-h-[300px]">
      <img
        src={CardNoiseBackground}
        className="top-0 w-full object-cover absolute left-1/2 transform -translate-x-1/2 rounded-b-[60%] pointer-events-none"
        role="presentation"
      />
      <img src={CardImageSection} className="relative mx-auto w-11/12 z-10" />

      <PlayerInfoWrapper name={name} number={number} age={age} />
    </div>
  );
};

export default PlayerInfoCard;
