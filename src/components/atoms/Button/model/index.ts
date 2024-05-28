import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  colorScheme?: ButtonColorSchemes;
  rounded?: ButtonRounded;
  className?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
};

export type ButtonVariants = "solid" | "outline" | "ghost" | "link" | "icon";
export type ButtonSizes =
  | "3xs"
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";
export type ButtonColorSchemes =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type ButtonRounded = "none" | "sm" | "md" | "lg" | "full";
