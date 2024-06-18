import { ThemeColors } from "@/models/Colors";
import { PolymorphicComponentPropsWithRef } from "@/utils/types";

export type TextProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      align?: "left" | "center" | "right";
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
        | "4xl"
        | "5xl"
        | "6xl";
      emphasis?: "high" | "medium" | "low";
      italic?: true | false;
      underline?: true | false;
      weight?: CustomWeigths | HTMLParagraphElement["style"]["fontWeight"];
      colorScheme?: ThemeColors;
    }
  >;

export const customWeigths = [
  "thin",
  "light",
  "regular",
  "medium",
  "bold",
  "bolder",
] as CustomWeigths[]; // Esto es para que se pueda usar en el componente Text y no tener que importar el array de customWeigth

export type CustomWeigths =
  | "thin"
  | "light"
  | "regular"
  | "medium"
  | "bold"
  | "bolder";
export type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactNode | React.ReactElement<C> | null; // React.ReactNode no deberia de estar pero sino rompe.
