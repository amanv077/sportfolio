import GradientText from "../components/GradientTtext";
import GradientCard from "../components/Card/Gradient";
import Button from "../components/Button";

const cardData = {
  imageUrl: "/assets/images/CardImage.png",
  rarity: "Legendary",
  edition: "50",
  playerName: "Trae Young",
  description: "3 Pointer - Dec 6 2024",
  series: "Holo Icon (Series 2024-25), ATL",
  lowestAsk: "USD $299.00",
  avgSale: "USD $260.50",
};
const cards = Array(8).fill(cardData);

const MarketplaceExplorer = () => {
  return (
    <div className="text-white px-10 md:px-10 m-b12">
      <img
        loading="lazy"
        src="HeroThree.png"
        alt="Marketplace Banner"
        className="object-contain rounded-md shadow-lg w-auto mx-auto -mb-24 max-w-7xl"
      />

      <h2 className="flex text-center align-center justify-center mb-3 mx-auto">
        <GradientText size="md">Explore the&nbsp;</GradientText>
        <GradientText size="md" variant="darkerGradient">
          Marketplace
        </GradientText>
      </h2>

      <p className="subheading mb-24">
        From exclusive NFT drops to top-tier sponsorship campaigns, Sportfolio
        brings the power of sports closer to you.
      </p>

      <div className="flex flex-wrap gap-6 justify-center max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#000B1A] border border-[#001E59] rounded-3xl shadow-md min-w-[275px] max-w-[275px] md:max-w-[200px] transform hover:scale-105 transition duration-300 ease-out"
          >
            <GradientCard isLinearGradient>
              <img
                src={card.imageUrl}
                alt={card.playerName}
                className="w-full object-cover rounded-md"
              />
            </GradientCard>
            <div className="flex flex-col gap-2 p-4">
              <p className="text-xs mb-1">
                <span className="font-semibold">{card.rarity}</span>
                <span className="font-light"> / {card.edition} </span>
              </p>
              <GradientText size="sm" className="uppercase">
                {card.playerName}
              </GradientText>
              <div>
                <p className="text-xs font-light">{card.description}</p>
                <p className="text-xs font-light">{card.series}</p>
              </div>
              <div className="mt-5">
                <p
                  className="text-xs font-light flex flex-row justify-between"
                  style={{ alignItems: "center" }}
                >
                  Lowest Ask:
                  <span className="text-lg font-semibold">
                    {card.lowestAsk}
                  </span>
                </p>
                <p
                  className="text-xs font-light flex flex-row justify-between"
                  style={{ alignItems: "center" }}
                >
                  Avg. Sale:
                  <span className="font-extralight">{card.avgSale}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="my-12 flex flex-col items-center max-w-sm mx-auto">
        <Button variant="light" fullWidth>
          Trending NFTs
        </Button>
        <div className="flex gap-4 mt-4 w-full">
          <Button variant="dark" fullWidth>
            Athlete Highlights
          </Button>
          <Button variant="dark" fullWidth>
            Live Deals
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceExplorer;
