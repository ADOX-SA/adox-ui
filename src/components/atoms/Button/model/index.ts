import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "solid" | "outline" | "ghost" | "link" | "icon";
  size?:
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
  colorScheme?: "primary" | "secondary" | "success" | "warning" | "danger";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
  children: React.ReactNode;
};
