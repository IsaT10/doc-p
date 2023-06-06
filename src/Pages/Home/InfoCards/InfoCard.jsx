import React from "react";

const InfoCard = ({ card }) => {
  const { icon, description, name } = card;
  return (
    <div className="bg-gradient-to-r from-secondary via-primary to-primary py-7 md:py-12 px-6 md:flex  items-center gap-6 rounded-lg hover:bg-accent duration-150 mb-8">
      <img className="w-20 h-20 mx-auto md:m-0" src={icon} alt="" />
      <div className="text-white mt-3 md:m-0">
        <p className="text-xl font-bold md:mb-4">{name}</p>
        <p className="font-normal">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
