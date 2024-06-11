"use client";
import React, { ComponentProps, ReactElement } from "react";
import styles from "./Listbox.module.css";
import ListboxContext, { ListboxProvider } from "./ListboxContext";
import { withContextProvider } from "@/components/HOC/withContext";
import { Divider } from "../Divider";
import { Checkbox } from "../Checkbox";
import { css } from "@emotion/css";
import { StandardSize } from "@/types/sizes";

export type ListboxProps = {
  children: ReactElement<ListItemProps>[];
};

const Listbox: React.FC<ListboxProps> = ({ children }) => {
  const { selecteds } = React.useContext(ListboxContext);
  return (
    <div className={styles.listbox}>
      <p>Selected: {selecteds.length > 0 ? selecteds.join(", ") : "None"}</p>
      <ul className={styles.listbox__ul}>{children}</ul>
    </div>
  );
};

export interface ListboxCategoryProps extends ComponentProps<"div"> {
  category: string;
  divider: boolean;
  children: ReactElement<ListItemProps>[];
  size: StandardSize;
}

export const ListboxCategory: React.FC<ListboxCategoryProps> = ({
  category,
  divider,
  children,
  size = "sm",
  ...props
}) => {
  const { selecteds, setSelecteds } = React.useContext(ListboxContext);
  const selectAll = () => {
    const isAllSelected = children.every((child) =>
      selecteds.includes(child.props.value)
    );
    const isSomeSelected = selecteds.some((v) =>
      children.map((child) => child.props.value).includes(v)
    );

    if (isAllSelected) {
      console.log("todos seleccionados");
      console.log(
        selecteds.filter(
          (v) => !children.map((child) => child.props.value).includes(v)
        )
      );
      setSelecteds(
        selecteds.filter(
          (v) => !children.map((child) => child.props.value).includes(v)
        )
      );
    } else if (!isAllSelected && isSomeSelected) {
      console.log("algunos seleccionados");
      console.log([
        ...selecteds,
        ...children.map((child) => child.props.value),
      ]);
      setSelecteds([
        ...selecteds,
        ...children.map((child) => child.props.value),
      ]);
    } else {
      console.log("vacio checkbox");
      console.log([
        ...selecteds,
        ...children.map((child) => child.props.value),
      ]);
      setSelecteds([
        ...selecteds,
        ...children.map((child) => child.props.value),
      ]);
    }
  };
  return (
    <div {...props}>
      <div
        className={css`
          display: flex;
        `}
        onClick={() => {
          console.log("selecteds desde div", selecteds);
          selectAll();
        }}
      >
        <Checkbox
          label="category"
          // checked={children.every((child) =>
          //   selecteds.includes(child.props.value)
          // )}
          // indeterminated={
          //   selecteds.some((v) =>
          //     children.map((child) => child.props.value).includes(v)
          //   ) &&
          //   !children.every((child) => selecteds.includes(child.props.value))
          // }
          onClick={() => {
            console.log("selecteds desde checkbox", selecteds);
            selectAll();
          }}
        />{" "}
        {/* <Text size="sm">{category}</Text> */}
      </div>
      <ul>{children}</ul>
      {divider && <Divider />}
    </div>
  );
};

export interface ListItemProps extends ComponentProps<"li"> {}

export const ListItem: React.FC<ListItemProps> = ({ children, ...props }) => {
  const { setSelectedItems, selecteds } = React.useContext(ListboxContext);
  const selected = selecteds.includes(
    props.value as string | number | readonly string[] | undefined
  );

  return (
    <li
      className={styles.listItem}
      onClick={() =>
        setSelectedItems(
          props.value as string | number | readonly string[] | undefined
        )
      }
      {...props}
    >
      <Checkbox
        className={css`
          pointer-events: none;
        `}
        checked={selected}
      />
      {children}
    </li>
  );
};

const NamedListbox = withContextProvider(ListboxProvider, Listbox);
export default NamedListbox;
