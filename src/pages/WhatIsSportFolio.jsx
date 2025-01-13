import GradientText from "../components/GradientTtext";
import GradientCard from "../components/Card/Gradient";

const cards = [
  {
    id: "initial",
    package: "Initial",
    title: "Athletes Build Their Brand",
    description:
      "Create a verified profile, Showcase your achievements, Connect directly with sponsors",
    list: [
      "Create a verified profile",
      "Showcase your achievements",
      "Connect directly with sponsors",
    ],
  },
  {
    id: "mid-level",
    package: "Mid-Level",
    title: "Fans Collect & Support",
    description:
      "Own unique athlete NFTs, Engage in events, Be part of your favorite athletes' journeys",
    list: [
      "Own unique athlete NFTs",
      "Engage in events",
      "Be part of your favorite athletes' journeys",
    ],
  },
  {
    id: "final",
    package: "Final",
    title: "Sponsors Create Deals",
    description:
      "Launch campaigns, Custom terms using secure, transparent smart contracts, Lorem ipsum dolor sit amet consectetur",
    list: [
      "Launch campaigns",
      "Custom terms using secure, transparent smart contracts",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
];

const HeroTwo = () => {
  return (
    <div className="py-16 px-4 mb-0 mt-20">
      <h2 className="flex text-center align-center justify-center mb-12 mx-auto">
        <GradientText size="md">How&nbsp;</GradientText>
        <GradientText size="md" variant="darkerGradient">
          Sportfolio
        </GradientText>
        <GradientText size="md">&nbsp;Works</GradientText>
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        {cards.map((card, index) => {
          const isLast = index === cards.length - 1;
          const extraStyle = !isLast
            ? { paddingBottom: "34px", marginBottom: "-24px" }
            : {};
          return (
            <div
              key={card.id}
              className="rounded-3xl max-w-lg shadow-xl transform hover:scale-105 transition duration-300 ease-out border border-blue-400 border-opacity-30"
              style={{ minWidth: `${70 + index * 7}%`, ...extraStyle }}
            >
              <GradientCard
                radialGradientPosition="0% -20%"
                className="relative flex flex-col md:flex-row items-start justify-between gap-1"
                style={{ ...extraStyle }}
                size="lg"
              >
                <div className="md:w-1/2">
                  <img
                    src="/assets/images/Logo.png"
                    alt="logo"
                    width="20px"
                    className="mb-10"
                  />
                  <GradientText
                    component="p"
                    className="text-xs uppercase tracking-wider mb-2 opacity-60"
                    variant="normalGradient"
                  >
                    {card.package}
                  </GradientText>
                  <GradientText size="sm" variant="lighterGradient">
                    {card.title}
                  </GradientText>
                </div>
                <ul className="card-list pl-2 space-y-6 text-md md:w-1/2 text-left mt-auto mb-4">
                  {card.list.map((item) => (
                    <li key={item} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </GradientCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTwo;
