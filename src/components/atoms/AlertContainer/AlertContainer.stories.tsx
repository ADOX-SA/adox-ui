import type { Meta, StoryObj } from "@storybook/react";
import AlertContainer from "./AlertContainer";

const meta = {
  title: "AuxComponents/AlertContainer",
  component: AlertContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof AlertContainer>;

export default meta;

type Story = StoryObj<typeof AlertContainer>;

export const Default = {
  args: {
    // props
  },
} satisfies Story;
