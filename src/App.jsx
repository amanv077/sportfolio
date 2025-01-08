import "./App.css";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import HeroTwo from "./pages/WhatIsSportFolio";
import MarketplaceExplorer from "./pages/MarketplaceExplorer";
import { Footer } from "./pages/Footer";

const App = () => {
  return (
    <div className="bg-[rgb(0,12,26)] text-white">
      <Navbar />
      <Hero />
      <HeroTwo />
      <MarketplaceExplorer />
      <Footer />
    </div>
  );
};

export default App;
