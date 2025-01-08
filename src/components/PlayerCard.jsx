import React from "react";

const PlayerCard = ({ image, name, number, age }) => {
  return (
    <div className="w-[220px] h-[350px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 relative">
      {/* Player Image */}
      <div className="w-full h-[180px] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover absolute left-1/2 transform -translate-x-1/2 rounded-b-[60%] z-10"
        />
      </div>

      {/* Player Name */}
      <div className="px-3 py-2 mt-2">
        <h3 className="text-center text-md font-semibold text-gray-800">
          {name}
        </h3>
      </div>

      {/* Player Info (Position, Number, Age) */}
      <div className="flex justify-between items-center px-3 py-2 text-xs text-gray-700">
        <span className="font-medium">Forward</span>
        <span className="text-gray-900 font-bold">#{number}</span>
        <span className="font-medium">Age {age}</span>
      </div>

      {/* SportFolio Tag */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-600 to-indigo-800 py-2 text-center text-white font-semibold text-sm rounded-b-lg transform rotate-x-12 translate-z-4">
        <span>SportFolio</span>
      </div>
    </div>
  );
};

export default PlayerCard;
