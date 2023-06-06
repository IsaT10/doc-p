import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  console.log(appointmentOptions);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="mt-14 px-4">
      <p className="text-center text-secondary text-2xl font-normal ">
        Available Services on {format(selectedDate, "PP")}
      </p>
      <p className="text-center text-neutral text-xl mt-2">
        Please select a service.
      </p>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
        {appointmentOptions.map((appointmentOption) => (
          <AppointmentOption
            key={appointmentOption._id}
            appointmentOption={appointmentOption}
            setTreatment={setTreatment}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal treatment={treatment} selectedDate={selectedDate} />
      )}
    </section>
  );
};

export default AvailableAppointment;
