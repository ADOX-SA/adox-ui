import { PolymorphicComponentPropsWithRef } from "@/utils/types";

export type ContainerPlatforms = "any" | "desktop" | "mobile";
export type ContainerDisplayTypes =
  | "none"
  | "flex"
  | "inline-flex"
  | "block"
  | "inline-block";
export type ContainerPaddings = "none" | "px" | "xs" | "sm" | "md" | "lg";
export type ContainerFlexDirectionTypes =
  | "column"
  | "row"
  | "column-reverse"
  | "row-reverse";
export type ContainerAlignItemsTypes =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch";
export type ContainerJustifyContentTypes =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around";

export type DesignSizes =
  | "extra-small"
  | "small"
  | "medium"
  | "large"
  | "extra-large"
  | "huge";

export type ContainerProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      centerContent?: boolean;
      page?: boolean;
      className?: string;
      isVisible?: boolean;
      padding?: "none" | DesignSizes | number;
      display?: ContainerDisplayTypes;
      flexDirection?: ContainerFlexDirectionTypes;
      alignItems?: ContainerAlignItemsTypes;
      justifyContent?: ContainerJustifyContentTypes;
      customClassNames?: string;
      contentContainer?: boolean;
      fluid?: boolean;
      wrap?: boolean;
      fullWidth?: boolean;
      gap?: "none" | DesignSizes | number;
      platform?: ContainerPlatforms;
    }
  >;
