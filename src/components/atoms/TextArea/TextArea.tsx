"use client";
import React, { forwardRef } from "react";
import styles from "./TextArea.module.css";
import { TextAreaProps } from "./interfaces";
import clsx from "clsx";
import { css } from "@emotion/css";
import { Icon } from "../Icon";
import Text from "../Text/Text";

const TextArea: React.FC<TextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>((props, ref) => {
  const { ...rest } = props;
  const variantStyle = (variant: TextAreaProps["variant"]) => {
    switch (variant) {
      case "outlined":
        return css`
          border: 1px solid var(--sys-textarea-border-color);
          padding: 0.5rem;
          border-radius: 0.5rem;
          
          }
        `;
      case "filled":
        return css`
          background-color: var(--sys-color-background);
          padding: 0.5rem;
          border-radius: 0.5rem;
        `;
      case "underlined":
        return css`
          border: none;
          border-bottom: 1px solid var(--sys-textarea-border-color);
          border-radius: 0;
          padding: 0.5rem;
        `;
      case "unstyled":
        return css`
          border: none;
          padding: 0.5rem;
        `;
      default:
        return css`
          border: 1px solid var(--sys-textarea-border-color);
          padding: 0.5rem;
          border-radius: 0.5rem;
        `;
    }
  };

  let textAreaComponent = (
    <textarea
      className={clsx(
        styles.textarea,
        [styles[`textarea--size-${props.size}`]],
        variantStyle(props.variant),

        css`
          resize: none;
          border-radius: var(--sys-border-radius-${props.rounded});
          width: ${props.width === "full" ? "100%" : props.width};
        `,
        props.className
      )}
      disabled={props.disabled}
      ref={ref}
      {...rest}
    />
  );

  if (props.label) {
    textAreaComponent = (
      <div className={styles.textareaContainer}>
        <Text as="label" htmlFor={props.id} className={styles.label}>
          {props.label}
        </Text>
        {textAreaComponent}
      </div>
    );
  }

  if (props.alert && props.customAlert) {
    return (
      <div>
        {textAreaComponent}
        {!!props.customAlert && (
          <div className={clsx(styles.alertContainer)}>
            <Icon
              nameIcon="BiSolidError"
              propsIcon={{ size: "14px", color: "var(--color-red-500)" }}
            />
            <Text size="sm" weight="medium" className={styles.alertText}>
              {props.customAlert}
            </Text>
          </div>
        )}
      </div>
    );
  }

  return textAreaComponent;
});

export default TextArea;
