"use client";
import React, { forwardRef } from "react";
import styles from "./Container.module.css";
import clsx from "clsx";
import { PolymorphicRef } from "@/utils/types";
import { ContainerProps } from "./models";

type ContainerComponent = <C extends React.ElementType = "div">(
  props: ContainerProps<C>
) => React.ReactNode | React.ReactElement<C> | null; // React.ReactNode no deberia de estar pero sino rompe.

const Container: ContainerComponent = forwardRef(
  <C extends React.ElementType = "div">(
    props: ContainerProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const {
      as = "div",
      centerContent,
      page,
      children,
      className,
      isVisible,
      padding,
      display,
      flexDirection,
      alignItems,
      justifyContent,
      contentContainer = false,
      fluid,
      fullWidth,
      wrap,
      platform = "any",
      ...rest
    } = props;

    const Component = as || "div";

    const classes = clsx(
      styles.container,
      {
        [styles.centerContent]: centerContent,
        [styles.page]: page,
        [styles["is-visible"]]: isVisible,
        [styles[`flex-${flexDirection}`]]: flexDirection,
        [styles[`display-${display}`]]: display,
        [styles[`align-${alignItems}`]]: alignItems,
        [styles[`justify-${justifyContent}`]]: justifyContent,
        [styles[`padding-none`]]: padding === "none",
        [styles[`content-container`]]: contentContainer && !fluid,
        [styles[`container-fluid`]]: fluid,
        [styles[`full-width`]]: fullWidth,
        [styles[`wrap`]]: wrap,
        [styles[`${platform}`]]: platform,
      },
      className
    );

    return (
      <Component ref={ref} className={classes} {...rest}>
        {children}
      </Component>
    );
  }
);

export default Container;
