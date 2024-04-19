import React from "react";
import Navbar from "../component/HomePage-Component/Navbar";
import HeroSection from "../component/HomePage-Component/herosecton";
import AboutMe from "../component/HomePage-Component/About";
import MySkills from "../component/HomePage-Component/Myskills";
import MyPortfolio from "../component/HomePage-Component/portfoli0";
import Testimonial from "../component/HomePage-Component/testimonial";
import ContactMe from "../component/HomePage-Component/contact";
import Footer from "../component/HomePage-Component/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
