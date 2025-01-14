import Button from "../components/Button";
import PlayerInfoCard from "../components/Card/Player/PlayerCard";
import GradientText from "../components/GradientTtext";

const Hero = ({ players }) => {
  return (
    <div className="relative text-white px-4">
      <div className="text-center my-6 mx-4 sm:mx-10 md:mx-20 lg:mx-40">
        <GradientText
          className="text-center mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 onest-600 max-w-3xl"
          variant="lighterGradient"
          component="h1"
        >
          Unlock the Power of College Sports NIL Deals
        </GradientText>
        <p className="subheading text-sm sm:text-base md:text-lg">
          Where Athletes, Sponsors, and Fans Connect through Blockchain-Powered
          NIL Contracts and Digital Collectibles.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center mb-2 space-y-2 sm:space-y-0 sm:space-x-4">
        <Button variant="light">Join As An Athlete</Button>
        <Button variant="light">Start Sponsoring</Button>
      </div>

      <div className="text-center mt-4 flex justify-center flex-col">
        <GradientText
          variant="darkerGradient"
          className="subheading text-xs sm:text-sm text-center mx-auto mb-1"
        >
          Explore Marketplace
        </GradientText>
        <img
          src="/assets/images/DoubleDown.svg"
          alt="logo"
          width="20px"
          className="mb-4 mx-auto"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-2 card-mask-transparent overflow-x-auto mx-auto">
        {players.map((player, index) => (
          <PlayerInfoCard
            {...player}
            key={player.name}
            isActive={index === 3}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
