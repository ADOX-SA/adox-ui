import React from "react";
import { IconType } from "react-icons/lib";
import * as ReactIcons from "./bundle";
import { iconsMap } from "./custom";
import { Lib } from "./models";
import { TypesPropsIcon } from "./interface";
import clsx from "clsx";
import { css } from "@emotion/css";

export function Icon({
  nameIcon,
  // propsIcon,
  color,
  size,
  width,
  height,
  className,
  ...rest
}: TypesPropsIcon): JSX.Element {
  /**
   * @param {string} nameIcon - Nombre del icono.
   */

  const propsIcon = {
    color,
    size,
    width: width || size || 24,
    height: height || size || 24,
    ...rest,
  };

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

  return (
    <ElementIcon
      className={clsx(
        className,
        css`
          width: ${propsIcon?.width || propsIcon.width || 24};
          height: ${propsIcon?.height || 24};
        `
      )}
      {...propsIcon}
    />
  );
}

export default Icon;
