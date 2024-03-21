import React, { HTMLInputTypeAttribute } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
};

export const Input = () => {
  return (
    <div>
      <label htmlFor=""></label>
      <input type="" />
    </div>
  );
};
