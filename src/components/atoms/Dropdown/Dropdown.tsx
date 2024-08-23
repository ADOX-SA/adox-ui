"use client";
import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";
import clsx from "clsx";
import useOutsideClick from "@/hooks/useOutsideClick";
import { css } from "@emotion/css";

export type DropdownProps = {
  dropdownContent: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  position: "top" | "right" | "bottom" | "left";
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Dropdown component
 * COSAS A TENER EN CUENTA:
 *  - El dropdown esta pensado para ser usado con un solo hijo
 *  - Deberia de ser este componente el que se ubique dependiendo del width de la pantalla o el mediaquery deberia hacer eso?
 * TODO:
 * - [ ] Add position prop
 * - [ ] Add animation
 *
 */

const Dropdown: React.FC<DropdownProps> = forwardRef<
  HTMLDivElement,
  DropdownProps
>(({ children, dropdownContent, open, setOpen }) => {
  const childRef = useRef<HTMLDivElement>(null);
  const mainDivRef = React.useRef<HTMLDivElement>(null);
  const dropdownContentRef = useRef<HTMLDivElement>(null);

  const ww = window.innerWidth;

  const adjustPosition = useCallback(() => {
    if (dropdownContentRef.current) {
      const {
        width: dw,
        height: dh,
        left: dl,
        top: dt,
        right: dr,
        bottom: db,
        x: dx,
        y: dy,
      } = dropdownContentRef.current.getBoundingClientRect();
      const isScreenCuttingTheDropdownContent = dx + dw > ww;
      const isDropdownContentBiggerThanWindow = dw > ww;
      const childBoundingRect = childRef.current?.getBoundingClientRect();
      if (childBoundingRect) {
        if (isScreenCuttingTheDropdownContent) {
          if (isDropdownContentBiggerThanWindow) {
            dropdownContentRef.current.style.left = `-${dx}px`;
            dropdownContentRef.current.style.width = `${ww}px`;
            dropdownContentRef.current.style.overflowX = "auto";
          } else {
            dropdownContentRef.current.style.left = `${
              (dx - (dx - (dw + dx - ww))) * -1
            }px`;
          }
        }
      }
    }
  }, [ww]);
  // stay the dropdownContent inside the window
  useEffect(() => {
    if (open) {
      adjustPosition();
    }
  }, [adjustPosition, open, ww]);

  useOutsideClick({
    ref: mainDivRef,
    handler: () => {
      setOpen(false);
    },
  });

  // Para la pantalla de escritorio desplegar desde la posicin del hijo hacia abajo
  // Para la pantalla de movil desplegar desde el borde inferior de la pantalla hacia arriba

  return (
    <div className={clsx(styles.dropdown)} ref={mainDivRef}>
      <div ref={childRef}>{children}</div>
      {open && <DropdownContentLG> {dropdownContent}</DropdownContentLG>}
    </div>
  );
});

const DropdownContentLG = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children }, ref) => {
  useEffect(() => {
    const dropdownContent = ref.current;
    if (dropdownContent) {
      dropdownContent.style.opacity = "1";
      dropdownContent.style.transform = "translateY(0)";
    }
  }, [ref]);
  return (
    <div ref={ref} className={clsx(styles.dropdownContent)}>
      {children}
    </div>
  );
});
export default Dropdown;
