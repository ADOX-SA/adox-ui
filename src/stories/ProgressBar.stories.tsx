import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "../components/atoms/ProgressBar/ProgressBar";

const meta = {
  title: "Atoms/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    value: {
      control: {
        type: "range",
        min: 0,
        max: 100,
        step: 1,
      },
    },
    color: {
      control: "color",
    },
    size: {
      control: {
        type: "select",
        options: ["xs", "sm", "md", "lg"],
      },
    },
    rounded: {
      control: {
        type: "select",
        options: ["none", "xs", "sm", "md", "lg", "xl"],
      },
    },
    dot: {
      control: {
        type: "select",
        options: ["FaCircle", "FaCheck", "FaTimes"],
      },
    },
  },
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
