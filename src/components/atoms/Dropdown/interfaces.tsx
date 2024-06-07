import { ChangeEventHandler, InputHTMLAttributes } from "react";

export interface DropdownProps extends InputHTMLAttributes<HTMLSelectElement> {
  canSearch?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
  dropdownOptions: DropdownOptions[];
  // info?: string;
  sizeLength?: DropdownSizes;
  defaultValue?: string;
  name?: string;
  label?: string;
  maxOptionsBeforeScroll?: DropdownOptionsBeforeScroll;
  disabled?: boolean;
}

export type DropdownOptionsBeforeScroll = "5" | "10" | "15";

export interface DropdownOptions {
  label: string;
  value: string;
}

export type DropdownSizes = "wrap" | "small" | "medium" | "large" | "max";
