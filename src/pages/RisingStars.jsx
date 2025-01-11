import GradientText from "../components/GradientTtext";
import Button from "../components/Button";
import PlayerInfoCard from "../components/Card/Player/PlayerCard";

const RisingStars = ({ players }) => {
  return (
    <div className="text-white px-10 md:px-10 my-12">
      <img
        loading="lazy"
        src="HeroThree.png"
        alt="Marketplace Banner"
        className="object-contain rounded-md shadow-lg w-auto mx-auto -mb-24"
      />

      <h2 className="flex text-center align-center justify-center mb-3 mx-auto">
        <GradientText size="md">Explore the&nbsp;</GradientText>
        <GradientText size="md" variant="darkerGradient">
          Marketplace
        </GradientText>
        <GradientText size="md">&nbsp; Explore the</GradientText>
      </h2>

      <p className="subheading mb-24">
        From exclusive NFT drops to top-tier sponsorship campaigns, Sportfolio
        brings the power of sports closer to you.
      </p>

      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto">
        {players.map((player) => (
          <PlayerInfoCard {...player} key={player.name} />
        ))}
      </div>

      <div className="my-12 flex flex-col items-center max-w-sm mx-auto">
        <Button variant="light">Trending NFTs</Button>
      </div>
    </div>
  );
};

export default RisingStars;
