"use client";
import React, { ComponentProps, ReactElement } from "react";
import styles from "./Listbox.module.css";
import ListboxContext, { ListboxProvider } from "./ListboxContext";
import { withContextProvider } from "@/components/HOC/withContext";
import { Divider } from "../Divider";

export type ListboxProps = {
  children: ReactElement<ListItemProps>[];
};

const Listbox: React.FC<ListboxProps> = ({ children }) => {
  const { selecteds } = React.useContext(ListboxContext);
  return (
    <div className={styles.listbox}>
      <h2>Listbox</h2>
      <p>Selected: {selecteds.length > 0 ? selecteds.join(", ") : "None"}</p>
      <ul>{children}</ul>
    </div>
  );
};

export interface ListItemProps extends ComponentProps<"li"> {
  selected?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  selected,
  children,
  ...props
}) => {
  const { setSelectedItems } = React.useContext(ListboxContext);

  return (
    <li
      className={styles.listItem}
      style={{
        backgroundColor: selected ? "var(--color-primary-100)" : "transparent",
      }}
      onClick={() =>
        setSelectedItems(
          props.value as string | number | readonly string[] | undefined
        )
      }
      {...props}
    >
      {children}
    </li>
  );
};

export interface ListboxCategoryProps extends ComponentProps<"div"> {
  category: string | ReactElement;
  divider: boolean;
  children: ReactElement<ListItemProps>[];
}

export const ListboxCategory: React.FC<ListboxCategoryProps> = ({
  category,
  divider,
  children,
  ...props
}) => {
  const { selecteds, setSelecteds } = React.useContext(ListboxContext);
  const selectAll = () => {
    const isAllSelected = children.every((child) =>
      selecteds.includes(child.props.value)
    );
    if (isAllSelected) {
      // now it's removing one at the time, but it should remove all at once
      setSelecteds(
        selecteds.filter(
          (v) => !children.map((child) => child.props.value).includes(v)
        )
      );
    } else {
      const newSelecteds = selecteds.filter(
        (v) => !children.map((child) => child.props.value).includes(v)
      );

      setSelecteds([
        ...newSelecteds,
        ...children.map((child) => child.props.value),
      ]);
    }
  };

  return (
    <div {...props}>
      <h3 onClick={() => selectAll()}>{category}</h3>
      <ul>{children}</ul>
      {divider && <Divider />}
    </div>
  );
};

const NamedListbox = withContextProvider(ListboxProvider, Listbox);
export default NamedListbox;
