import { StyleSize } from "@/models/sizes";
import React, { ReactElement } from "react";

export type withBaseDivProps = {
  w: StyleSize;
};

const withBaseDiv = (WrappedComponent: ReactElement<T, withBaseDivProps>) => {
  return (props: withBaseDivProps) => <WrappedComponent {...props} />;
};

export default withBaseDiv;
