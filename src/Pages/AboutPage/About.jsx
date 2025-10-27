import React from "react";
import { AboutContainer } from "./AboutStyle";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import AboutHero from "./AboutHero";
import Problem from "./Problem";
import Solution from "./Solution";
import Values from "./Values";
import Team from "./Team";
import Mission from "./Mission";
import Journey from "./Journey";

const About = () => {
  return (
    <AboutContainer>
      <Header />
      <AboutHero />
      <Problem />
      <Solution />
      <Values />
      <Team />
      <Mission />
      <Journey />
      <Footer />
    </AboutContainer>
  );
};

export default About;
