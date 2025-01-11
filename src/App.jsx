import "./App.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import HeroTwo from "./pages/WhatIsSportFolio";
import MarketplaceExplorer from "./pages/MarketplaceExplorer";
import { Footer } from "./pages/Footer";
import HeroBackgroundImage from "./assets/images/hero-background.png";
import HowToUseComponent from "./pages/HowToUseComponent";
import RisingStars from "./pages/RisingStars";
import JoinCommunity from "./pages/JoinCommunity";
import IndustryLeaders from "./pages/IndustryLeader";
import AboutUs from "./pages/AboutUs";

const players = [
  {
    name: "John Doe",
    age: 25,
    number: 10,
    imageUrl: "/assets/images/03.png",
    color: "green",
  },
  {
    name: "Jane Smith",
    age: 22,
    number: 7,
    imageUrl: "/assets/images/04.png",
    color: "#BF0020",
  },
  {
    name: "Mike Johnson",
    age: 28,
    number: 15,
    imageUrl: "/assets/images/05.png",
    color: "yellow",
  },
  {
    name: "Chris Evans",
    age: 30,
    number: 8,
    imageUrl: "/assets/images/03.png",
    color: "blue",
  },
  {
    name: "Emily Davis",
    age: 24,
    number: 12,
    imageUrl: "/assets/images/06.png",
    color: "purple",
  },
  {
    name: "David Wilson",
    age: 27,
    number: 9,
    imageUrl: "/assets/images/07.png",
    color: "orange",
  },
  {
    name: "Sarah Brown",
    age: 23,
    number: 11,
    imageUrl: "/assets/images/08.png",
    color: "pink",
  },
];

const App = () => {
  return (
    <>
      <div className="z-10 bg-[#000C1A]">
        <div
          className="relative bg-cover bg-center bg-no-repeat h-screen"
          style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
        >
          <Navbar />
          <Hero players={players} />
        </div>
        <HeroTwo />
        <MarketplaceExplorer />
        <RisingStars players={players} />
        <JoinCommunity />
        <IndustryLeaders />
        <AboutUs />
        <HowToUseComponent />
        <Footer />
      </div>
    </>
  );
};

export default App;
