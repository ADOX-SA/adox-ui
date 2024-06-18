"use client";
import React from "react";
import styles from "./Badge.module.css";
import { BadgeProps } from "./interfaces";
import { Icon } from "../Icon";
import { ColorScheme } from "@/models/Colors";
import clsx from "clsx";
import { Text } from "../Text";
import { Variants } from "@/models/Variants";
import { css } from "@emotion/css";
import { Size } from "@/models/sizes";

const Badge: React.FC<BadgeProps> = ({
  variant = "solid",
  label,
  size = "xs",
  icon = "adox-info",
  color = "success",
  onClick,
}) => {
  const mapClases = (color: ColorScheme, variant: Variants) => {
    switch (variant) {
      case "solid":
        return css`
          background-color: var(--color-${color}-500);
          color: var(--color-white);
          &:hover {
            background-color: var(--color-${color}-600);
          }
          &:active {
            background-color: var(--color-${color}-700);
          }
        `;
      case "outline":
        return css`
          border: 1px solid var(--color-${color}-500);
          color: var(--color-${color}-500);
        `;
      default:
        return css`
          background-color: var(--color-${color}-500);
          color: var(--color-white);
        `;
    }
  };

  const iconSize = (size: Size) => {
    switch (size) {
      case "xs":
        return 14;
      case "sm":
        return 16;
      case "md":
        return 18;
      case "lg":
        return 24;
      case "xl":
        return 28;
      default:
        return 16;
    }
  };

  return (
    <div
      className={clsx(
        styles.badge,
        css`
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: var(--sys-font-size-${size});
          font-weight: 500;
          transition: all 0.2s;
          user-select: none;
          cursor: ${onClick ? "pointer" : "default"};
        `,
        mapClases(color, variant)
      )}
      onClick={
        onClick
          ? () => {
              onClick();
            }
          : undefined
      }
    >
      <Icon
        nameIcon={icon}
        propsIcon={{
          size: iconSize(size),
          style: { marginRight: "0.2rem" },
        }}
      />
      <Text>{label}</Text>
    </div>
  );
};

export default Badge;
