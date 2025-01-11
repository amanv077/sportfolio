import React from "react";
import Heading from "../components/Heading";
import GradientCard from "../components/Card/Gradient";

const HeroTwo = () => {
  return (
    <div className="py-16 px-4">
      <h2 className="flex text-center align-center justify-center mb-12 mx-auto">
        <Heading size="md">How&nbsp;</Heading>
        <Heading size="md" variant="darkerGradient">
          Sportfolio
        </Heading>
        <Heading size="md">&nbsp;Works</Heading>
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col items-center">
        <GradientCard
          size="lg"
          radialGradientPosition="120% 100%"
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-2 text-white">Large Card</h3>
          <p className="text-gray-200">
            This is a large card with custom gradient position.
          </p>
        </GradientCard>
        {/* Card 1: Small */}
        <div className="relative bg-[#0e2236] p-8 rounded-lg w-[90%] max-w-lg shadow-xl transform hover:scale-105 transition duration-300 ease-out border border-blue-400 border-opacity-30">
          <div className="absolute top-[-10px] left-[-10px] h-20 w-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur-xl opacity-30"></div>
          <div className="relative flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/3">
              <div className="text-blue-400 text-sm uppercase tracking-wider mb-2">
                Initial
              </div>
              <h3 className="text-2xl font-semibold mb-4 md:mb-0">
                Athletes Build Their Brand
              </h3>
            </div>
            <ul className="space-y-4 text-sm md:w-2/3 text-right">
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Create a verified profile
              </li>
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Showcase your achievements
              </li>
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Connect directly with sponsors
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Medium */}
        <div className="relative bg-[#0e2236] p-10 rounded-lg w-[95%] max-w-xl shadow-2xl transform hover:scale-105 transition duration-300 ease-out border border-blue-400 border-opacity-30">
          <div className="absolute top-[-10px] right-[-10px] h-20 w-20 bg-gradient-to-l from-blue-500 to-blue-300 rounded-full blur-xl opacity-30"></div>
          <div className="relative flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/3">
              <div className="text-blue-400 text-sm uppercase tracking-wider mb-2">
                Mid-Level
              </div>
              <h3 className="text-3xl font-semibold mb-4 md:mb-0">
                Fans Collect & Support
              </h3>
            </div>
            <ul className="space-y-4 text-base md:w-2/3 text-right">
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Own unique athlete NFTs
              </li>
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Engage in events
              </li>
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Be part of your favorite athletes' journeys
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Large */}
        <div className="relative bg-[#0e2236] p-12 rounded-lg w-[95%] max-w-2xl shadow-2xl transform hover:scale-105 transition duration-300 ease-out border border-blue-400 border-opacity-30">
          <div className="absolute bottom-[-10px] left-[-10px] h-20 w-20 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full blur-xl opacity-30"></div>
          <div className="relative flex flex-col md:flex-row items-start justify-between">
            <div className="md:w-1/3">
              <div className="text-blue-400 text-sm uppercase tracking-wider mb-2">
                Final
              </div>
              <h3 className="text-3xl font-semibold mb-4 md:mb-0">
                Sponsors Create Deals
              </h3>
            </div>
            <ul className="space-y-4 text-base md:w-2/3 text-right">
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Launch campaigns
              </li>
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Custom terms using secure, transparent smart contracts
              </li>
              <li className="flex justify-end items-center">
                <span className="text-blue-400 text-lg mr-2">✔</span>
                Lorem ipsum dolor sit amet consectetur
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
