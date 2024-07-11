"use client";
import React, { forwardRef } from "react";
import styles from "./TextArea.module.css";
import { TextAreaProps } from "./interfaces";
import clsx from "clsx";
import { css } from "@emotion/css";

const TextArea: React.FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>((props, ref) => {
  const { ...rest } = props;
  return (
    <textarea
      className={clsx(
        styles.textarea,
        css`
          resize: none;
        `
      )}
      ref={ref}
      {...rest}
    />
  );
});

export default TextArea;
