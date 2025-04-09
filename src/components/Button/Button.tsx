"use client";

import classes from "./Button.module.css";
import { CircularProgress } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utilities/routes";

type ButtonPropTypes = {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "null" | "invalid";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  className,
  icon,
}: ButtonPropTypes) => {
  // Router
  const router = useRouter();
  return (
    <button
      className={`${classes.button} ${
        type === "secondary"
          ? classes.secondary
          : type === "tertiary"
          ? classes.tertiary
          : type === "null"
          ? classes.null
          : type === "invalid"
          ? classes.invalidx
          : classes.primary
      } ${className}`}
      onClick={(e) => {
        if (!onClick) {
          router.push(ROUTES.GET_THE_APP);
        }
        onClick && onClick(e);
      }}
      disabled={disabled}
    >
      {loading ? <CircularProgress size="1.5rem" color="inherit" /> : children}
      {icon && <span className={classes.icon}>{icon}</span>}
    </button>
  );
};

export default Button;
