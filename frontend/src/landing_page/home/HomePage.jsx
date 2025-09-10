import React from "react";
import Award from "./Award";
import Eduaction from "./Eduaction";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../OpenAccount";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Eduaction />
      <OpenAccount />
      
    </>
  );
};

export default HomePage;
