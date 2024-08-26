import clsx from "clsx";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import styles from "../Dropdown.module.css";
import React from "react";

const DropdownContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children }, forwardedRef) => {
  const ref = useRef<HTMLDivElement>(null);
  useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);
  useEffect(() => {
    if (ref) {
      const dropdownContent = ref.current;
      if (dropdownContent) {
        dropdownContent.style.opacity = "1";
        dropdownContent.style.transform = "translateY(0)";
      }
    }
  }, [ref]);
  return (
    <div ref={ref} className={clsx(styles.dropdownContent)}>
      {children}
    </div>
  );
});

export default DropdownContent;
