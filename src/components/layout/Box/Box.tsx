"use client";
import React, { forwardRef } from "react";
import { PolymorphicRef } from "@/utils/types/index";
import { BoxComponent, BoxProps, FlexProps } from "./models";
import styles from "./Box.module.css";
import clsx from "clsx";

// quieor hacer un component Box que pueda tomar un as como prop

const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = "div">(
    { as, className, ...props }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    //add style as className
    const Component = as || "div";
    return <Component className={className} {...props} ref={ref} />;
  }
);

export const Flex = forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      className,
      flex,
      flexDirection,
      alignItems,
      gap,
      justifyContent,
      wrap,
      ...props
    }: FlexProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    //add style as className
    const Component = as || "div";
    return (
      <Component
        style={{
          display: "flex",
          flexDirection: flexDirection,
          alignItems: alignItems,
          gap: gap,
          justifyContent: justifyContent,
          flex: flex,
          flexWrap: wrap,
          ...props.style,
        }}
        className={clsx(styles.flex, className)}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Box;
