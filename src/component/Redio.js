import React from "react";
const Radio = ({ name, options, onChange, error }) => {
  return (
    <>
      <div className="flex">
        {options.map((option) => (
          <div key={option.value}>
            <input
              type="radio"
              className="mr-[2px] ml-2 "
              name={name}
              value={option.value}
              onChange={onChange}
            />
            <label>{option.label} </label>
          </div>
        ))}
      </div>
      <div className="text-red-600"> {error}</div>
    </>
  );
};

export default Radio;
