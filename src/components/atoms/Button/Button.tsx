import React, { forwardRef } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";
import { css } from "@emotion/css";

import { ButtonColorSchemes, ButtonProps, ButtonVariants } from "./model";

const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children = "",
      variant = "solid",
      size = "3xs",
      colorScheme = "primary",
      rounded = "md",
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const buttonVariantStyle = (
      variant: ButtonVariants,
      colorScheme: ButtonColorSchemes
    ) => {
      switch (variant) {
        case "solid":
          return css`
            background-color: var(--sys-color-${colorScheme});
            border: 1px solid transparent;
            &:hover {
              background-color: var(--sys-color-${colorScheme}-hover);
            }
            &:active {
              background-color: var(--sys-color-${colorScheme}-active);
            }
          `;
        case "outline":
          return css`
            background-color: transparent;
            color: var(--color-${colorScheme}-500);
            border: 1px solid var(--color-${colorScheme}-500);
            &:hover {
              background-color: var(--color-${colorScheme}-50);
            }
            &:active {
              background-color: var(--color-${colorScheme}-100);
            }
          `;
        case "ghost":
          return css`
            background-color: transparent;
            color: var(--color-${colorScheme}-500);
            border: 1px solid transparent;
            &:hover {
              background-color: var(--color-${colorScheme}-50);
            }
            &:active {
              background-color: var(--color-${colorScheme}-100);
            }
          `;
        case "link":
          return css`
            background-color: transparent;
            color: var(--color-${colorScheme}-500);
            border: 1px solid transparent;
            &:hover {
              color: var(--color-${colorScheme}-600);
            }
            &:active {
              color: var(--color-${colorScheme}-700);
            }
          `;
        default:
          return css`
            background-color: var(--color-${colorScheme}-500);
            color: var(--color-${colorScheme}-contrastText);
            border: 1px solid transparent;
            &:hover {
              background-color: var(--color-${colorScheme}-600);
            }
          `;
      }
    };

    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          buttonVariantStyle(variant, colorScheme),
          styles[`button--size-${size}`],
          styles[`button--rounded-${rounded}`],
          fullWidth && styles["button--fullWidth"],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
