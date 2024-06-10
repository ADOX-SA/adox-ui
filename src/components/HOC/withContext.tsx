import React from "react";

type Props = {};

const withContext = (context, Component) => {
  return (props) => {
    return (
      <context.Provider value={{ data: props.data }}>
        <Component {...props} />
      </context.Provider>
    );
  };
};

export const withContextProvider = (ContextProvider, Component) => {
  return (props) => {
    return (
      <ContextProvider>
        <Component {...props} />
      </ContextProvider>
    );
  };
};

export default withContext;
