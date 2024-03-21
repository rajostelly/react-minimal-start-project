import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  type: HTMLInputTypeAttribute;
  id: string;
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
};

export const Input = (props: InputProps) => {
  const { id, type, label, placeholder, error, register } = props;

  return (
    <div className="flex flex-col mb-3">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="border border-grayOpacity rounded-sm py-1 px-3 outline-none"
      />
      {props.error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};
