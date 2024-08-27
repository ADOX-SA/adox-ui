import React, { ChangeEvent, createRef, useState } from "react";
import classNames from "clsx";
import inputStyles from "./Inputs.module.css";
import styles from "./Select.module.css";
import { DropdownProps } from "./interfaces";
import { Icon } from "@/components/atoms/Icon";
import { DropdownOptions } from "./interfaces";
import { Text } from "../../Text";
import { css } from "@emotion/css";
import { AlertContainer } from "../../AlertContainer";

const Select = ({
  label,
  placeholder,
  onChange = () => {},
  required,
  dropdownOptions,
  value,
  size,
  nativeSize,
  variant,
  rounded,
  name,
  maxOptionsBeforeScroll,
  defaultValue,
  disabled,
  canSearch,
  width,
  ...props
}: DropdownProps) => {
  const [inputState, setInputState] = useState(true);
  const [completed, setCompleted] = useState(true);
  const ref = createRef<HTMLSelectElement>();

  const [options, setOptions] = useState(dropdownOptions);
  const [selected, setSelected] = useState<undefined | DropdownOptions>(
    options.find((item) => item.value === value) ??
      options.find((item) => item.value === defaultValue)
  );

  const IS_WRAP = width == "wrap";
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

  const moverTextoSiHayOverflow = () => {};

  return (
    <div
      className={classNames(
        styles.dropdownContainer,
        css`
          ${!IS_WRAP && `width: var(--sys-input-width-${width});`}
        `,
        {
          [styles["wrap"]]: IS_WRAP,
        }
      )}
      onClick={() =>
        !inputState && !disabled ? setInputState(true) : () => {}
      }
      onFocus={focus}
      onBlur={blur}
      tabIndex={disabled ? undefined : 0}
    >
      {label && !IS_WRAP && (
        <Text as="label" className={inputStyles.label} htmlFor={props.id}>
          {label}
        </Text>
      )}
      <div
        className={classNames(inputStyles.input, styles.dropdown, {
          [styles["focus"]]: inputState,
          [inputStyles["disabled"]]: disabled,
          [inputStyles[`input--variant-${variant}`]]: variant,
          [inputStyles[`input--rounded-${rounded}`]]: rounded,
          [inputStyles[`input--size-${size}`]]: size,
          [styles["wrap"]]: IS_WRAP,
          [inputStyles["wrong"]]:
            (required && !completed) || (props.customAlert && !inputState),
        })}
      >
        {(canSearch && !inputState) || !canSearch ? (
          <Text
            as="p"
            size="md"
            className={inputStyles.value}
            style={{
              textAlign: !IS_WRAP ? "left" : "center",
              opacity: selected ? 1 : 0.5,
            }}
            // onMouseEnter={(e) => {
            //   e.currentTarget.style.color = "red";
            //   moverTextoSiHayOverflow();
            // }}
          >
            {!IS_WRAP ? selected?.label ?? placeholder : selected?.label ?? "-"}
          </Text>
        ) : (
          <input
            className={classNames(inputStyles.searchInput)}
            ref={searchFocus}
            onChange={searchChange}
          />
        )}
        {!IS_WRAP && (
          <Icon
            color="var(--color-base-500)"
            size="1em"
            nameIcon="adox-downCaret"
          />
        )}
      </div>
      {inputState && (
        <div
          className={classNames(styles.dropdownOptionsContainer, {
            [styles[`maxOptions-${maxOptionsBeforeScroll}`]]:
              maxOptionsBeforeScroll,
            [styles[`dropdownOptionsContainerLabel`]]: label,
          })}
        >
          {options.length === 0 && canSearch && (
            <Text
              as="p"
              className={classNames(styles.dropdownOptionsNoResult, {})}
            >
              No hay resultados
            </Text>
          )}
          {options.map((item) => (
            <Text
              as="span"
              key={item.value}
              className={classNames(styles.dropdownOptions, {
                [styles.optionSelected]: selected?.value === item.value,
              })}
              onClick={() => {
                handleChange(item);
              }}
              style={{
                textAlign: !IS_WRAP ? "left" : "center",
              }}
            >
              {item.label}
            </Text>
          ))}
        </div>
      )}
      {(props.customAlert || (required && !completed)) && (
        <AlertContainer>
          <Text as="p" className={classNames(inputStyles.error)}>
            {props.customAlert
              ? props.customAlert
              : required
              ? "Debe completar este campo"
              : "El valor ingresado no es valido"}
          </Text>
        </AlertContainer>
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
        size={nativeSize}
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
export default Select;
