"use client";
import React from "react";
import clsx from "clsx";
import { css } from "@emotion/css";
import styles from "./Divider.module.css";

interface ThicknessMap {
  readonly [key: string]: string;
}
export type DividerProps = HTMLDivElement & {
  colorScheme?: "primary" | "secondary" | "base" | "dark" | "light";
  children?: React.ReactNode;
  thickness?: "xs" | "sm" | "md" | "lg";
  variation?: "fullWidth" | "centered";
  width?: string;
};

const Divider: React.FC<DividerProps> = ({
  colorScheme = "base",
  children = "base",
  variation = "fullWidth",
  thickness = "xl",
  width = "100%",
  className,
}) => {
  const thicknessmap: ThicknessMap = {
    xs: "1px",
    sm: "2px",
    md: "4px",
    lg: "8px",
  };

  const colorSchemeMap = {
    primary: "var(--sys-color-primary-ligth)",
    secondary: "var(--sys-color-secondary-light)",
    base: "var(--sys-color-base)",
    dark: "var(--color-gray-500)",
    light: "var(--color-gray-200)",
  };

  if (!children) {
    // NOTE: En margin: ${variation === "centered" ? "0 1rem" : "0"};
    // deberia de or auto en lugar de 1rem para que sea mas flexible
    // pero hay veces que no lo agarra bien y queda todo fullwidth

    return (
      <div
        className={
          (clsx(
            css`
              display: flex;
              align-items: center;
              width: ${width};
              margin: ${variation === "centered" ? "0 1rem" : "0"};
              height: ${thicknessmap[thickness]};
            `,
            {
              [styles[`divider--color-${colorScheme}`]]: colorScheme,
            }
          ),
          className)
        }
      />
    );
  }

  return (
    <div
      className={clsx(
        css`
						display: flex;
						align-items: center;
						width: ${width};
						margin: ${variation === "centered" ? "0 auto" : "0"};
            &::before {
							content: "";
							flex: 1;
							border-bottom: ${thicknessmap[thickness]} solid ${colorSchemeMap[colorScheme]};
							margin-right: 1rem;
            }
						&::after {
							content: "";
							flex: 1;
							border-bottom:${thicknessmap[thickness]} solid ${colorSchemeMap[colorScheme]};
							margin-left: 1rem;
          `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Divider;
