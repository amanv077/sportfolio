import ActiveButton from "../components/Button";
import PlayerCard from "../components/PlayerCard";

const headingStyle = {
  background:
    "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(0deg, #66B3FF 21.22%, #E6F2FF 102.25%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  // backgroundBlendMode: "plus - lighter, normal",
  // textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 25px #00408080",
};

const Hero = () => {
  return (
    <div className="bg-[#000C1A] text-white h-full px-4">
      {/* Hero Title Section */}
      <div className="text-center mb-12 my-16 mx-40">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 onest-500"
          style={headingStyle}
        >
          Unlock the Power of College Sports NIL Deals
        </h1>
        <h4 className="text-lg sm:text-lg lg:text-lg font-light max-w-lg mx-auto">
          Where Athletes, Sponsors, and Fans Connect through Blockchain-Powered
          NIL Contracts and Digital Collectibles.
        </h4>
      </div>

      {/* Buttons */}
      <div className="flex justify-center mb-8 space-x-4">
        <ActiveButton>Join As An Athlete</ActiveButton>
        <ActiveButton>Start Sponsoring</ActiveButton>
      </div>

      {/* Marketplace Heading */}
      <div className="text-center mb-8">
        <h6 className="text-xl font-semibold">Explore Marketplace</h6>
      </div>

      {/* Slider-like Player Cards Section */}
      <div className="flex overflow-x-auto gap-6 py-6">
        <div className="flex flex-nowrap gap-6">
          <PlayerCard image="/02.png" name="John Doe" number="14" age="31" />
          <PlayerCard image="/02.png" name="Jane Smith" number="10" age="28" />
          <PlayerCard
            image="/03.png"
            name="Alice Cooper"
            number="23"
            age="24"
          />
          <PlayerCard image="/04.png" name="Bob Harris" number="7" age="27" />
          <PlayerCard
            image="/05.png"
            name="Charlie King"
            number="22"
            age="29"
          />
          <PlayerCard image="/06.png" name="David Lewis" number="8" age="26" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
