"use client";
import React from "react";
import styles from "./ProgressBar.module.css";
import clsx from "clsx";
import { css } from "@emotion/css";
import { IconName } from "@/components/atoms/Icon/interface";
import { Icon } from "../Icon";
import { Size } from "@/models/sizes";
import { Text } from "../Text";

export type ProgressBarProps = {
  value: number;
  color: string;
  showPercentage?: boolean;
  size?: Size;
  dot?: IconName;
  rounded?: Size | "none";
};

/**
 * Una barra de progreso que muestra el porcentaje de completitud.
 *
 * @param value - Porcentaje de completitud de la barra.
 * @param showPercentage - Indica si se muestra el porcentaje de completitud.
 * @param color - Color de la barra de progreso.
 * @param size - Tamaño de la barra de progreso.
 * @param rounded - Borde redondeado de la barra de progreso.
 * @param dot - Icono que se muestra en la barra de progreso.
 *
 * @example
 * <ProgressBar value={50} color="var(--color-primary-500)" showPercentage size="md" rounded="none" dot="check" />
 *
 *  TODO:
 * - [ ] Implementar la animación de la barra de progreso.
 * - [ ] indeterminate: Indica si la barra de progreso es indeterminada.
 * - [ ] striped: Indica si la barra de progreso tiene rayas.
 * - [ ] animated: Indica si la barra de progreso tiene animación.
 * - [ ] variant: Estilo de la barra de progreso.
 * - [ ] label: Texto que se muestra en la barra de progreso.
 * - [ ] labelDot: Icono que se muestra en la barra de progreso.
 * - [ ] cambiar de color a colorScheme.
 */

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  showPercentage,
  color = "var(--color-primary-500)",
  size = "md",
  rounded = "sm",
  dot,
}) => {
  return (
    <div
      className={clsx(
        styles.progressbar,
        css`
          height: ${{
            xs: "0.5rem",
            sm: "0.75rem",
            md: "1rem",
            lg: "1.5rem",
            xl: "2rem",
          }[size]};
          border-radius: ${{
            xs: "0.125rem",
            sm: "0.25rem",
            md: "0.5rem",
            lg: "0.75rem",
            xl: "1rem",
            none: "0rem",
          }[rounded]};
        `
      )}
      id="progressbar_container"
    >
      <div
        id="progressbar"
        className={clsx(
          styles.progress,
          css`
            background-color: ${color};
            position: relative;
            width: ${value}%;
          `,
          [styles["progress-animation"]]
        )}
      >
        {showPercentage && (
          <Text
            size={size}
            id="progressbar_percentage"
            className={styles.progressText}
          >
            {Math.round(value)}%
          </Text>
        )}
        {dot && (
          <div className={styles.dot} id="progressbar_percentage">
            <Icon
              nameIcon={dot}
              height={"100%"}
              width={"auto"}
              color="var(--sys-color-background)"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
