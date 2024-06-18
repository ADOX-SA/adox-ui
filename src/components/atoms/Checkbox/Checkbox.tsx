"use client";
import React, { forwardRef, useEffect } from "react";
import styles from "./Checkbox.module.css";
import clsx from "clsx";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { css } from "@emotion/css";
import { ColorScheme } from "@/models/Colors";
import { Size } from "@/models/sizes";

export type CheckboxProps = {
  colorScheme?: ColorScheme;
  size?: Size;
  children?: React.ReactNode;
  className?: string;
  checked?: boolean;
  indeterminated?: boolean;
  icon?: string;
  label?: string;
  type?: "solid" | "outline";
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(
  (
    {
      size,
      className,
      colorScheme = "primary",
      label,
      checked,
      indeterminated,
      ...props
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [state, setState] = React.useState<
      "checked" | "unchecked" | "indetermined"
    >("indetermined");

    const checkboxStyle = (
      type: "solid" | "outline",
      state: "checked" | "unchecked" | "indetermined"
    ) => {
      if (state == "unchecked") {
        return css`
          border: 1px solid var(--color-${colorScheme}-300);
        `;
      }
      switch (type) {
        case "solid":
          return css`
            background-color: var(--color-${colorScheme}-500);
            color: var(--sys-color-background);
            border-color: var(--color-${colorScheme}-500);
          `;
        case "outline":
          return css`
            background-color: var(--sys-color-background);
            color: var(--color-${colorScheme}-500);
            border-color: var(--color-${colorScheme}-500);
          `;
        default:
          return css`
            background-color: var(--color-${colorScheme}-500);
            color: var(--sys-color-background);
            border-color: var(--color-${colorScheme}-500);
          `;
      }
    };

    useEffect(() => {
      if (checked) {
        setState("checked");
      } else if (indeterminated) {
        setState("indetermined");
      } else {
        setState("unchecked");
      }
    }, [checked, indeterminated]);

    return (
      <label
        className={clsx(
          styles.label,
          {
            [styles[`label--size-${size}`]]: size,
          },
          className
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          hidden
          checked={state === "checked"}
          className={(clsx(styles.checkboxbase, {}), className)}
          {...props}
        />
        <div
          onClick={() => {
            if (state === "checked") {
              setState("unchecked");
            } else if (state === "unchecked") {
              setState("checked");
            } else if (state === "indetermined") {
              setState("checked");
            } else {
              setState("unchecked");
            }
          }}
          className={clsx(
            styles["checkbox--custom"],
            {
              [styles[`checkbox--size-${size}`]]: size,
            },
            checkboxStyle("solid", state)
          )}
        >
          <CheckIndicator state={state} />
        </div>
        <Text className={`${[styles["checkbox--label-text"]]}`}>{label}</Text>
      </label>
    );
  }
);

const CheckIndicator: React.FC<{
  state: "checked" | "unchecked" | "indetermined";
}> = (props) => {
  const { state } = props;
  if (state === "checked") {
    return (
      <Icon
        nameIcon="GiCheckMark"
        propsIcon={{
          size: "70%",
          color: "inherit",
        }}
        className={styles.icon}
      />
    );
  }
  if (state === "indetermined") {
    return (
      <Icon
        nameIcon="BiMinus"
        propsIcon={{
          size: 16,
          color: "inherit",
        }}
        className={styles.icon}
      />
    );
  }

  return null;
};

export default Checkbox;
