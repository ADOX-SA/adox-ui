import React, { ChangeEvent, createRef, useEffect, useState } from "react";
import classNames from "clsx";
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
  dropdownOptions = [],
  size = "md",
  nativeSize,
  variant,
  rounded,
  maxOptionsBeforeScroll,
  defaultValue,
  disabled,
  canSearch,
  width = "md",
  ...props
}: DropdownProps) => {
  const [inputState, setInputState] = useState(false);
  const [completed, setCompleted] = useState(true);
  const ref = createRef<HTMLSelectElement>();

  const [options, setOptions] = useState([] as DropdownOptions[]);
  const [selected, setSelected] = useState<undefined | DropdownOptions>(
    options.find((item) => item.value === props.value) ??
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
      setOptions(dropdownOptions as DropdownOptions[]);
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

  const moverTextoSiHayOverflow = (
    e:
      | React.MouseEvent<HTMLParagraphElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const element = e.currentTarget;
    const anchoTexto = element.scrollWidth;
    const anchoContenedor = element.clientWidth;
    const distanciaDesplazamiento = anchoTexto - anchoContenedor;

    e.currentTarget.style.transition = ` ${
      (distanciaDesplazamiento / 100) * 5
    }s `;
    e.currentTarget.style.transform = `translateX(-${distanciaDesplazamiento}px)`;
  };

  const cortarAnimation = (
    e:
      | React.MouseEvent<HTMLParagraphElement, MouseEvent>
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.currentTarget.style.transition = "0s";
    e.currentTarget.style.transform = "translateX(0)";
  };

  useEffect(() => {
    if (dropdownOptions.length > 0) {
      if (typeof dropdownOptions[0] !== "object") {
        const options = dropdownOptions.map((item) => {
          return { label: item, value: item };
        });
        setOptions(options as DropdownOptions[]);
        const _selected = dropdownOptions.find((item) => item === defaultValue);
        _selected &&
          setSelected({
            label: _selected.toString() ?? dropdownOptions[0],
            value: _selected.toString() ?? dropdownOptions[0],
          });
      } else {
        setOptions(dropdownOptions as DropdownOptions[]);
      }
    }
  }, [dropdownOptions]);

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
        <Text
          size={size}
          as="label"
          className={styles.label}
          htmlFor={props.id}
        >
          {label}
        </Text>
      )}
      <div
        className={classNames(styles.input, styles.dropdown, {
          [styles["focus"]]: inputState,
          [styles["search"]]: canSearch,
          // [styles["disabled"]]: disabled,
          [styles[`input--variant-${variant}`]]: variant,
          [styles[`input--rounded-${rounded}`]]: rounded,
          [styles[`input--size-${size}`]]: size,
          [styles["wrap"]]: IS_WRAP,
          [styles["wrong"]]:
            (required && !completed) || (props.customAlert && !inputState),
        })}
      >
        {(canSearch && !inputState) || !canSearch ? (
          <Text
            as="p"
            size={size}
            className={classNames(styles.value, styles.overflowtext, {
              [styles["disabled"]]: disabled,
            })}
            style={{
              textAlign: !IS_WRAP ? "left" : "center",
              opacity: selected ? 1 : 0.5,
            }}
            onMouseEnter={(e) => {
              moverTextoSiHayOverflow(e);
            }}
            onMouseLeave={(e) => {
              cortarAnimation(e);
            }}
          >
            {!IS_WRAP ? selected?.label ?? placeholder : selected?.label ?? "-"}
          </Text>
        ) : (
          <input
            className={classNames(styles.searchInput)}
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
          className={classNames(
            styles.dropdownOptionsContainer,
            css`
              max-height: ${Number(maxOptionsBeforeScroll) * 2}rem;
            `,
            {
              [styles[`dropdownOptionsContainerLabel`]]: label,
            }
          )}
        >
          {options.length === 0 && canSearch && (
            <Text
              size={size}
              as="p"
              className={classNames(styles.dropdownOptionsNoResult, {})}
            >
              No hay resultados
            </Text>
          )}
          {options.map((item) => (
            <Text
              size={size}
              as="span"
              key={item.value}
              className={classNames(
                styles.dropdownOptions,
                styles.overflowtext,
                {
                  [styles.optionSelected]: selected?.value === item.value,
                }
              )}
              onClick={() => {
                handleChange(item);
              }}
              style={{
                textAlign: !IS_WRAP ? "left" : "center",
              }}
              onMouseEnter={(e) => {
                // e.currentTarget.scrollWidth > e.currentTarget.clientWidth &&
                moverTextoSiHayOverflow(e);
              }}
              onMouseLeave={(e) => {
                cortarAnimation(e);
              }}
            >
              {item.label}
            </Text>
          ))}
        </div>
      )}
      {(props.customAlert || (required && !completed)) && (
        <AlertContainer>
          <Text as="p" className={classNames(styles.error)}>
            {props.customAlert
              ? props.customAlert
              : required
              ? "Debe completar este campo"
              : "El valor ingresado no es valido"}
          </Text>
        </AlertContainer>
      )}
      <select
        onChange={(e) => {
          onChange ? onChange(e) : () => {};
        }}
        ref={ref}
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
