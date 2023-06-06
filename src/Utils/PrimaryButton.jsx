import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button
        type="button"
        className="px-5 py-3 text-white rounded bg-gradient-to-r from-secondary to-primary"
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
