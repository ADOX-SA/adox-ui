import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/atoms/Button/Button";

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
    // props
  },
} satisfies Story;
