import { Size, size } from "@/models/sizes";
import { css } from "@emotion/css";
import { WidthParam } from "./interfaces";

export const dropdown_width = (width: WidthParam) => {
  if (
    (typeof width !== "undefined" && size.includes(width as Size)) ||
    width === "full" ||
    width === "wrap"
  ) {
    return css`
      width: var(--sys-input-width-${String(width)});
    `;
  }
  return css`
    width: ${String(width)};
  `;
};
