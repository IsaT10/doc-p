import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      icon: clock,
    },
    {
      id: 2,
      name: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      icon: marker,
    },
    {
      id: 3,
      name: "Contact us now",
      description: "+000 123 456789",
      icon: phone,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 mt-20 mb-8 md:mb-24 md:mt-0 px-4">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default InfoCards;
