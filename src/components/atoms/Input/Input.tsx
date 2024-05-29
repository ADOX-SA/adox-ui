"use client";
import React, { ComponentProps, forwardRef } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";

export type InputProps = {
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  s?: "xs" | "sm" | "md" | "lg" | "xl";
} & ComponentProps<"input">;
const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "outlined", rounded, s, ...props }, ref) => {
    return (
      <div
        className={clsx(styles.input, {
          [styles[`input--variant-${variant}`]]: variant,
          [styles[`input--rounded-${rounded}`]]: rounded,
        })}
      >
        <input
          ref={ref}
          className={clsx(styles.baseinput, {
            [styles[`input--s-${s}`]]: s,
          })}
          {...props}
        />
      </div>
    );
  }
);
export default Input;
