import { css } from "@emotion/css";
import clsx from "clsx";
import React from "react";
import { WithBaseProps } from "./interface";

// Type for props with optional margin and className

// Improved HOC with generic type inference
function withBaseProps<
  P extends {
    className?: string;
  }
>(WrappedComponent: React.ComponentType<P>): React.FC<WithBaseProps<P>> {
  const WithBasePropsComponent: React.FC<WithBaseProps<P>> = (
    props: WithBaseProps<P>
  ) => {
    const { m, ml, mr, mt, mb } = props;
    const { p, pl, pr, pt, pb } = props;
    const { className } = props;
    // Quiero que el className que se usa aqui, sea el que se le pasa al WrappedComponent
    const marginStyles = css({
      margin: m,
      marginLeft: ml,
      marginRight: mr,
      marginTop: mt,
      marginBottom: mb,
      padding: p,
      paddingLeft: pl,
      paddingRight: pr,
      paddingTop: pt,
      paddingBottom: pb,
    });

    return (
      <WrappedComponent
        {...(props as P)}
        className={clsx(className, marginStyles)}
      />
    );
  };

  return WithBasePropsComponent;
}

export default withBaseProps;
