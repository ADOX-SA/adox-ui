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
      { label: "Option 100", value: "100" },
      { label: "Option 2000000", value: "2000000" },
      { label: "Option 30000000000000", value: "30000000000000" },
    ],
    placeholder: "Select an option",
    width: "lg",
    size: "xl",
    rounded: "md",
    variant: "underlined",
  },
} satisfies Story;
