"use client";
import React, { forwardRef, useEffect } from "react";
import styles from "./Checkbox.module.css";
import clsx from "clsx";
import { Text } from "../Text";
import { Icon } from "../Icon";

export type CheckboxProps = {
  colorScheme?: "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
  className?: string;
  checked?: boolean;
  indeterminated?: boolean;
  icon?: string;
  label?: string;
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
      onClick,
      ...props
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const [state, setState] = React.useState<
      "checked" | "unchecked" | "indetermined"
    >("indetermined");

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
          className={
            (clsx(styles.checkboxbase, {
              [styles[`checkbox--color-${colorScheme}`]]: colorScheme,
              [styles[`checkbox--size-${size}`]]: size,
            }),
            className)
          }
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
            onClick;
          }}
          className={styles["checkbox--custom"]}
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
          size: 16,
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
        }}
        className={styles.icon}
      />
    );
  }

  return null;
};

export default Checkbox;
