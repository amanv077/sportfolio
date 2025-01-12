import GradientText from "../components/GradientTtext";
import Button from "../components/Button";
import PlayerInfoCard from "../components/Card/Player/PlayerCard";

const RisingStars = ({ players }) => {
  return (
    <div className="text-white px-10 md:px-10 my-12">
      <img
        loading="lazy"
        src="/assets/images/FourthPageImage01.png"
        alt="Marketplace Banner"
        className="object-contain rounded-md shadow-lg w-auto mx-auto"
      />

      <h2 className="flex text-center align-center justify-center mb-3 mx-auto">
        <GradientText size="md">Meet the&nbsp;</GradientText>
        <GradientText size="md" variant="darkerGradient">
          Rising Stars
        </GradientText>
        <GradientText size="md">&nbsp; of College Sports</GradientText>
      </h2>

      <p className="subheading mb-24">
        Discover athletes breaking records and redefining the game. Sponsor them
        or own their exclusive collectibles.
      </p>

      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto">
        {players.map((player) => (
          <PlayerInfoCard {...player} key={player.name} />
        ))}
      </div>

      <div className="my-12 flex flex-col items-center max-w-sm mx-auto">
        <Button variant="light">Explore All Athletes</Button>
      </div>
    </div>
  );
};

export default RisingStars;
