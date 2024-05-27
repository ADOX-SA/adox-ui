import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../components/atoms/Checkbox/Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default = {
  args: {
    checked: true,
  },
} satisfies Story;
