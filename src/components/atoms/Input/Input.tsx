"use client";
import React, { ComponentProps, forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
import { Icon } from "../Icon";
import { Text } from "../Text";

export type InputProps = {
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  s?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: InputHTMLAttributes<HTMLInputElement>["width"] | "lg" | "xs";
  alert?: boolean;
  customAlert?: string;
} & ComponentProps<"input">;
const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "outlined", rounded, alert, customAlert, s, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);
    if (!alert)
      return (
        <div
          ref={containerRef}
          className={clsx(styles.input, {
            [styles[`input--variant-${variant}`]]: variant,
            [styles[`input--rounded-${rounded}`]]: rounded,
          })}
        >
          <input
            ref={inputRef}
            className={clsx(styles.baseinput, {
              [styles[`input--s-${s}`]]: s,
            })}
            {...props}
          />
        </div>
      );
    return (
      <div className={styles.container}>
        <div
          ref={containerRef}
          className={clsx(styles.input, {
            [styles[`input--variant-${variant}`]]: variant,
            [styles[`input--rounded-${rounded}`]]: rounded,
          })}
        >
          <input
            ref={inputRef}
            className={clsx(styles.baseinput, {
              [styles[`input--s-${s}`]]: s,
            })}
            {...props}
          />
        </div>
        <div className={clsx(styles.alertContainer)}>
          <Icon
            nameIcon="BiSolidError"
            propsIcon={{ size: "16px", color: "var(--color-red-600)" }}
          />
          <Text size="sm" color="var(--color-blue-200)">
            {customAlert}
          </Text>
        </div>
      </div>
    );
  }
);
export default Input;
