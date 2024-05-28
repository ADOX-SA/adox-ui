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
      weight?: "thin" | "light" | "regular" | "medium" | "bold" | "bolder";
    }
  >;

export type TextComponent = <C extends React.ElementType = "span">(
  props: TextProps<C>
) => React.ReactNode | React.ReactElement<C> | null; // React.ReactNode no deberia de estar pero sino rompe.
