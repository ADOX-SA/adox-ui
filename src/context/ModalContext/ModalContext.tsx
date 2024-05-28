import React, { createContext } from "react";
import ModalContainer from "./ModalContainer";

type Props = {
  children: React.ReactNode;
};

const ModalContext = createContext<{
  modals: React.ReactNode[];
  setModals: React.Dispatch<React.SetStateAction<React.ReactNode[]>>;
}>({ modals: [], setModals: () => {} });

export const ModalProvider = (props: Props) => {
  const [modals, setModals] = React.useState<React.ReactNode[]>([]);
  return (
    <ModalContext.Provider
      value={{
        modals,
        setModals,
      }}
    >
      {props.children}
      <ModalContainer />
    </ModalContext.Provider>
  );
};

export default ModalContext;
