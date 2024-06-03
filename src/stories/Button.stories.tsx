import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/atoms/Button/Button";
import { Text } from "@/components/atoms/Text";
import React from "react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default = {
  args: {
    children: <Text> TEST </Text>,
    variant: "outline",
    colorScheme: "primary",
    size: "md",
  },
} satisfies Story;
