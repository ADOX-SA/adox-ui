export interface ToastProps {
  message: string;
  status: ToastStatus;
  progress?: number;
}

export type ToastStatus = "success" | "error" | "warning" | "info" | "pending";
