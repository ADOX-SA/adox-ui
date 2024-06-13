import { StandardSize } from "@/types/sizes";
import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface DropdownProps
  extends Omit<InputHTMLAttributes<HTMLSelectElement>, "size"> {
  filter?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  dropdownOptions: DropdownOptions[];
  // info?: string;
  size?: StandardSize | "max" | "wrap";
  defaultValue?: string;
  name?: string;
  label?: string;
  maxOptionsBeforeScroll?: DropdownOptionsBeforeScroll;
  disabled?: boolean;
  height?: StandardSize | InputHTMLAttributes<HTMLSelectElement>["height"];
  width?:
    | StandardSize
    | "wrap"
    | "max"
    | InputHTMLAttributes<HTMLSelectElement>["width"];
}

export type DropdownOptionsBeforeScroll = "5" | "10" | "15";

export interface DropdownOptions {
  label: string;
  value: string;
}
