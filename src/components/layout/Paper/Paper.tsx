"use client";
import React, { forwardRef } from "react";
import styles from "./Paper.module.css";
import { PaperProps } from "../Page/models";
import { PolymorphicRef } from "@/utils/types";
import clsx from "clsx";

type PaperComponent = <C extends React.ElementType = "div">(
  props: PaperProps<C>
) => React.ReactNode | React.ReactElement<C> | null; // React.ReactNode no deberia de estar pero sino rompe.

const Paper: PaperComponent = forwardRef(
  <C extends React.ElementType = "div">(
    props: PaperProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { as = "div" } = props;
    const Component = as || "div";
    return (
      <Component
        ref={ref}
        className={clsx(
          styles.paper,
          {
            [styles[`paper--elevation-${props.elevation}`]]:
              props.elevation || 2,
            [styles[`paper--variant-${props.variant}`]]: props.variant,
            [styles[`paper--square`]]: props.square,
          },
          props.className
        )}
        {...props}
      >
        Paper works!
      </Component>
    );
  }
);
export default Paper;
