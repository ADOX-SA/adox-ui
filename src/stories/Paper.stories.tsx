import type { Meta, StoryObj } from "@storybook/react";
import Paper from "@/components/layout/Paper/Paper";
import React from "react";

const meta = {
  title: "Paper",
  component: Paper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Paper>;

export default meta;

type Story = StoryObj<typeof Paper>;

export const Default = {
  args: {
    elevation: 0,
    square: false,
    variant: "outlined",
  },
} satisfies Story;
