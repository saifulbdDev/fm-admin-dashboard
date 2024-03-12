/* eslint-disable react/prop-types */

import { useState } from "react";
import classnames from "classnames";
import { Field } from "formik";

import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const Input = (props) => {
  const {
    id,
    inputdiv = "",
    checkboxClasses = "",
    containerClass = "",
    labelClass = "block mb-[5px] text-sm font-medium text-white",
    inputClass = "",
    placeholder = "",
    label = "",
    type = "text",
    error = false,
    errorText = "",
    errorColor = "text-red-600 ",
    required = false,
    ...rest
  } = props;

  const [isPassword, setIsPassword] = useState(false);
  const inputClasses = classnames(
    `w-full focus:border-blue-200  rounded-md ${
      errorText && error
        ? "text-red-700 focus:border-red-900 border-red-400 border-solid focus:ring-red-300"
        : " border-gray-400 focus:ring-blue-300 hover:border-blue-200 border-solid bg-white placeholder:text-gray-700"
    }   border  outline-none text-base font-light ${inputClass}`
  );
  return (
    <div className={containerClass}>
      {label ? (
        <label htmlFor={id} className={` ${labelClass}`}>
          {label} {required && <span className="text-red-700 text-700">*</span>}
        </label>
      ) : (
        ""
      )}
         <div className={inputdiv}>

      {type === "password" ? (
        <div className="relative">
          <Field
            type={isPassword ? "text" : type}
            className={inputClasses}
            id={id}
            placeholder={placeholder}
            {...rest}
          />
          {isPassword ? (
            <button
              type="button"
              // eslint-disable-next-line no-unused-vars
              onClick={(e) => setIsPassword(false)}
              className="absolute  inset-y-3 right-2  flex items-center   leading-5">
              <EyeIcon />
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => setIsPassword(true)}
              className="absolute  inset-y-3 right-2  flex items-center   leading-5">
              <EyeSlashIcon />
            </button>
          )}
        </div>
      ) : type === "checkbox" ? (
       
          <Field
            type={type}
            className={checkboxClasses}
            id={id}
            placeholder={placeholder}
            {...rest}
          />
       
      )  : type === "file" ? (
       
          <input
            type={type}
            className={checkboxClasses}
            id={id}
            placeholder={placeholder}
            {...rest}
          />
       
      ) : (
        <Field
          type={type}
          className={inputClasses}
          id={id}
          placeholder={placeholder}
          {...rest}
        />
      )}

      {errorText && error ? (
        <p className={`my-2 text-xs ${errorColor}`}>{errorText}</p>
      ) : (
        ""
      )}
    </div>
    </div>
  );
};

export default Input;
