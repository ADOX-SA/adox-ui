import { CSSProperties } from "react";

type MarginProps = {
  m?: CSSProperties["margin"];
  ml?: CSSProperties["marginLeft"];
  mr?: CSSProperties["marginRight"];
  mt?: CSSProperties["marginTop"];
  mb?: CSSProperties["marginBottom"];
};

type PaddingProps = {
  p?: CSSProperties["padding"];
  pl?: CSSProperties["paddingLeft"];
  pr?: CSSProperties["paddingRight"];
  pt?: CSSProperties["paddingTop"];
  pb?: CSSProperties["paddingBottom"];
};

export type WithBaseProps<P> = {
  className?: string;
} & MarginProps &
  PaddingProps &
  P;
