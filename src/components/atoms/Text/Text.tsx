"use client";
import React, { forwardRef } from "react";
import styles from "./Text.module.css";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "@/utils/types";
import clsx from "clsx";

type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  {
    align?: "left" | "center" | "right";
    size?:
      | "3xs"
      | "2xs"
      | "xs"
      | "sm"
      | "md"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl";
    emphasis?: "high" | "medium" | "low";
    italic?: true | false;
    underline?: true | false;
    weight?: "thin" | "light" | "regular" | "medium" | "bold" | "bolder";
  }
>;

/**
 *
 * Text component is used to render text with different styles.
 *
 * @param {React.ElementType} as - The HTML element to be rendered.
 * @param {string} align - The text alignment.
 * @param {string} size - The text size.
 * @param {string} emphasis - The text emphasis.
 * @param {string} italic - The text italic.
 * @param {string} underline - The text underline.
 * @param {string} weight - The text weight.
 * @example as = b | u | abbr | cite | del | dfn | em | i | ins | kbd | mark | q | s | samp | small | span | strong | sub | sup | time | var | wbr
 * @example <Text as="h1">Hello World</Text>
 * @example <Text as="mark">Hello World</Text>
 */
type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactNode | React.ReactElement<C> | null; // React.ReactNode no deberia de estar pero sino rompe.

export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = "span">(
    {
      as,
      align,
      size,
      emphasis,
      italic,
      underline,
      weight,
      className,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    //  as puede ser de tipo
    // b | u | abbr | cite | del | dfn | em | i | ins | kbd | mark | q | s | samp | small | span | strong | sub | sup | time | var | wbr
    const Component = as || "span";

    return (
      <Component
        ref={ref}
        className={clsx(
          styles.text,
          {
            [styles[`text--align-${align}`]]: align,
            [styles[`text--size-${size}`]]: size,
            [styles[`text--emphasis-${emphasis}`]]: emphasis,
            [styles[`text--weight-${weight}`]]: weight,
            [styles[`text--italic`]]: italic,
            [styles["text--underline"]]: underline,
          },
          className
        )}
        {...props}
      />
    );
  }
);

export default Text;
