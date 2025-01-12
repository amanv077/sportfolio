import "./App.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import HeroTwo from "./pages/WhatIsSportFolio";
import MarketplaceExplorer from "./pages/MarketplaceExplorer";
import { Footer } from "./pages/Footer";
import HeroBackgroundImage from "./assets/images/hero-background.png";
import RisingStars from "./pages/RisingStars";
import JoinCommunity from "./pages/JoinCommunity";
import IndustryLeaders from "./pages/IndustryLeader";
import AboutUs from "./pages/AboutUs";
import StayUpdated from "./pages/StayUpdated";

const players = [
  {
    firstName: "James",
    lastName: "Maddison",
    age: 31,
    number: 10,
    imageUrl: "/assets/images/yellow.png",
    color: "#FFC61A",
    isDark: true,
  },
  {
    firstName: "Andre",
    lastName: "Onana",
    age: 31,
    number: 24,
    imageUrl: "/assets/images/white.png",
    color: "white",
    isDark: true,
  },
  {
    firstName: "Alexander",
    lastName: "Isak",
    age: 31,
    number: 14,
    imageUrl: "/assets/images/Red.png",
    color: "#BF0020",
  },
  {
    firstName: "Erling",
    lastName: "Haaland",
    age: 31,
    number: 7,
    imageUrl: "/assets/images/blue.png",
    color: "#1247B2",
  },
  {
    firstName: "James",
    lastName: "Maddison",
    age: 31,
    number: 10,
    imageUrl: "/assets/images/yellow.png",
    color: "#FFC61A",
    isDark: false,
  },
  {
    firstName: "Andre",
    lastName: "Onana",
    age: 31,
    number: 24,
    imageUrl: "/assets/images/white.png",
    color: "white",
    isDark: true,
  },
  {
    firstName: "Alexander",
    lastName: "Isak",
    age: 31,
    number: 14,
    imageUrl: "/assets/images/Red.png",
    color: "#BF0020",
  },
];

const App = () => {
  return (
    <>
      <div className="z-10 bg-[#000C1A] overflow-x-hidden w-screen">
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
        <StayUpdated />
        <IndustryLeaders />
        <AboutUs />
        <div className="relative">
          <div className="flex flex-row">
            <Footer />
          </div>
          <div
            className="absolute bottom-0 right-0 w-[30%] h-full bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url(/Footer03.png)",
              backgroundPositionY: "bottom",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default App;
