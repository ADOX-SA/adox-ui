import React from "react";
import { IconBaseProps, IconType } from "react-icons/lib";
import * as ReactIcons from "./bundle";
import { IconNameBundle } from "./bundle";
import { iconsMap } from "./custom";
import { Lib } from "./models";

interface typesPropsIcon {
  nameIcon: `adox-${keyof typeof iconsMap}` | IconNameBundle;
  propsIcon?: IconBaseProps;
  className?: string;
}

export function Icon({
  nameIcon,
  propsIcon,
  className,
}: typesPropsIcon): JSX.Element {
  /**
   * @param {string} nameIcon - Nombre del icono.
   */

  if (nameIcon.startsWith("adox-")) {
    const mnameIcon = nameIcon.replace("adox-", "");
    const iconObj = iconsMap[mnameIcon as keyof typeof iconsMap]; // Add index signature

    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox={iconObj.viewBox}
        children={iconObj.svg}
        width={propsIcon?.size || 24}
        height={propsIcon?.size || 24}
        className={className}
        {...propsIcon}
      />
    );
  }

  const rIlib: Lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLocaleLowerCase() as Lib;

  const ElementIcon: IconType = (
    ReactIcons[rIlib] as { [key: string]: IconType }
  )[nameIcon];

  return <ElementIcon {...propsIcon} />;
}

export default Icon;
