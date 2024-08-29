import { Size } from "@/models/sizes";
import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { WidthParam } from "../Input/interfaces";

export type DropdownOptionsBeforeScroll = "5" | "10" | "15";

export interface DropdownOptions {
  label: string;
  value: string;
}

export interface DropdownProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, "size"> {
  //
  variant?: "outlined" | "filled" | "underlined" | "unstyled";
  rounded?: "none" | "sm" | "md" | "lg" | "xl";
  alert?: boolean;
  //
  customAlert?: string;
  triggerCustomAlert?: boolean;
  label?: string;
  size?: Size | "auto";
  canSearch?: boolean;
  nativeSize?: InputHTMLAttributes<HTMLInputElement>["size"];
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  dropdownOptions: DropdownOptions[] | string[] | number[];
  width?: WidthParam | "full" | "wrap";
  // info?: string;
  defaultValue?: string;
  maxOptionsBeforeScroll?: DropdownOptionsBeforeScroll;
}

export type ADSInputLengthSizes = "small" | "medium" | "large" | "max";
