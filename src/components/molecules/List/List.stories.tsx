import type { Meta, StoryObj } from "@storybook/react";
import List from "./List";
import React from "react";
import { ListSortState } from "./interfaces";
import { css } from "@emotion/css";

const meta = {
  title: "List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof List>;

export const Default = {
  render: (args) => {
    const [sort, setSort] = React.useState<ListSortState | undefined>(
      undefined
    );
    return (
      <div
        className={css`
          width: 100vw;
          height: 20vh;
        `}
      >
        <List
          headers={args.headers}
          rows={args.rows}
          sortState={sort}
          onSort={(v) => {
            console.log(v);
            setSort(v);
          }}
          size={args.size}
        />
      </div>
    );
  },
  args: {
    headers: [
      {
        label: "Nombre",
        align: "left",
        sortOption: true,
        columnAlign: "left",
        value: "Name",
      },
      {
        label: "Edad",
        align: "center",
        sortOption: true,
        columnAlign: "center",
        value: "Age",
      },
      {
        label: "Nacionalidad",
        align: "right",
        sortOption: true,
        columnAlign: "right",
        value: "Country",
      },
    ],
    rows: [
      {
        Age: 25,
        Country: "USA",
        Name: "John Doe",
        orocruch: "aosdasod",
        onClick: () => console.log("click"),
      },
      { Name: "Jane Doe", Age: 22, Country: "UK", orocruch: "aosdasod" },
      { Name: "James Doe", Age: 32, Country: "CAN", orocruch: "aosdasod" },
    ],
  },
} satisfies Story;
