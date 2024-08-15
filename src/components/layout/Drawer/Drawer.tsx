"use client";
import React from "react";
import styles from "./Drawer.module.css";
import clsx from "clsx";
import { css } from "@emotion/css";
import { Size } from "@/models/sizes";
import { Icon } from "@/components/atoms";

export type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  closeIcon?: boolean;
  colorScheme?: string;
  id?: string;
  isFullHeight?: boolean;
  size?: Size | "full";
  children?: React.ReactNode;
};

/**
 *
 * El componente Drawer es un contenedor que se despliega desde un lado de la pantalla.
 * Puede ser utilizado desde cualquier parte de la aplicación.
 * Este tomara el tamaño de la pantalla y se desplegara desde el lado izquierdo.
 *
 * @param isOpen - Indica si el Drawer esta abierto o cerrado.
 * @param onClose - Función que se ejecutara al cerrar el Drawer.
 * @param closeOnOverlayClick - Indica si el Drawer se cierra al hacer click en el overlay.
 * @param closeIcon - Indica si se muestra el icono de cerrar.
 * @param colorScheme - Indica el color del Drawer.
 * @param id - Id del Drawer.
 * @param isFullHeight - Indica si el Drawer ocupa toda la altura de la pantalla.
 * @param size - Indica el tamaño del Drawer.
 * @param children - Contenido del Drawer.
 *
 * Los tamaños disponibles son:
 * - xs: 320px / 20rem
 * - sm: 384px / 24rem
 * - md: 448px / 28rem
 * - lg: 512px / 32rem
 * - xl: 576px / 36rem
 * - full: 100%
 *
 * TODO:
 *
 * - [ ] falta implementar el colorScheme
 * - [ ] falta implementar el closeOnOverlayClick
 * - [x] falta implementar el id
 */

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  isFullHeight = true,
  children,
  size,
  closeIcon,
  id,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={clsx(styles.drawer)} id={id}>
      <div
        className={clsx(
          styles.drawerContent,
          css`
            --sys-drawer-width: var(--sys-drawer-${size});
          `,
          {
            [styles.drawerContentOpen]: isOpen,
            [styles.isFullHeight]: isFullHeight,
          }
        )}
      >
        {closeIcon && onClose && <CloseIcon onClick={onClose} />}
        {children}
      </div>
      <div
        className={clsx(styles.overlay, {
          [styles.overlayOpen]: isOpen,
        })}
        onClick={onClose}
      />
    </div>
  );
};

const CloseIcon: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem;
      `}
    >
      <Icon
        nameIcon="adox-menuClose"
        size="0.5em"
        className={css`
          cursor: pointer;
          transition: transform 0.3s;
          color: var(--sys-color-base);
          &:hover {
            transform: scale(1.1);
          }
        `}
        onClick={onClick}
      />
    </div>
  );
};

export default Drawer;
