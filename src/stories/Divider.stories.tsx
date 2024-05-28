import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "@/components/atoms/Divider";
import React from "react";

const meta = {
  title: "Divider",
  component: Divider,
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
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default = {
  args: {
    colorScheme: "primary",
    thickness: "sm",
  },
} satisfies Story;
