import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import Plays from "./Plays";

function Home() {
  return (
    <div>
      <Plays />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
