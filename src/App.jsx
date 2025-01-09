import "./App.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import HeroTwo from "./pages/WhatIsSportFolio";
import MarketplaceExplorer from "./pages/MarketplaceExplorer";
import { Footer } from "./pages/Footer";
import Background from "./components/Background";

const App = () => {
  return (
    <>
      {/* <Background className="" /> */}
      <div className="z-10">
        <Navbar />
        <Hero />
        <HeroTwo />
        <MarketplaceExplorer />
        <Footer />
      </div>
    </>
  );
};

export default App;
