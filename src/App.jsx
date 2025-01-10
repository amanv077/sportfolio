import "./App.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import HeroTwo from "./pages/WhatIsSportFolio";
import MarketplaceExplorer from "./pages/MarketplaceExplorer";
import { Footer } from "./pages/Footer";
import PlayerInfoCard from "./components/Card/PlayerInfoCard";
import HeroBackgroundImage from "./assets/images/hero-background.png";

const App = () => {
  const players = [
    { name: "John Doe", age: 25, number: 10 },
    { name: "Jane Smith", age: 22, number: 7 },
    { name: "Mike Johnson", age: 28, number: 15 },
    { name: "Chris Evans", age: 30, number: 8 },
    // { name: "Emma Watson", age: 27, number: 12 },
    // { name: "Robert Downey", age: 35, number: 9 },
    // { name: "Scarlett Johansson", age: 29, number: 11 },
    // { name: "Tom Holland", age: 24, number: 14 },
    // { name: "Natalie Portman", age: 32, number: 6 },
    // { name: "Chris Hemsworth", age: 31, number: 13 },
  ];
  return (
    <>
      {/* <Background className="" /> */}
      <div className="z-10 bg-[#000C1A]">
        <div
          className="relative bg-cover bg-center bg-no-repeat h-screen"
          style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <div className="flex flex-row gap-3 justify-center items-center mt-12">
          {players.map((player) => (
            <PlayerInfoCard {...player} key={player.name} />
          ))}
        </div>
        <HeroTwo />
        <MarketplaceExplorer />
        <Footer />
      </div>
    </>
  );
};

export default App;
