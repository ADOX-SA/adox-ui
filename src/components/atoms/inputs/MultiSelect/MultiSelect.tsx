import React, {
  ChangeEvent,
  createRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import classNames from "clsx";
import styles from "./MultiSelect.module.css";
import { Icon } from "@/components/atoms/Icon";
import { DropdownOptions } from "../Select/interfaces";
import { Text } from "../../Text";
import { css } from "@emotion/css";
import { AlertContainer } from "../../AlertContainer";
import { MultiSelectProps } from "./interfaces";

/**
 *
 * TODO:
 * [ ] Implementar la funcionalidad de los errores
 * [ ] No funciona con el wrap
 */

const MultiSelect: React.FC<MultiSelectProps> = ({
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
  canSearch,
  disabled,
  width = "md",
  noHideArrow,
  ...props
}) => {
  const [inputState, setInputState] = useState(false);
  const [completed, setCompleted] = useState(true);
  const ref = createRef<HTMLSelectElement>();

  const [options, setOptions] = useState([] as DropdownOptions[]);
  const [selected, setSelected] = useState<DropdownOptions[]>([]);

  const IS_WRAP = width == "wrap";
  const showCaret = !IS_WRAP || noHideArrow;
  /* FUNCIONES PARA EL MANEJO DE ESTADOS */
  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!canSearch) return;
      const target = e.target as HTMLElement;
      if (
        inputState &&
        ref.current &&
        !ref.current.contains(target) &&
        !target.classList.contains(styles.dropdownOptions) &&
        !target.classList.contains(styles.dropdownOptionsContainer) &&
        !target.classList.contains(styles.dropdownOptionsNoResult) &&
        !target.classList.contains(styles.dropdownOptionsContainerLabel) &&
        !target.classList.contains(styles.optionSelected) &&
        !target.classList.contains(styles.searchInput) &&
        !target.classList.contains(styles.caret)
      ) {
        setInputState(false);
        if (!selected) {
          setCompleted(false);
        }
      }
    },
    [inputState, ref, selected]
  );

  const searchFocus = (input: HTMLInputElement | null) => {
    if (input) {
      input.focus();
    }
  };

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    let tempOptions = [] as DropdownOptions[];
    if (typeof dropdownOptions[0] != "object") {
      const opts = dropdownOptions.map((item) => {
        return { label: item, value: item };
      });
      tempOptions = opts as DropdownOptions[];
    }
    if (e.target.value !== "") {
      setOptions(
        tempOptions.filter(({ label }) => {
          return label.toLowerCase().includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setOptions(tempOptions as DropdownOptions[]);
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
    if (selected.some((item) => item.value === opc.value)) {
      setSelected(selected.filter((item) => item.value !== opc.value));
    } else {
      setSelected([...selected, opc]);
    }
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
      } else {
        setOptions(dropdownOptions as DropdownOptions[]);
      }
    }
  }, [dropdownOptions]);

  const isOptionSelected = (option: DropdownOptions) => {
    return selected.some(
      (selectedOption) => selectedOption.value === option.value
    );
  };
  useEffect(() => {
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, [inputState, onClickOutside]);
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
              paddingRight: "1rem",
            }}
            onMouseEnter={(e) => {
              moverTextoSiHayOverflow(e);
            }}
            onMouseLeave={(e) => {
              cortarAnimation(e);
            }}
          >
            {!IS_WRAP ? ` ${selected.length} han sido seleccionados ` : ""}
          </Text>
        ) : (
          <input
            className={classNames(styles.searchInput)}
            ref={searchFocus}
            onChange={searchChange}
          />
        )}
        {showCaret && (
          <Icon
            color="var(--color-base-500)"
            size="1em"
            nameIcon="adox-downCaret"
            className={styles.caret}
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
            <div key={item.value} style={{ display: "flex" }}>
              <input
                type="checkbox"
                id={item.value}
                name={item.value}
                value={item.value}
                checked={isOptionSelected(item)}
                readOnly
                // onChange={() => handleChange(item)}
              />
              <Text
                size={size}
                as="span"
                className={classNames(
                  styles.dropdownOptions,
                  styles.overflowtext,
                  {
                    [styles.optionSelected]: isOptionSelected(item),
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
            </div>
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

export default MultiSelect;
