import React from "react";

const ServiceCard = ({ service }) => {
  const { description, name, img } = service;
  return (
    <div className="flex flex-col justify-center items-center px-3 md:px-14  py-8 md:py-11 shadow-lg rounded-md ">
      <img src={img} alt="" />
      <p className="mt-8 mb-5 text-xl font-semibold text-accent">{name}</p>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
