
import React from "react";
const Chackbox = ({ name, chack, onChange, defaultvalue,className,error }) => {
 
  return (

    <>
      <div className="" >
      <p className="text-gray-600 font-semibold text-base">{name}</p>
      <div className="mr-7 h-14 place-content-center w-48  font-medium text-gray-900 bg-white border border-gray-400  rounded-lg">
        {chack.map((c) => (
          <div key={c.value}>
            <label className="pl-3 ml-1 ">
              <input
                type="checkbox"
                className={className}
                name={name}
                value={c.value}
                defaultChecked={defaultvalue && defaultvalue.includes(c.value)}
                onChange={onChange}
              />
              {c.label}
            </label>
         
          </div>
        ))}
        </div>
           <div className="text-red-600"> {error}</div>
        </div>
    </>
  );
};

export default Chackbox;
