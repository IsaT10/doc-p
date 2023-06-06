import React from "react";
import Hero from "../Hero/Hero";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";
import CareAndTerms from "../CareAndTerms/CareAndTerms";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonials from "../Testimonials/Testimonials";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <InfoCards />
      <Services />
      <CareAndTerms />
      <MakeAppointment />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
