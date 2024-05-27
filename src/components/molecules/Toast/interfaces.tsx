export interface ToastProps {
  message: string;
  status: ToastStatus;
  progress?: number;
}

export type ToastStatus = "success" | "danger" | "warning" | "info" | "pending";
