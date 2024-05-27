import React, { createContext, useEffect, useState } from "react";
import { Toast } from "@/components/molecules/Toast";
import {
  ContextInterface,
  ToastListItem,
  ToastProviderProps,
} from "./interfaces";
import classNames from "clsx";
import styles from "./toastContext.module.css";

export const ToastContext = createContext({} as ContextInterface);

export const ToastProvider = ({
  children,
  toastPosition,
}: ToastProviderProps) => {
  const [toastList, setToastList] = useState<ToastListItem[]>([]);

  const deleteToast = (id: string) => {
    const toastListItem = toastList.filter((e) => e.id !== id);
    setToastList(toastListItem);
  };

  return (
    <ToastContext.Provider value={{ toastList, setToastList }}>
      {children}
      <div className={classNames(styles.container, styles[toastPosition])}>
        {toastList.map((item) => (
          <ToastListComponent
            key={item.id}
            {...item}
            onProgressDone={() => deleteToast(item.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

interface ToastListComponentProps extends ToastListItem {
  onProgressDone: () => void;
}

const ToastListComponent = ({
  waitingForResolve = false,
  ...props
}: ToastListComponentProps) => {
  let hold = waitingForResolve;
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress > 0 && !hold) {
        setProgress(progress - 100 * (10 / 5000));
      }
      if (progress <= 0) {
        props.onProgressDone();
      }
    }, 10);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div
      className={classNames(styles.toastListItemContainer)}
      onClick={() => (!waitingForResolve ? props.onProgressDone() : {})}
      onMouseEnter={() => {
        if (!waitingForResolve) {
          hold = true;
        }
      }}
      onMouseLeave={() => {
        if (!waitingForResolve) {
          hold = false;
        }
      }}
    >
      <Toast {...props} progress={progress} />
    </div>
  );
};
