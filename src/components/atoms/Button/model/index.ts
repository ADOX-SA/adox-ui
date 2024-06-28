import { Size } from "@/models/sizes";
import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  width?: ButtonSizes;
  colorScheme?: ButtonColorSchemes;
  rounded?: ButtonRounded;
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

export type ButtonVariants = "solid" | "outline" | "ghost" | "link" | "icon";
export type ButtonSizes = Size | "2xs" | "2xl" | "full" | "auto";
export type ButtonColorSchemes =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";
