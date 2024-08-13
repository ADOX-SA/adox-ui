"use client";
import React from "react";
import styles from "./AlertContainer.module.css";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { clsx } from "clsx";

export type AlertContainerProps = {
  children?: React.ReactNode;
};

const AlertContainer: React.FC<AlertContainerProps> = ({ children }) => {
  return (
    <div className={clsx(styles.alertContainer)}>
      <Icon
        nameIcon="BiSolidError"
        propsIcon={{ size: "14px", color: "var(--color-red-500)" }}
      />
      <Text size="sm" weight="medium" className={styles.alertText}>
        {children}
      </Text>
    </div>
  );
};

export default AlertContainer;
