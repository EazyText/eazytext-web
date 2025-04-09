"use client";

import classes from "./Input.module.css";
import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

type InputProps = {
  type?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
  isRequired?: boolean;
  errorMessage?: string;
  placeholder?: string;
  tip?: string;
  style?: React.CSSProperties;
  name?: string;
  condition?: boolean;
  readOnly?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  loading?: boolean;
};

const Input = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  isRequired,
  errorMessage,
  placeholder,
  tip,
  style,
  name,
  condition,
  readOnly,
  onKeyDown,
  onKeyUp,
  loading,
}: InputProps) => {
  // States
  const [invalid, setInvalid] = useState(false);
  const [passwordIsViewable, setpasswordisViewable] = useState(false);

  // Effect to update invalid state based on error message
  useEffect(() => {
    setInvalid(!!errorMessage);
  }, [errorMessage]);

  // Handle phone number input
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "phone") {
      // Remove any non-digit characters
      const digits = e.target.value.replace(/\D/g, "");
      // Limit to 10 digits
      const limitedDigits = digits.slice(0, 10);
      // Create a new event with the modified value
      const newEvent = {
        ...e,
        target: {
          ...e.target,
          value: limitedDigits,
        },
      };
      if (onChange) {
        onChange(newEvent);
      }
    } else if (onChange) {
      onChange(e);
    }
  };

  // Handle keydown for phone input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type === "phone") {
      const currentValue = (e.target as HTMLInputElement).value.replace(
        /\D/g,
        ""
      );

      // Allow: backspace, delete, tab, escape, enter
      if (
        [8, 9, 13, 27, 46].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.ctrlKey === true && [65, 67, 86, 88].indexOf(e.keyCode) !== -1) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)
      ) {
        return;
      }

      // Prevent input if already at 10 digits and not deleting
      if (
        currentValue.length >= 10 &&
        ![8, 46].includes(e.keyCode) && // backspace and delete
        !(e.ctrlKey && [65, 67, 86, 88].includes(e.keyCode)) // ctrl+a, ctrl+c, ctrl+v, ctrl+x
      ) {
        e.preventDefault();
        return;
      }

      // Ensure that it is a number and stop the keypress if not
      if (
        (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
        (e.keyCode < 96 || e.keyCode > 105)
      ) {
        e.preventDefault();
      }
    }
    // Call the original onKeyDown if provided
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <div className={classes.container} style={style}>
      {label && (
        <>
          <label htmlFor="">{label}</label>
          {"  "}
          {isRequired && <span>*</span>}
        </>
      )}
      <span className={classes.input}>
        <input
          type={
            type === "password" && passwordIsViewable
              ? "text"
              : type === "password" && !passwordIsViewable
              ? "password"
              : type === "phone"
              ? "tel"
              : type
              ? type
              : "text"
          }
          name={name}
          placeholder={placeholder}
          id={label}
          onChange={handlePhoneInput}
          readOnly={readOnly}
          onBlur={(e) => {
            if (isRequired && e.target.value === "") {
              setInvalid(true);
            } else {
              setInvalid(false);
            }

            if (condition !== undefined && condition === false) {
              setInvalid(true);
            }
            if (onBlur) onBlur();
          }}
          value={value}
          className={invalid || errorMessage ? classes.invalid : classes.valid}
          onKeyDown={handleKeyDown}
          onKeyUp={onKeyUp}
          maxLength={type === "phone" ? 10 : undefined}
        />
        {type === "password" && (
          <span>
            {!passwordIsViewable ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setpasswordisViewable(true);
                }}
                width={10}
                height={10}
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>{" "}
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setpasswordisViewable(false);
                }}
                width="16px"
                height="16px"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 2L22 22"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                  <path
                    d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                    stroke="#b3b3b3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
          </span>
        )}
        {loading && (
          <CircularProgress size="1rem" style={{ color: "#2b6ef3" }} />
        )}
      </span>
      {errorMessage && (
        <span className={classes.errorMessage}>{errorMessage}</span>
      )}
      {tip || (!errorMessage && <span className={classes.tip}>{tip}</span>)}
    </div>
  );
};

Input.displayName = "Input";

export default Input;
