import React from "react";
import heroIMG from "../../../assets/images/chair.png";
import bgIMG from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      style={{ background: `url(${bgIMG})`, backgroundSize: "contain" }}
      className=""
    >
      <div className=" md:py-40 px-4 md:px-16">
        <div className="flex flex-col-reverse md:grid md:grid-cols-12">
          <div className="col-span-5 mx-auto justify-self-center">
            <DayPicker
              className=""
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          <div className="col-span-7 justify-self-center md:ml-3">
            <img
              src={heroIMG}
              className="mt-10 mb-14 md:m-0 w-full md:w-[596px] md:h-[355px] rounded-md shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
