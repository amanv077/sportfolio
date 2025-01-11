import "./App.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import HeroTwo from "./pages/WhatIsSportFolio";
import MarketplaceExplorer from "./pages/MarketplaceExplorer";
import { Footer } from "./pages/Footer";
import HeroBackgroundImage from "./assets/images/hero-background.png";
import HowToUseComponent from "./pages/HowToUseComponent";

const App = () => {
  return (
    <>
      <div className="z-10 bg-[#000C1A]">
        <div
          className="relative bg-cover bg-center bg-no-repeat h-screen"
          style={{ backgroundImage: `url(${HeroBackgroundImage})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <HeroTwo />
        <MarketplaceExplorer />
        {/* <HowToUseComponent /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
