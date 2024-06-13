import React, { ChangeEvent, createRef, useState } from "react";
import clsx from "clsx";

import styles from "./Dropdown.module.css";
import { DropdownProps } from "./interfaces";
import { Icon } from "@/components/atoms/Icon";
import { DropdownOptions } from "./interfaces";
import { Text } from "../Text";
import { css } from "@emotion/css";

const Dropdown = ({
  label,
  placeholder,
  onChange = () => {},
  required,
  dropdownOptions,
  value,
  height,
  width,
  size = "md",
  name,
  maxOptionsBeforeScroll,
  defaultValue,
  disabled,
  filter,
  ...props
}: DropdownProps) => {
  const [inputState, setInputState] = useState(false);
  const [completed, setCompleted] = useState(true);
  const ref = createRef<HTMLSelectElement>();

  const [options, setOptions] = useState(dropdownOptions);
  const [selected, setSelected] = useState<undefined | DropdownOptions>(
    options.find((item) => item.value === value) ??
      options.find((item) => item.value === defaultValue)
  );

  /* FUNCIONES PARA EL MANEJO DE ESTADOS */

  const searchFocus = (input: HTMLInputElement | null) => {
    if (input) {
      input.focus();
    }
  };

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== "") {
      setOptions(
        options.filter(({ label }) => {
          return label.toLowerCase().includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setOptions(dropdownOptions);
    }
  };

  const focus = () => {
    setInputState(true);
    if (!selected) {
      setCompleted(false);
    }
  };

  const blur = () => {
    if (!filter) setInputState(false); // REACT ES UNA MIERDA
    if (!selected) {
      setCompleted(false);
    }
  };

  const handleChange = (opc: DropdownOptions) => {
    setInputState(false);
    setCompleted(true);
    setSelected(opc);
    //trigger onchange from select tag
    if (ref.current) {
      ref.current.value = opc.value;
    }
    const event = new Event("change", { bubbles: true });
    ref.current?.dispatchEvent(event);
  };

  return (
    <div
      className={clsx(
        styles.dropdownContainer,
        {
          [styles[`dropdown-${size}`]]: size,
          [styles[`disabled`]]: disabled,
        },
        css`
          height: ${height};
        `
      )}
      onClick={() =>
        !inputState && !disabled ? setInputState(true) : () => {}
      }
      onFocus={focus}
      onBlur={blur}
      tabIndex={disabled ? undefined : 0}
    >
      {label && size != "wrap" && (
        <Text as="label" className={clsx("label-medium")} htmlFor={props.id}>
          {label}
        </Text>
      )}
      <div
        className={clsx(styles.dropdown, "surface-variant", {
          [styles.dropdownActive]: inputState,
        })}
      >
        <div className={clsx(styles.dropdownValue)}>
          {(filter && !inputState) || !filter ? (
            <Text
              className={clsx(
                styles.dropdownValueParagraph,
                css`
                  line-height: var(--sys-input-height-${size});
                `
              )}
              style={{
                textAlign: size != "wrap" ? "left" : "center",
                opacity: selected ? 1 : 0.5,
              }}
            >
              {size != "wrap"
                ? selected?.label ?? placeholder
                : selected?.label ?? "-"}
            </Text>
          ) : (
            <input
              className={clsx(styles.searchInput)}
              ref={searchFocus}
              onChange={searchChange}
            />
          )}
          {size !== "sm" && size !== "wrap" && (
            <Icon
              nameIcon={inputState ? "adox-upCaret" : "adox-downCaret"}
              propsIcon={{
                size: 16,
              }}
              className={clsx(styles.icon)}
            />
          )}
        </div>
      </div>
      {inputState && (
        <div
          className={clsx(styles.dropdownOptionsContainer, {
            // [styles[`dropdown-${size}`]]: size,
            [styles[`maxOptions-${maxOptionsBeforeScroll}`]]:
              maxOptionsBeforeScroll,
            [styles[`dropdownOptionsContainerLabel`]]: label,
            [styles[`dropdown--options-top-${size}`]]: size,
          })}
        >
          {options.length === 0 && filter && (
            <Text className={clsx(styles.dropdownOptionsNoResult, {})}>
              No hay resultados
            </Text>
          )}
          {options.map((item) => (
            <Text
              key={item.value}
              className={clsx(styles.dropdownOptions, {
                [styles.optionSelected]: selected?.value === item.value,
              })}
              onClick={() => {
                handleChange(item);
              }}
              style={{
                textAlign: size !== "wrap" ? "left" : "center",
              }}
            >
              {item.label}
            </Text>
          ))}
        </div>
      )}
      {required && (
        <div
          className={clsx(styles.errorContainer, {
            [styles["showError"]]: !inputState && !completed,
          })}
        >
          <p className={clsx("label-large", styles.errorDisplay)}>
            {"Debe seleccionar un valor"}
          </p>
        </div>
      )}
      <select
        value={value}
        onChange={(e) => {
          onChange ? onChange(e) : () => {};
        }}
        ref={ref}
        name={name}
        required={required}
        hidden
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Dropdown;
