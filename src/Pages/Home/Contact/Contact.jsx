import React from "react";
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from "../../../Utils/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="py-16 px-10"
      style={{ background: `url(${appointment})` }}
    >
      <div className="">
        <div className="text-center  ">
          <h3 className="text-lg md:text-xl font-bold uppercase bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text">
            Contact Us
          </h3>
          <h2 className="text-4xl md:text-4xl text-white mt-1">
            Stay connected with us
          </h2>
        </div>
      </div>
      <form>
        <div className="flex flex-col items-center justify-center gap-5 mt-10 ">
          <input
            type="text"
            placeholder="Email Address"
            className="input w-80 md:w-[450px]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input w-80 md:w-[450px] "
          />
          <textarea
            className="textarea w-80 md:w-[450px] h-32 mb-4"
            placeholder="Your Message"
          ></textarea>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </form>
    </section>
  );
};

export default Contact;
