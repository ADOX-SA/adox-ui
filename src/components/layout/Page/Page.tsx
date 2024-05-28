"use client";
import React, { forwardRef } from "react";
import styles from "./Page.module.css";
import { Box } from "../Box";
import clsx from "clsx";

export type PageProps = {
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
} & React.HTMLAttributes<HTMLDivElement>;

const Page: React.FC<PageProps> = forwardRef<HTMLDivElement, PageProps>(
  ({ children, maxWidth }, ref) => {
    return (
      <Box
        as="main"
        className={clsx(styles.page, {
          [styles[`page--maxWidth-${maxWidth}`]]: maxWidth,
        })}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);
export default Page;
