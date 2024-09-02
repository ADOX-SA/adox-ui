import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
import React from "react";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default = {
  decorators: [
    (Story: React.ComponentType) => (
      <div style={{ display: "flex", gap: "1rem", padding: "2em" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    // props
  },
} satisfies Story;
