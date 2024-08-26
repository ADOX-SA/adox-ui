import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default = {
  args: {
    dropdownOptions: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
    placeholder: "Select an option",
    width: "lg",
    size: "lg",
    rounded: "md",
    variant: "underlined",
  },
} satisfies Story;
