import { Size } from "@/models/sizes";
import { InputHTMLAttributes } from "react";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  size?: Size | "auto";
  width?: WidthParam | "full" | "wrap";
  alert?: boolean;
  customAlert?: string;
  label?: string;
  nativeSize?: InputHTMLAttributes<HTMLInputElement>["size"];
}

export type WidthParam = Size | InputHTMLAttributes<HTMLInputElement>["width"];

export type DropdownOptionsBeforeScroll = "5" | "10" | "15";

export interface DropdownOptions {
  label: string;
  value: string;
}
