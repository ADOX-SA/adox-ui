import type { Meta, StoryObj } from "@storybook/react";
import Drawer from "./Drawer";
import React from "react";

const meta = {
  title: "Layout/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default = {
  args: {
    children: "Drawer Content",
    isOpen: true
  },
  render: (args: any) => {
    return <Drawer {...args} />;
  },
} satisfies Story;
