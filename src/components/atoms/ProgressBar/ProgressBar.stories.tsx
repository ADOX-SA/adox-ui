import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta = {
  title: "ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default = {
  args: {
    // dot: "FaCircle",
    value: 50,
    showPercentage: true,
  },
} satisfies Story;
