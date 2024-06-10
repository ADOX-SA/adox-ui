import type { Meta, StoryObj } from "@storybook/react";
import Listbox, { ListboxCategory, ListItem } from "./Listbox";
import React from "react";

const meta = {
  title: "Listbox",
  component: Listbox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  decorators: [
    () => (
      <div style={{ margin: "3em" }}>
        <Listbox>
          <ListboxCategory category="Category 1" divider={true}>
            <ListItem value="1">Item 1</ListItem>
            <ListItem value="2">Item 2</ListItem>
            <ListItem value="4">Item 4</ListItem>
            <ListItem value="3">Item 3</ListItem>
          </ListboxCategory>
          <ListItem value="5">Item 5</ListItem>
        </Listbox>
        <Listbox>
          <ListItem value="1">Item 1</ListItem>
          <ListItem value="2">Item 2</ListItem>
          <ListItem value="3">Item 3</ListItem>
        </Listbox>
      </div>
    ),
  ],
} satisfies Meta<typeof Listbox>;

export default meta;

type Story = StoryObj<typeof Listbox>;

export const Default = {
  args: {
    // props
  },
} satisfies Story;
