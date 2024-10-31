import React from "react";

const Input = ({ title, type, placeholder, name }) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input type={type} placeholder={placeholder} name={name} className="w-full py-1.5 placeholder:text-primary rounded border px-3 text-sm"/>
    </div>
  );
};

export default Input;
