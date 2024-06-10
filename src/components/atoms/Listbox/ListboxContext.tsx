import React from "react";
import { createContext } from "react";

export const ListboxContext = createContext<{
  selecteds: unknown[];
  setSelecteds: React.Dispatch<React.SetStateAction<unknown[]>>;
  setSelectedItems: (value: unknown) => void;
  isSelectedItem: (value: unknown) => boolean;
  addItem: (value: unknown) => void;
  removeItem: (value: unknown) => void;
}>({
  selecteds: [],
  setSelecteds: () => {},
  setSelectedItems: () => {},
  isSelectedItem: () => false,
  addItem: () => {},
  removeItem: () => {},
});

export const ListboxProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [selecteds, setSelecteds] = React.useState<unknown[]>([]);
  const setSelectedItems = (value: unknown) => {
    if (selecteds.includes(value)) {
      setSelecteds(selecteds.filter((v) => v !== value));
    } else {
      setSelecteds([...selecteds, value]);
    }
  };

  const addItem = (value: unknown) => {
    if (!selecteds.includes(value)) {
      setSelecteds([...selecteds, value]);
    }
  };

  const removeItem = (value: unknown) => {
    setSelecteds(selecteds.filter((v) => v !== value));
    console.log("removeItem:", value, selecteds);
  };

  const isSelectedItem = (value: unknown) => selecteds.includes(value);
  return (
    <ListboxContext.Provider
      value={{
        selecteds,
        setSelecteds,
        setSelectedItems,
        isSelectedItem,
        addItem,
        removeItem,
      }}
    >
      {children}
    </ListboxContext.Provider>
  );
};

export default ListboxContext;
