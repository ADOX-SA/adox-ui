export type ColorScheme =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark";

export type Color = {
  [key in ColorScheme]: string;
};

export type ThemeColors =
  | "white"
  | "black"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "gray"
  | "purple"
  | "cyan"
  | ColorScheme;
