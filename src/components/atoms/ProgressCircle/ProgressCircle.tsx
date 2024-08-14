"use client";
import React from "react";
import styles from "./ProgressCircle.module.css";
import { Size } from "@/models/sizes";
import clsx from "clsx";
import { css } from "@emotion/css";
import { Text } from "../Text";

export type ProgressCircleProps = {
  /* number between 0 and 100 */
  value: number;
  size: Size | "3xs" | "2xs" | "2xl" | "3xl";
  color?: string;
  label?: string;
};

/**
 * Circulo de progreso
 * @param value Porcentaje de progreso hasta el 100%
 * @param size Tamaño del circulo
 * @param color Color del circulo
 * @param label Texto en el centro del circulo
 * @returns Circulo de progreso
 *
 * TODO:
 * - [ ] Implementar animación
 * - [ ] Implementar texto en el centro
 * - [ ] Implementar colores
 * - [ ] Implementar ellipsis en texto largo
 * - [ ] Implementar tooltip en hover (opcional)
 * - [ ] Implementar texto reactivo segun tamaño del circulo
 * - [ ] Revisar si es factible pasarle un componente para meterlo adentro del circulo, onda un Text y tener mas control y hacerlo mas generico.
 */

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  value,
  size = "sm",
  color,
  label,
}) => {
  const sizeMap = {
    "3xs": "2rem",
    "2xs": "4rem",
    xs: "6rem",
    sm: "8rem",
    md: "10rem",
    lg: "12rem",
    xl: "14em",
    "2xl": "16rem",
    "3xl": "18rem",
    full: "100%",
  }[size];
  return (
    <div
      className={clsx(
        styles.progresscircle,
        css`
          height: ${sizeMap};
          width: ${sizeMap};
        `
      )}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="var(--color-gray-300)"
          strokeWidth="10"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke={color || "var(--color-primary-500)"}
          strokeWidth="10"
          strokeDasharray="283"
          strokeDashoffset={283 - (283 * value) / 100}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className={styles.content}>
        <Text as="p" size="xs" className={styles.label}>
          {label || `${value}%`}
        </Text>
      </div>
    </div>
  );
};

export default ProgressCircle;
