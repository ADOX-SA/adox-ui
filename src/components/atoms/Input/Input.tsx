"use client";
import React, {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  useRef,
  useState,
} from "react";
import styles from "./Input.module.css";
import clsx from "clsx";
import { Icon } from "../Icon";
import { Text } from "../Text";
import { Container } from "@/components/layout/Container";
import { StandardSize } from "@/types/sizes";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  size?: StandardSize;
  alert?: boolean;
  customAlert?: string;
  label?: string;
  nativeSize?: InputHTMLAttributes<HTMLInputElement>["size"];
}
const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      variant = "outlined",
      rounded,
      alert,
      customAlert,
      size,
      label,
      nativeSize,
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
                [styles[`input--size-${size}`]]: size,
              })}
              size={nativeSize}
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
  const { size, nativeSize, ...rest } = props;
  const [files, setFiles] = useState<FileList>();
  const inputRef = useRef<ForwardedRef<HTMLInputElement>>(ref);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files || undefined);
    // }
    if (props.onChange) props.onChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFiles(e.target.files || undefined);
    if (props.onBlur) props.onBlur(e);
  };

  const removeFiles = () => {
    const inputReff =
      inputRef as unknown as React.MutableRefObject<HTMLInputElement>;
    if (inputReff.current) {
      console.log(inputRef.current);
      inputReff.current.files = null;
      inputReff.current.value = "";
      const event = new Event("change", { bubbles: true });
      inputReff.current.dispatchEvent(event);
      setFiles(undefined);
      // setComplete(false);
    }
  };

  return (
    <Container display="flex" alignItems="center" className={styles.fileInput}>
      <Text
        as="label"
        htmlFor="file-upload"
        aria-disabled={props.disabled}
        className={styles[`custom-file-upload`]}
      >
        Seleccionar Archivo{" "}
        <Icon
          nameIcon="BiSolidCloudUpload"
          propsIcon={{ size: "24px", color: "var(--color-gray-500)" }}
        />
      </Text>

      <Text size="sm" weight="medium" colorScheme="gray">
        {files?.length
          ? files.length === 1
            ? files[0].name
            : `${files.length} archivos seleccion`
          : "No ha seleccionado archivos"}
      </Text>
      {files?.length ? (
        <div onClick={() => removeFiles()} className={styles.clickable}>
          <Icon
            nameIcon="BiSolidXSquare"
            propsIcon={{
              size: "18px",
              color: "var(--color-red-700)",
            }}
          />
        </div>
      ) : null}
      <input
        id="file-upload"
        onBlur={handleBlur}
        onChange={handleChange}
        multiple
        size={nativeSize}
        ref={inputRef as unknown as ForwardedRef<HTMLInputElement>}
        className={clsx(styles.baseinput, {
          [styles[`input--size-${size}`]]: size,
        })}
        {...rest}
      />
    </Container>
  );
});

const MemoInput = React.memo(Input);
MemoInput.displayName = "Input";
export { MemoInput as Input };

export default Input;
