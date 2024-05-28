import { PolymorphicComponentPropsWithRef } from "@/utils/types";

export type BoxProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      className?: string;
      sx?: React.CSSProperties;
    }
  >;
export type BoxComponent = <C extends React.ElementType = "div">(
  props: BoxProps<C>
) => React.ReactNode | React.ReactElement<C> | null; // React.ReactNode no deberia de estar pero sino rompe.

export type FlexProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      className?: string;
      sx?: React.CSSProperties;
      flex?: number;
      flexDirection?:
        | "row"
        | "column"
        | "row-reverse"
        | "column-reverse"
        | "initial"
        | "inherit";
      justifyContent?:
        | "center"
        | "flex-start"
        | "flex-end"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "initial"
        | "inherit";
      alignItems?:
        | "center"
        | "flex-start"
        | "flex-end"
        | "stretch"
        | "baseline"
        | "initial"
        | "inherit";
      wrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
      gap?: string;
    }
  >;

export type FlexComponent = <C extends React.ElementType = "div">(
  props: FlexProps<C>
) => React.ReactNode | React.ReactElement<C> | null; // React.ReactNode no deberia de estar pero sino rompe.
