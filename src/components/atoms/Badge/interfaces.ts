import { ColorScheme } from "@/models/Colors";
import { IconName } from "../Icon/interface";
import { BaseVariants } from "@/models/Variants";
import { Size } from "@/models/sizes";

export interface BadgeProps {
  variant: BaseVariants;
  size?: Size;
  label: string;
  icon?: IconName;
  color?: ColorScheme;
  clickeable?: boolean;
  onClick?: () => void;
}
