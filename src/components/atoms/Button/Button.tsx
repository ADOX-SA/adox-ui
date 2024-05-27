import React, { forwardRef } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

import { ButtonProps } from "./model";

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
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          styles.button,
          styles[`button--variant-${variant}`],
          styles[`button--variant-${variant}-${colorScheme}`],
          styles[`button--size-${size}`],
          styles[`button--rounded-${rounded}`],
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
