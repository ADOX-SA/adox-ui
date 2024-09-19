import type { Meta, StoryObj } from "@storybook/react";
import MultiSelect from "./MultiSelect";

const meta = {
  title: "MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof MultiSelect>;

export default meta;

type Story = StoryObj<typeof MultiSelect>;

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
      "500000000000000",
    ],
    placeholder: "Select an option",
    width: "md",
    size: "sm",
    rounded: "md",
    variant: "underlined",
    disabled: true,
    noHideArrow: true,
  },
} satisfies Story;
