import { useEffect, useState } from "react";
import GradientText from "../components/GradientTtext";
import GradientCard from "../components/Card/Gradient";
import { useRef } from "react";

const slides = [1, 2, 3, 4, 5];
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(nextSlide, 3000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide]);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className="my-12 px-10 md:px-10 w-full flex-shrink-0"
            onClick={nextSlide}
          >
            <div className="flex flex-wrap gap-24 max-w-5xl mx-auto">
              <div className="flex flex-col gap-6 flex-1">
                <GradientCard>
                  <img
                    src="/assets/images/CardImage.png"
                    className="w-full object-cover rounded-md"
                    style={{ height: "550px" }}
                  />
                </GradientCard>
              </div>
              <div className="flex flex-col gap-6 flex-1 align-center justify-center px-10">
                <img src="/assets/images/CardImage.png" className="w-36" />
                <p className="text-3xl">
                  “Sportfolio helped me land my first major sponsorship while
                  staying NCAA-compliant.
                  <br />
                  <br />
                  The process was seamless!”
                </p>
                <p>Alex J., D1 Athlete</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${
              index === currentSlide
                ? "w-6 bg-gradient-to-r from-blue-400 to-blue-800"
                : "w-2 bg-blue-800"
            } h-2 rounded-full transition-all duration-500 ease-in-out`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="py-16 px-4 my-16">
      <h2 className="flex text-center align-center justify-center mb-12 mx-auto">
        <GradientText size="md">What They’re Saying About&nbsp;</GradientText>
        <GradientText size="md" variant="darkerGradient">
          Sportfolio
        </GradientText>
      </h2>
      <Carousel />
    </div>
  );
};

export default AboutUs;
