import GradientText from "../components/GradientTtext";

const brands = [
  { imageUrl: "/assets/images/brand/vite.svg", name: "nike" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "adidas" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "espn" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "cbs" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "ethereum" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "ncaa" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "menttech" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "university" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "visa" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "stripe" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "ea-sports" },
  { imageUrl: "/assets/images/brand/vite.svg", name: "twitch" },
];

const BrandScroller = () => {
  return (
    <div className="py-8 card-mask-transparent">
      <div className="overflow-hidden">
        {/* First Scrollable List */}
        <div className="flex space-x-6 animate-scroll">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="min-w-24 min-h-24 flex items-center justify-center bg-[#021027] rounded-lg shadow-md"
            >
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="max-w-[32px] max-h-[32px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden mt-8">
        {/* Second Scrollable List */}
        <div className="flex space-x-6 animate-scroll-reverse">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="min-w-24 min-h-24 flex items-center justify-center bg-[#021027] rounded-lg shadow-md"
            >
              <img
                src={brand.imageUrl}
                alt={brand.name}
                className="max-w-[32px] max-h-[32px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IndustryLeaders = () => {
  return (
    <div className="text-white px-10 md:px-10 my-12">
      <h2 className="flex text-center align-center justify-center mb-3 mx-auto">
        <GradientText size="md">Trusted By&nbsp;</GradientText>
        <GradientText size="md" variant="darkerGradient">
          Industry Leaders
        </GradientText>
      </h2>

      <BrandScroller />
    </div>
  );
};

export default IndustryLeaders;
