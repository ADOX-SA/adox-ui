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
  name?: string;
  required?: boolean;
  customAlert?: string;
  triggerCustomAlert?: boolean;
  label?: string;
  size?: Size | "auto";
  disabled?: boolean;
  canSearch?: boolean;
  nativeSize: InputHTMLAttributes<HTMLInputElement>["size"];
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  dropdownOptions: DropdownOptions[];
  width: WidthParam | "full" | "wrap";
  // info?: string;
  defaultValue?: string;
  maxOptionsBeforeScroll?: DropdownOptionsBeforeScroll;
  wrap?: boolean;
}

export type ADSInputLengthSizes = "small" | "medium" | "large" | "max";
