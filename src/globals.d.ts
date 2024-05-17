import { PureComponent, SVGProps } from "react";

declare module "*.svg" {
  export class ReactComponent extends PureComponent<SVGProps<SVGSVGElement>> {}
}
