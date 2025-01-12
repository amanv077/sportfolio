import GradientText from "../components/GradientTtext";
import Button from "../components/Button";

const StayUpdated = () => {
  return (
    <div className="text-white px-10 md:px-10 my-24">
      <h2 className="flex text-center align-center justify-center mb-3 mx-auto">
        <GradientText size="md">Stay&nbsp;</GradientText>
        <GradientText size="md" variant="darkerGradient">
          Updated
        </GradientText>
      </h2>

      <p className="subheading mb-24">
        Check out platform updates, athlete success stories, and exclusive
        content from the world of college sports.
      </p>
      <div className="flex flex-row justify-center gap-4">
        {/* First image */}
        <div className="flex justify-center  w-[200px] h-[320px]">
          <img
            src="/assets/images/SeventhPage01.png"
            className="w-[100%] h-[80%] object-cover rounded-lg"
          />
        </div>

        {/* Second image: Positioned at the bottom */}
        <div className="relative flex justify-center  w-[200px] h-[320px]">
          <img
            src="/assets/images/SeventhPage02.png"
            className="absolute bottom-0 w-[100%] h-[80%] object-cover rounded-lg"
          />
        </div>

        {/* Third image */}
        <div className="flex justify-center w-[200px] h-[320px]">
          <img
            src="/assets/images/SeventhPage03.png"
            className="w-[100%] h-[80%] object-cover rounded-lg"
          />
        </div>

        {/* Fourth image: Positioned at the bottom */}
        <div className="relative flex justify-center  w-[200px] h-[320px]">
          <img
            src="/assets/images/SeventhPage04.png"
            className="absolute bottom-0 w-[100%] h-[80%] object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="my-12 flex flex-col items-center max-w-sm mx-auto">
        <Button variant="light">Read More News</Button>
      </div>
    </div>
  );
};

export default StayUpdated;
