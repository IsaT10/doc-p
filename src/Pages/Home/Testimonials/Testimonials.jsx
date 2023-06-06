import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Rofi Uddin",
      location: "United State Noakhali",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Natasa",
      location: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
    },
    {
      id: 3,
      name: "Hasina",
      location: "New York city",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
    },
  ];
  return (
    <div className="md:mb-36 px-4 md:px-14 mt-16">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg md:text-xl font-bold uppercase bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">
            Testimonial
          </h3>
          <h2 className="text-3xl md:text-4xl text-accent mt-1">
            What Our Patients Says
          </h2>
        </div>
        <img className="w-24 h-24 md:w-48 md:h-40" src={quote} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20">
        {testimonialData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
