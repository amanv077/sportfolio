import Button from "../components/Button";
import PlayerInfoCard from "../components/Card/Player/PlayerCard";
import GradientText from "../components/GradientTtext";

const Hero = ({ players }) => {
  return (
    <div className="relative overflow-hidden text-white h-full px-4">
      <div className="text-center mb-12 my-16 mx-40">
        <GradientText
          className="text-center mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 onest-600 max-w-3xl"
          variant="lighterGradient"
          component="h1"
        >
          Unlock the Power of College Sports NIL Deals
        </GradientText>
        <p className="subheading">
          Where Athletes, Sponsors, and Fans Connect through Blockchain-Powered
          NIL Contracts and Digital Collectibles.
        </p>
      </div>

      <div className="flex justify-center mb-8 space-x-4">
        <Button variant="light">Join As An Athlete</Button>
        <Button variant="light">Start Sponsoring</Button>
      </div>

      <div className="text-center mb-8">
        <h6 className="text-xl font-semibold">Explore Marketplace</h6>
      </div>

      <div className="flex flex-row gap-3 justify-center items-center mt-12 card-mask-transparent">
        {players.map((player) => (
          <PlayerInfoCard {...player} key={player.name} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
