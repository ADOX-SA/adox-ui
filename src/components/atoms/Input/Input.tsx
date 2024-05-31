"use client";
import React, {
  ComponentProps,
  forwardRef,
  InputHTMLAttributes,
  useRef,
} from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { Container } from "@/components/layout/Container";

export type InputProps = {
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  s?: "xs" | "sm" | "md" | "lg" | "xl";
  width?: InputHTMLAttributes<HTMLInputElement>["width"] | "lg" | "xs";
  alert?: boolean;
  customAlert?: string;
  label?: string;
} & ComponentProps<"input">;
const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      variant = "outlined",
      rounded,
      alert,
      customAlert,
      s,
      label,
      ...rest
    } = props;
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!);
    if (alert) {
      inputRef.current?.focus();
    }

    return (
      <div className={styles.inputContainer}>
        {label ? (
          <Text
            as="label"
            size="xs"
            weight="medium"
            colorScheme="gray"
            className={styles.label}
          >
            {label}
          </Text>
        ) : null}
        <div
          ref={containerRef}
          className={clsx(alert ? styles.alertInput : styles.input, {
            [styles[`input--variant-${variant}`]]: variant,
            [styles[`input--rounded-${rounded}`]]: rounded,
          })}
        >
          {props.type === "file" ? (
            <FileInput ref={inputRef} {...props} />
          ) : (
            <input
              id="file-upload"
              ref={inputRef}
              className={clsx(styles.baseinput, {
                [styles[`input--s-${s}`]]: s,
              })}
              {...rest}
            />
          )}
        </div>
        {alert ? (
          <div className={clsx(styles.alertContainer)}>
            <Icon
              nameIcon="BiSolidError"
              propsIcon={{ size: "14px", color: "var(--color-red-500)" }}
            />
            <Text size="sm" weight="medium" className={styles.alertText}>
              {customAlert}
            </Text>
          </div>
        ) : null}
      </div>
    );
  }
);

const FileInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const fatherRef = useRef<HTMLInputElement>();
  return (
    <Container display="flex">
      <Text
        as="label"
        htmlFor="file-upload"
        className={styles[`custom-file-upload`]}
      >
        Seleccionar Archivo{" "}
        <Icon
          nameIcon="BiSolidCloudUpload"
          propsIcon={{ size: "24px", color: "var(--color-gray-500)" }}
        />
      </Text>

      <Text size="sm" weight="medium" colorScheme="gray">
        {fatherRef &&
          fatherRef.current &&
          fatherRef.current.files &&
          fatherRef.current.files[0].name}
      </Text>
      <input
        id="file-upload"
        ref={ref}
        className={clsx(styles.baseinput, {
          [styles[`input--s-${props.s}`]]: props.s,
        })}
        {...props}
      />
    </Container>
  );
});

const MemoInput = React.memo(Input);
MemoInput.displayName = "Input";
export { MemoInput as Input };

export default Input;
