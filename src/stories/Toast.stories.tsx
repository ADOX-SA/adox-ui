import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "@/components/molecules/Toast";
import React from "react";
const meta = {
  title: "Layout/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  decorators: [(Story) => <Story message="success" status="success" />],
  args: {
    message: "Toast",
    status: "success",
    progress: 100,
  },
};
