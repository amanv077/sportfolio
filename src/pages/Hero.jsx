import Button from "../components/Button";
import PlayerInfoCard from "../components/Card/Player/PlayerCard";
import Heading from "../components/Heading";

const players = [
  {
    name: "John Doe",
    age: 25,
    number: 10,
    imageUrl: "/assets/images/03.png",
    color: "green",
  },
  {
    name: "Jane Smith",
    age: 22,
    number: 7,
    imageUrl: "/assets/images/04.png",
    color: "#BF0020",
  },
  {
    name: "Mike Johnson",
    age: 28,
    number: 15,
    imageUrl: "/assets/images/05.png",
    color: "yellow",
  },
  {
    name: "Chris Evans",
    age: 30,
    number: 8,
    imageUrl: "/assets/images/03.png",
    color: "blue",
  },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden text-white h-full px-4">
      <div className="text-center mb-12 my-16 mx-40">
        <Heading
          className="text-center mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 onest-600 max-w-3xl"
          variant="lighterGradient"
        >
          Unlock the Power of College Sports NIL Deals
        </Heading>
        <p className="text-lg sm:text-lg lg:text-lg font-base max-w-xl mx-auto">
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

      <div className="flex flex-row gap-3 justify-center items-center mt-12">
        {players.map((player) => (
          <PlayerInfoCard {...player} key={player.name} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
