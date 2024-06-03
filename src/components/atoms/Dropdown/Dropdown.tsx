import React, { forwardRef } from "react";
import styles from "./Dropdown.module.css";
import { Text } from "../Text";
import { StandardSize } from "@/types/sizes";

export type DropdownProps = {
  label?: string;
  placeholder?: string;
  size?: StandardSize;
};

const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>((props, ref) => {
  return (
    <div>
      {props.label && (
        <Text as="label" htmlFor="dropdown">
          {props.label}
        </Text>
      )}
      <select ref={ref} id="dropdown" className={styles.basedropdown}>
        {props.placeholder && (
          <option className={styles.option} value="">
            {props.placeholder}
          </option>
        )}
        <option className={styles.option} value="1">
          Option 1
        </option>
        <option className={styles.option} value="2">
          Option 2
        </option>
        <option className={styles.option} value="3">
          Option 3
        </option>
      </select>
    </div>
  );
});

export default Dropdown;
