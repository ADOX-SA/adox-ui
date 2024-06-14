import { Size } from "@/models/sizes";
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
  size?: Size | "full" | "wrap";
  defaultValue?: string;
  name?: string;
  label?: string;
  maxOptionsBeforeScroll?: DropdownOptionsBeforeScroll;
  disabled?: boolean;
  width?: WidthParam | "full" | "wrap";
}

export type WidthParam = Size | InputHTMLAttributes<HTMLInputElement>["width"];

export type DropdownOptionsBeforeScroll = "5" | "10" | "15";

export interface DropdownOptions {
  label: string;
  value: string;
}
