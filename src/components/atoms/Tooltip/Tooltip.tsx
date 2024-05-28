"use client";
import React, { ReactElement } from "react";
import styles from "./Tooltip.module.css";
import { TextProps } from "../Text/models";
import { Text } from "../Text";
import clsx from "clsx";

export type TooltipProps = HTMLDivElement & {
  label?: string;
  children: React.ReactNode | ReactElement;
  tooltipLabelProps?: TextProps<"span">;
  position?: "top" | "bottom" | "left" | "right";
  transition?: "fast" | "normal" | "slow";
};

const Tooltip: React.FC<TooltipProps> = ({
  children,
  label,
  tooltipLabelProps,
  position = "top",
  transition = "normal",
  className,
}) => {
  return (
    <div className={clsx(styles.trigger, className)}>
      <div
        className={clsx(styles.tooltip, {
          [styles[`tooltip--position-${position}`]]: position,
          [styles[`tooltip--transition-${transition}`]]: transition,
        })}
      >
        <Text {...tooltipLabelProps}>{label}</Text>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
