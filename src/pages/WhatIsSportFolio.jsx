import React from "react";

const HeroTwo = () => {
  return (
    <div className="bg-gradient-to-b from-[#061928] to-[#020d17] text-white py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-4xl font-bold mb-12">
        How <span className="text-blue-400">Sportfolio</span> Works
      </h2>

      {/* Cards Container */}
      <div className="flex flex-col items-center">
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
