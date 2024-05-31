"use client";
import React, { forwardRef } from "react";
import styles from "./Text.module.css";
import { PolymorphicRef } from "@/utils/types";
import clsx from "clsx";
import { TextComponent, TextProps } from "./models";
import { css } from "@emotion/css";

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
      colorScheme,
      ...props
    }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    //  as puede ser de tipo
    // b | u | abbr | cite | del | dfn | em | i | ins | kbd | mark | q | s | samp | small | span | strong | sub | sup | time | var | wbr
    const Component = as || "span";

    const colors = () => {
      if (!colorScheme) return;
      if (
        [
          "primary",
          "secondary",
          "tertiary",
          "success",
          "warning",
          "danger",
          "info",
          "light",
          "dark",
        ].includes(colorScheme)
      ) {
        return css`
          color: var(--sys-color-${colorScheme});
        `;
      }
      return css`
        color: var(--color-${colorScheme}-500);
      `;
    };

    return (
      <Component
        ref={ref}
        className={clsx(
          styles.text,
          colors(),
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
