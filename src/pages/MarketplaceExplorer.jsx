const cardData = {
  image: "CardImage.png",
  rarity: "Legendary",
  edition: "50",
  playerName: "Trae Young",
  description: "3 Pointer - Dec 6 2024",
  series: "Holo Icon (Series 2024-25), ATL",
  lowestAsk: "USD $299.00",
  avgSale: "USD $260.50",
};

const MarketplaceExplorer = () => {
  const cards = Array(8).fill(cardData); // Array of 8 identical cards

  return (
    <div className="text-white px-6 md:px-10 ">
      {/* Banner Section */}
      <div className="flex flex-col items-center mb-10">
        <img
          loading="lazy"
          src="HeroThree.png"
          alt="Marketplace Banner"
          className="object-contain max-w-full rounded-md shadow-lg"
        />
      </div>

      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Explore the <span className="block text-blue-400">Marketplace</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Discover exclusive NFT drops and top-tier sponsorship campaigns that
          bring you closer to the power of sports.
        </p>
      </div>

      {/* NFT Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 text-white rounded-lg shadow-md p-4"
          >
            <img
              src={card.image}
              alt={card.playerName}
              className="w-full h-32 object-cover rounded-md mb-3"
            />
            <div className="mb-2">
              <h3 className="text-md font-semibold text-blue-300">
                {card.playerName}
              </h3>
              <p className="text-sm text-gray-400">{card.description}</p>
            </div>
            <ul className="text-sm space-y-1">
              <li>
                <strong className="text-blue-300">Rarity:</strong> {card.rarity}
              </li>
              <li>
                <strong className="text-blue-300">Edition:</strong>{" "}
                {card.edition}
              </li>
              <li>
                <strong className="text-blue-300">Series:</strong> {card.series}
              </li>
              <li>
                <strong className="text-blue-300">Lowest Ask:</strong>{" "}
                {card.lowestAsk}
              </li>
              <li>
                <strong className="text-blue-300">Avg. Sale:</strong>{" "}
                {card.avgSale}
              </li>
            </ul>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col items-center">
        <button className="py-3 px-6 text-lg font-semibold text-gray-900 bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
          Trending NFTs
        </button>
        <div className="flex gap-4 mt-4">
          <button className="py-4 px-5 text-sm font-medium bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300">
            Athlete Highlights
          </button>
          <button className="py-4 px-5 text-sm font-medium bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300">
            Live Deals
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceExplorer;
