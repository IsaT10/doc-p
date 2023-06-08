import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <section className="rounded-md shadow-md">
      <div className="px-14 py-11 lg:px-16 lg:py-11">
        <p className="text-secondary text-xl font-semibold text-center">
          {name}
        </p>
        <p className="text-sm text-center mt-1 text-neutral">
          {slots.length ? slots[0] : "Try another Day"}
        </p>
        <p className="text-center text-sm mt-2 mb-8 text-neutral">
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <label
          disabled={slots.length === 0}
          htmlFor="booking-modal"
          className="btn px-3 py-3 text-white rounded bg-gradient-to-r from-secondary to-primary cursor-pointer"
          onClick={() => setTreatment(appointmentOption)}
        >
          Booking Appointment
        </label>
      </div>
    </section>
  );
};

export default AppointmentOption;
