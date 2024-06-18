import { IconBaseProps } from "react-icons";
import { IconNameBundle } from "./bundle";
import { iconsMap } from "./custom";

export type IconName = `adox-${keyof typeof iconsMap}` | IconNameBundle;
export type Lib =
  | "ai"
  | "bs"
  | "bi"
  | "ci"
  | "cg"
  | "di"
  | "fa"
  | "fa6"
  | "fc"
  | "fi"
  | "gi"
  | "go"
  | "gr"
  | "hi"
  | "im"
  | "io"
  | "md"
  | "ri"
  | "si"
  | "ti"
  | "vsc"
  | "wi";

export interface TypesPropsIcon {
  nameIcon: IconName;
  propsIcon?: IconBaseProps;
  className?: string;
}
