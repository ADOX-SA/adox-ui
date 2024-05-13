"use client";
import React, { ComponentProps, forwardRef } from "react";
import styles from "./Button.module.css";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "solid" | "outline" | "ghost" | "link" | "icon";
  size?:
    | "3xs"
    | "2xs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "full";
  colorScheme?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  ({
    children,
    variant = "solid",
    size = "md",
    colorScheme = "primary",
    rounded = "md",
    className,
    ...props
  }) => {
    return (
      <button
        className={`${styles.button} ${styles[colorScheme]} ${styles[variant]} ${styles[size]} ${styles[rounded]} ${className}`}
        {...props}
      >
        {" "}
        {children}{" "}
      </button>
    );
  }
);

export default Button;
