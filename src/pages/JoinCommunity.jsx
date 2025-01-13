import GradientText from "../components/GradientTtext";
import GradientCard from "../components/Card/Gradient";
import Button from "../components/Button";

const list = [
  {
    id: "unique-assets",
    title: "Unique Assets",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo deleniti, quas, voluptates, quos",
    count: "1800+",
  },
  {
    id: "membership",
    title: "Membership",
    description: "Redeem extremely exclusive rewards, perks and benefits.",
    count: "1000+",
  },
  {
    id: "louyalty-points",
    title: "Loyalty Points",
    description: "Earn loyalty points for every time you purchase NFT’s",
    count: "10x",
  },
  {
    id: "creators",
    title: "Creators",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eros libero elit lectus enim accumsan.",
    count: "2.4M",
  },
];

const radialGradients = ["0% 0%", "100% 100%", "100% 0%", "0% 100%"];

const lists = [
  {
    id: 0,
    icon: "SixthPageIcon01",
    heading: "Athlete First",
    description:
      "Guaranteed fair contracts and timely payouts through smart contracts.",
  },
  {
    id: 1,
    icon: "SixthPageIcon02",
    heading: "Transparency & Security",
    description:
      "Immutable blockchain-backed records ensure trust and compliance.",
  },
  {
    id: 2,
    icon: "SixthPageIcon03",
    heading: "Limitless Opportunities",
    description:
      "From sponsorships to NFTs, unlock endless possibilities in college sports NIL",
  },
];

const Card = ({ title, description, count, index }) => {
  return (
    <div className="bg-[#000B1A] border border-[#001E59] rounded-3xl shadow-md min-w-[275px] transform hover:scale-105 transition duration-300 ease-out flex-1 flex">
      <GradientCard
        className="h-full p-2 flex flex-col gap-2"
        radialGradientPosition={radialGradients[index]}
        fullWidth
      >
        <GradientText variant="lighterGradient" size="sm" className="text-lg">
          {title}
        </GradientText>
        <p className="font-light text-sm text-left mb-10">{description}</p>
        <GradientText
          className="uppercase font-semibold text-7xl mt-auto"
          variant="lighterGradient"
        >
          {count}
        </GradientText>
      </GradientCard>
    </div>
  );
};

const JoinCommunity = () => {
  const cards = list.map((card, index) => (
    <Card {...card} key={card.id} index={index} />
  ));

  return (
    <>
      <div className="text-white px-10 md:px-10 mt-32">
        <h2 className="flex text-center align-center justify-center mb-3 mx-auto">
          <GradientText size="md">Join the&nbsp;</GradientText>
          <GradientText size="md" variant="darkerGradient">
            Sportfolio Community
          </GradientText>
        </h2>

        <p className="subheading mb-12">
          Support your favorite athletes and unlock exclusive rewards,
          merchandise, and voting power.
        </p>

        <div className="flex flex-wrap gap-6 max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 flex-1">
            {cards[0]}
            {cards[1]}
          </div>
          {/* Second Card */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="bg-[#000B1A] border border-[#001E59] rounded-3xl shadow-md min-w-[275px] transform hover:scale-105 transition duration-300 ease-out flex-1 flex">
              <GradientCard
                className="h-full flex flex-col gap-3 text-center"
                radialGradientPosition="50% 120%"
                fullWidth
              >
                <img
                  src="/assets/images/backImage.svg"
                  className="object-cover rounded-md"
                  style={{
                    width: "120%",
                    maxWidth: "120%",
                    transform: "translateX(-10%)",
                  }}
                />
                <GradientText
                  variant="lighterGradient"
                  size="sm"
                  className="text-lg text-center mx-auto"
                  component="h6"
                >
                  Community
                </GradientText>
                <p className="font-light text-sm text-center mb-6">
                  Influence platform decisions through governance tokens.
                </p>
                <div className="mx-auto">
                  <Button variant="light">Join Community</Button>
                </div>
              </GradientCard>
            </div>
          </div>
          {/* Third card */}
          <div className="flex flex-col gap-6 flex-1">
            {cards[2]}
            {cards[3]}
          </div>
        </div>
      </div>

      <div className="text-white px-10 md:px-10 mt-24">
        <div className="flex flex-wrap gap-24 max-w-5xl mx-auto">
          <div className="flex flex-col flex-1">
            <img
              src="/assets/images/SixtPageImage.png"
              className="w-5/6 object-cover rounded-md ml-28"
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 align-center justify-center px-10">
            <h3 className="flex text-left align-center mb-2">
              <GradientText size="md">Why Choose&nbsp;</GradientText>
              <GradientText size="md" variant="darkerGradient">
                Sportfolio
              </GradientText>
              <GradientText size="md">&nbsp;?</GradientText>
            </h3>
            <p className="subheading text-left max-w-md mr-auto">
              Experience a trusted, transparent, and athlete-first NIL
              marketplace built on blockchain.
            </p>
            <ul className="card-list flex flex-col gap-6 mt-4 max-w-sm">
              {lists.map((list) => (
                <li
                  key={list.id}
                  style={{
                    paddingLeft: "2rem",
                    position: "relative",
                  }}
                  className={list.icon}
                >
                  <GradientText variant="lighterGradient" className="text-sm">
                    {list.heading}
                  </GradientText>
                  <p className="text-left text-xs font-light">
                    {list.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default JoinCommunity;
