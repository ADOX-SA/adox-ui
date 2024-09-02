"use client";
import React, { ChangeEvent, forwardRef } from "react";
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
  options?: {
    off?: {
      icon?: React.ReactNode;
      label?: string;
      color?: ColorScheme;
    };
    on?: {
      icon?: React.ReactNode;
      label?: string;
      color?: ColorScheme;
    };
  };
}

/**
 *
 * Switch component
 * -FIXME:
 * [ ] agregar size
 * [ ] agregar iconos
 * [ ] agregar labels
 * [ ] agregar colores
 * [ ] agregar opciones
 * [ ] agregar disabled
 * [ ] agregar checked
 */

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ color = "primary", checked, name, onChange = () => {} }, ref) => {
    //change css var value
    //--color

    return (
      <label
        className={classNames(
          styles.switch,
          css`
            --color: var(--color-${color}-500);
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
          ref={ref}
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
  }
);

export default Switch;
