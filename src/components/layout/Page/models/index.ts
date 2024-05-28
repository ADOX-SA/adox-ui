import { PolymorphicComponentPropsWithRef } from "@/utils/types";

export type PaperProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      elevation?: 0 | 1 | 2 | 3 | 4 | 5;
      variant?: "elevation" | "outlined";
      square?: boolean;
    }
  >;
