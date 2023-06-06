import React from "react";
import heroIMG from "../../../assets/images/chair.png";
import PrimaryButton from "../../../Utils/PrimaryButton";

const Hero = () => {
  return (
    <div className=" md:py-40  px-4 md:px-16">
      <div className="flex flex-col-reverse md:grid grid-cols-12">
        <div className=" col-span-6">
          <h1 className="text-3xl md:text-5xl font-bold text-accent">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="py-6 text-accent">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
        <div className="col-span-6 justify-self-end md:ml-3">
          <img
            src={heroIMG}
            className="mt-10 mb-14 md:m-0 w-full lg:w-[596px] lg:h-[355px] rounded-md shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
