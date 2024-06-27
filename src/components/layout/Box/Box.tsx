"use client";
import React, { forwardRef } from "react";
import { PolymorphicRef } from "@/utils/types/index";
import { BoxComponent, BoxProps, FlexProps } from "./models";
import styles from "./Box.module.css";
import clsx from "clsx";
import withBaseProps from "@/components/HOC/withBaseProps";

// quieor hacer un component Box que pueda tomar un as como prop

const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = "div">(
    { as, className, ...props }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    //add style as className
    const Component = as || "div";
    return <Component {...props} className={className} ref={ref} />;
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
        className={clsx(className, styles["flex"])}
        {...props}
        ref={ref}
      />
    );
  }
);

export default withBaseProps(Box);
