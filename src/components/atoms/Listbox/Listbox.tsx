"use client";
import React from "react";
import styles from "./Listbox.module.css";

export type ListboxProps = {
  // types...
};

const Listbox: React.FC<ListboxProps> = ({}) => {
  return (
    <div className={styles.listbox}>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>
    </div>
  );
};

export default Listbox;
