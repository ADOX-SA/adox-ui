import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";
import React from "react";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    controls: { expanded: true },
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: "10rem" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default = {
  args: {
    placeholder: "Drop down some options",
    size: "xs",
    dropdownOptions: [
      { label: "Option 1 its very cool", value: "1" },
      { label: "Option 2 its better", value: "2" },
      { label: "Option 3 its not that great", value: "3" },
      { label: "Option 4 its fine", value: "4" },
      { label: "Option 5 its kinda lame", value: "5" },
    ],
  },
} satisfies Story;
