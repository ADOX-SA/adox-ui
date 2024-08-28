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
      "1",
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
    ],
    placeholder: "Select an option",
    width: "lg",
    size: "xl",
    rounded: "md",
    variant: "underlined",
    disabled: true,
  },
} satisfies Story;
