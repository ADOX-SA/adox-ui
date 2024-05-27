import { ToastProps } from "@/components/molecules/Toast/interfaces";

export interface ToastProviderProps {
  children: any;
  toastPosition: ToastPosition;
}

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface ToastListItem extends ToastProps {
  id: string;
  waitingForResolve?: boolean;
}

export interface ContextInterface {
  toastList: ToastListItem[];
  setToastList: (e: ToastListItem[]) => void;
}
