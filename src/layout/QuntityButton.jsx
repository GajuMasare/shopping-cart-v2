import React from "react";

const QuntityButton = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center">
      <button
        type="button"
        className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 inline-flex items-center justify-center border rounded-md h-4 w-4 md:h-7 md:w-7"
        onClick={onDecrease}
      >
        <svg
          className="w-2 h-2 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 9h16"
          />
        </svg>
      </button>
      <input
        type="text"
        className="flex-shrink-0 text-gray-900 border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 w-8 text-center" // Removed mx and set narrower width
        value={quantity}
        readOnly
      />
      <button
        type="button"
        className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 inline-flex items-center justify-center border rounded-md h-4 w-4 md:h-7 md:w-7"
        onClick={onIncrease}
      >
        <svg
          className="w-2 h-2 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuntityButton;
