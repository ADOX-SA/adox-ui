import type { Meta, StoryObj } from "@storybook/react";
import Box from "../components/layout/Box/Box";

const meta = {
  title: "Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof Box>;

export const Default = {
  args: {
    // props
  },
} satisfies Story;
