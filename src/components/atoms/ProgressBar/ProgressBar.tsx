"use client";
import React from "react";
import styles from "./ProgressBar.module.css";
import clsx from "clsx";
import { css } from "@emotion/css";
import { IconName } from "@/components/atoms/Icon/interface";
import { Icon } from "../Icon";
import { Size } from "@/models/sizes";

export type ProgressBarProps = {
  totalLength: number;
  currentLength: number;
  color: string;
  showPercentage?: boolean;
  size?: Size;
  dot?: IconName;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalLength,
  currentLength,
  showPercentage,
  color = "var(--color-primary-500)",
  dot,
}) => {
  return (
    <div className={styles.progressbar}>
      <div
        className={clsx(
          styles.progress,
          css`
            background-color: ${color};
            position: relative;
          `
        )}
        style={{ width: `${(currentLength / totalLength) * 100}%` }}
      >
        {showPercentage && (
          <div className={styles.progressText}>
            {Math.round((currentLength / totalLength) * 100)}%
          </div>
        )}
        {dot && (
          <div className={styles.dot}>
            <Icon
              nameIcon={dot}
              height={16}
              color="var(--sys-color-background)"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
