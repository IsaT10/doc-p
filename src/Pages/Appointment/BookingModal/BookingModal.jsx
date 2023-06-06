import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box px-4 pb-0 ">
          <h3 className="font-bold text-lg mb-11">{name}</h3>
          <form>
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full mb-6 bg-[#E6E6E6]"
            />
            <select className="select select-bordered w-full mb-6 bg-[#E6E6E6]">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-6"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-6"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-6"
            />
            <button className="w-full bg-accent rounded-md text-white uppercase py-3">
              Submit
            </button>
          </form>
          <div className="modal-action">
            <label
              htmlFor="booking-modal"
              className="btn bg-accent hover:bg-accent text-white btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
