import GradientText from "../components/GradientTtext";

const brands = [
  { imageUrl: "/assets/images/brand/01.png", name: "01" },
  { imageUrl: "/assets/images/brand/05.png", name: "05" },
  { imageUrl: "/assets/images/brand/addidas.png", name: "addidas" },
  { imageUrl: "/assets/images/brand/CBS.png", name: "CBS" },
  { imageUrl: "/assets/images/brand/ESSports.png", name: "ESSports" },
  { imageUrl: "/assets/images/brand/ESPN.png", name: "ESPN" },
  { imageUrl: "/assets/images/brand/Last.png", name: "Last" },
  { imageUrl: "/assets/images/brand/MLogo.png", name: "MLogo" },
  { imageUrl: "/assets/images/brand/MentTech.png", name: "MentTech" },
  { imageUrl: "/assets/images/brand/NCAA.png", name: "NCAA" },
  { imageUrl: "/assets/images/brand/Stripe.png", name: "Stripe" },
  { imageUrl: "/assets/images/brand/Visa.png", name: "Visa" },
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
