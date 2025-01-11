import CardNoiseBackground from "../../../assets/images/card-noise-background.png";
import ImageSection from "./ImageSection";
import PlayerInfoWrapper from "./InfoWrapper";

const PlayerInfoCard = ({ name, number, age, color, imageUrl }) => {
  return (
    <div
      className="w-[200px] h-[300px] bg-gray-700 rounded-3xl shadow-lg overflow-hidden relative min-w-[200px] min-h-[300px]"
      style={{ backgroundColor: color }}
    >
      <img
        src={CardNoiseBackground}
        className="top-0 w-full object-cover absolute left-1/2 transform -translate-x-1/2 rounded-b-[60%] pointer-events-none"
        role="presentation"
      />
      <img
        src={imageUrl}
        className="top-0 w-full object-cover absolute left-1/2 transform -translate-x-1/2 rounded-b-[60%] pointer-events-none z-20"
        alt={name}
        style={{
          clipPath: "url(#customClipPath)",
          webkitClipPath: "url(#customClipPath)",
          width: "92%",
        }}
      />
      <ImageSection color={color} />

      {/* <img src={CardImageSection} className="relative mx-auto w-11/12 z-10" /> */}

      <PlayerInfoWrapper name={name} number={number} age={age} color={color} />
    </div>
  );
};

export default PlayerInfoCard;
