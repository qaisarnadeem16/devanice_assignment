"use client";

import React, { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type CustomInputProps = {
  label?: string;
  style?: string;
  value?: string;
  inputType: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  name?: string;
  error?: string;
  icon?: string | StaticImport;
};

const CustomInput = (props: CustomInputProps) => {
  const {
    label,
    inputType,
    placeholder,
    icon,
    name,
    style,
    error,
    onChange,
    value,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const inputClass = `text-gray  boxShadow text-base font-medium bg-transparent border ${error ? "border-red-500" : "border-0"
    } rounded-md focus:outline-none block w-full p-2.5 py-4`;

  return (
    <>
      <div className={`flex flex-col w-full  ${style}`}>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-lg font-medium text-gray-400"
        >
          {label}
        </label>
        <div className="relative bg-transparent">
          <input
            type={inputType}
            placeholder={placeholder}
            name={name}
            id={name}
            value={value}
            className={inputClass}
            onChange={onChange}
          />
          {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
      </div>
    </>
  );
};

export default CustomInput;
