import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";

import Plays from "./Plays";

function Home() {
  return (
    <div>
      <Plays />
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
