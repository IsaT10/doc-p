import React from "react";

const TestimonialCard = ({ testimonial }) => {
  const { img, name, location, description } = testimonial;
  return (
    <div className="p-8 shadow-lg rounded-md">
      <p>{description}</p>
      <div className="flex items-center mt-9 gap-4">
        <img
          className="ring-4  ring-offset-base-100 ring-offset-2 ring-secondary rounded-full w-[75px] h-[75px]"
          src={img}
          alt=""
        />
        <div>
          <p className="text-xl font-semibold text-accent">{name}</p>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
