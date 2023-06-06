import React from "react";
import img from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../Utils/PrimaryButton";

const CareAndTerms = () => {
  return (
    <div className="md:mt-36 lg:mb-72  grid md:grid-cols-2 gap-10 items-center  px-4 md:px-10 lg:px-20 ">
      <img
        className=" md:w-[458px] md:h-[576px] md:mx-auto rounded-lg"
        src={img}
        alt=""
      />
      <div className=" lg:pr-36">
        <h2 className="text-5xl font-bold text-accent ">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p className="mt-6 mb-11">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </div>
  );
};

export default CareAndTerms;
