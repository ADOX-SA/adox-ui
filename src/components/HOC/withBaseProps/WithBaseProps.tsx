import { css } from "@emotion/css";
import clsx from "clsx";
import React from "react";
import { WithBaseProps } from "./interface";
import styles from "./Box.module.css";

// Type for props with optional margin and className

// Improved HOC with generic type inference
function withBaseProps<P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<WithBaseProps<P>> {
  const WithBasePropsComponent: React.FC<WithBaseProps<P>> = (
    props: WithBaseProps<P>
  ) => {
    const { m, ml, mr, mt, mb } = props;
    const { p, pl, pr, pt, pb } = props;
    const { className } = props;

    return (
      <WrappedComponent
        className={clsx(
          styles.box,
          css`
            margin: ${m};
            margin-left: ${ml};
            margin-right: ${mr};
            margin-top: ${mt};
            margin-bottom: ${mb};
            padding: ${p};
            padding-left: ${pl};
            padding-right: ${pr};
            padding-top: ${pt};
            padding-bottom: ${pb};
          `,
          className
        )}
        {...(props as P)}
      />
    );
  };

  return WithBasePropsComponent;
}

export default withBaseProps;
