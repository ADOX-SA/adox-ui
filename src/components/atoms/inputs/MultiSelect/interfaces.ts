import { Size } from "@/models/sizes";
import { ChangeEventHandler, InputHTMLAttributes } from "react";
import { WidthParam } from "../Input/interfaces";
import { DropdownOptionsBeforeScroll } from "../Select/interfaces";

export interface MultiSelectProps
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
  noHideArrow?: boolean;
  defaultValue?: string;
  maxOptionsBeforeScroll?: DropdownOptionsBeforeScroll;
}

export interface DropdownOptions {
  label: string;
  value: string;
}
