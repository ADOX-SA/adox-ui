import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "../components/atoms/Skeleton/Skeleton";

const meta = {
  title: "Layout/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default = {
  args: {
    animation: "wave",
    height: "10em",
    width: "10em",
    rounded: "full",
  },
} satisfies Story;
