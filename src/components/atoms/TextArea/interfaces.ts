import { Size } from "@/models/sizes";
import { WidthParam } from "../Dropdown/interfaces";

export type TextAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: "outlined" | "filled" | "underlined" | "unstyled";
    rounded?: "none" | "sm" | "md" | "lg" | "xl";
    size?: Size | "auto";
    width?: WidthParam | "full" | "wrap";
    alert?: boolean;
    customAlert?: string;
    label?: string;
  };
