import CardNoiseBackground from "../../../assets/images/card-noise-background.png";
import ImageSection from "./ImageSection";
import PlayerInfoWrapper from "./InfoWrapper";

const PlayerInfoCard = (props) => {
  const { name, color, imageUrl, isActive } = props;
  return (
    <div
      className="w-[275px] h-[450px] bg-gray-700 rounded-3xl shadow-lg overflow-hidden relative min-w-[275px] min-h-[450px]"
      style={{
        backgroundColor: color,
        ...(isActive && {
          width: "295px",
          height: "490px",
          minWidth: "295px",
          maxWidth: "490px",
        }),
      }}
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

      <PlayerInfoWrapper {...props} />
    </div>
  );
};

export default PlayerInfoCard;
