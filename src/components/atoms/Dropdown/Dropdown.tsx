import React, { ChangeEvent, createRef, useState } from "react";
import clsx from "clsx";

import styles from "./Dropdown.module.css";
import { DropdownProps } from "./interfaces";
import { Icon } from "@/components/atoms/Icon";
import { DropdownOptions } from "./interfaces";

const Dropdown = ({
  label,
  placeholder,
  onChange = () => {},
  required,
  dropdownOptions,
  value,
  sizeLength = "medium",
  name,
  maxOptionsBeforeScroll,
  defaultValue,
  disabled,
  canSearch,
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
    if (!canSearch) setInputState(false); // REACT ES UNA MIERDA
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
      className={clsx(styles.dropdownContainer, {
        [styles[`dropdown-${sizeLength}`]]: sizeLength,
        [styles[`disabled`]]: disabled,
      })}
      onClick={() =>
        !inputState && !disabled ? setInputState(true) : () => {}
      }
      onFocus={focus}
      onBlur={blur}
      tabIndex={disabled ? undefined : 0}
    >
      {label && sizeLength != "wrap" && (
        <label className={clsx("label-medium")} htmlFor={props.id}>
          {label}
        </label>
      )}
      <div
        className={clsx(styles.dropdown, "surface-variant", {
          [styles.dropdownActive]: inputState,
        })}
      >
        <div className={clsx(styles.dropdownValue)}>
          {(canSearch && !inputState) || !canSearch ? (
            <p
              className={clsx(styles.dropdownValueParagraph)}
              style={{
                textAlign: sizeLength != "wrap" ? "left" : "center",
                opacity: selected ? 1 : 0.5,
              }}
            >
              {sizeLength != "wrap"
                ? selected?.label ?? placeholder
                : selected?.label ?? "-"}
            </p>
          ) : (
            <input
              className={clsx(styles.searchInput)}
              ref={searchFocus}
              onChange={searchChange}
            />
          )}
          {sizeLength !== "small" && sizeLength !== "wrap" && (
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
            // [styles[`dropdown-${sizeLength}`]]: sizeLength,
            [styles[`maxOptions-${maxOptionsBeforeScroll}`]]:
              maxOptionsBeforeScroll,
            [styles[`dropdownOptionsContainerLabel`]]: label,
          })}
        >
          {options.length === 0 && canSearch && (
            <p className={clsx(styles.dropdownOptionsNoResult, {})}>
              No hay resultados
            </p>
          )}
          {options.map((item) => (
            <p
              key={item.value}
              className={clsx(styles.dropdownOptions, {
                [styles.optionSelected]: selected?.value === item.value,
              })}
              onClick={() => {
                handleChange(item);
              }}
              style={{
                textAlign: sizeLength !== "wrap" ? "left" : "center",
              }}
            >
              {item.label}
            </p>
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
