"use client";
import React, { ChangeEvent } from "react";
import styles from "./Switch.module.css";
import classNames from "clsx";
import { ColorScheme } from "@/models/Colors";
import { css } from "@emotion/css";
import { Size } from "@/models/sizes";

export interface SwitchProps {
  color?: ColorScheme;
  name?: string;
  checked?: boolean;
  size?: Size;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 *
 * Switch component
 * -FIXME:FALTA TODO
 */

const Switch = ({
  color = "danger",
  checked,
  name,
  onChange = () => {},
}: SwitchProps) => {
  //change css var value
  //--color

  return (
    <label
      className={classNames(
        styles.switch,
        css`
          --color: var(--color-${color}-500);
          height: ;
        `,
        {
          [styles[`size-small`]]: true,
        }
      )}
    >
      <input
        type="checkbox"
        hidden
        onChange={(e) => {
          onChange(e);
        }}
        checked={checked ?? undefined}
        name={name}
      />
      <span
        className={classNames(
          css`
            --color: var(--color-${color}-500);
          `,
          styles.slider
        )}
      />
    </label>
  );
};

export default Switch;
