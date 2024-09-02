"use client";
import React, { forwardRef } from "react";
import styles from "./Skeleton.module.css";
import clsx from "clsx";
import { css } from "@emotion/css";

export type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  animation?: false | "wave" | "pulse";
};

/**
 * @name Skeleton
 * @description
 * Un componente que muestra un esqueleto de un componente que se va a cargar.
 * Se puede usar para mostrar un esqueleto de un componente que se va a cargar.
 * @prop {string | number} width - El ancho del esqueleto.
 * @prop {string | number} height - La altura del esqueleto.
 * @prop {"none" | "sm" | "md" | "lg" | "full"} rounded - El redondeo de las esquinas del esqueleto.
 * @prop {false | "wave" | "pulse"} animation - La animación del esqueleto.
 * @example

 * FIXME: Quiero poder hacer esto:
 * - [ ] Quiero poder cambiar la variante de skeleton. (rect, circle, text) aunque con rounded y height y width se puede hacer. (No es necesario)
 * - [ ] Quiero pasarle un color de fondo.
 * - [ ] Quiero poder cambiar el color de la animación.
 * - [ ] Quiero poder cambiar la duración de la animación.
 * - [ ] Revisar si es viable tener de hijo a los componentes que se van a cargar o ver si tener la posibilidad de hacer eso.
 * - [ ] Revisar si es viable tener un estado de carga.
 * */

const Skeleton: React.FC<SkeletonProps> = forwardRef<
  HTMLDivElement,
  SkeletonProps
>((props, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        css`
          width: ${props.width};
          height: ${props.height};
          border-radius: var(--sys-border-radius-${props.rounded});
        `,
        { [styles[`animation-${props.animation}`]]: props.animation },
        styles.skeleton
      )}
    />
  );
});

export default Skeleton;
