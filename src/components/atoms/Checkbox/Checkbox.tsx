"use client";
import React, { forwardRef } from "react";
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
      checked,
      className,
      colorScheme = "primary",
      icon = "check",
      label,
      indeterminated,
      ...props
    }: CheckboxProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
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
          checked={checked}
          className={clsx(
            styles.checkboxbase,
            {
              [styles[`checkbox--color-${colorScheme}`]]: colorScheme,
              [styles[`checkbox--size-${size}`]]: size,
            },
            className
          )}
          {...props}
        />
        <div className={styles["checkbox--custom"]}>
          <CheckIndicator
            checked={checked}
            indeterminated={indeterminated}
            icon={icon}
          />
        </div>
        <Text className={`${[styles["checkbox--label-text"]]}`}>{label}</Text>
      </label>
    );
  }
);

const CheckIndicator: React.FC<{
  checked?: boolean;
  indeterminated?: boolean;
  icon?: string;
}> = (props) => {
  const { checked, indeterminated, icon } = props;
  if (indeterminated) {
    return (
      <Icon
        nameIcon="FaMinus"
        propsIcon={{
          size: 16,
        }}
        className={styles.icon}
      />
    );
  }

  if (checked) {
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

  if (checked && icon) {
    return (
      <Icon
        nameIcon={icon}
        propsIcon={{
          size: 24,
        }}
        className={styles.icon}
      />
    );
  }

  return null;
};

export default Checkbox;
