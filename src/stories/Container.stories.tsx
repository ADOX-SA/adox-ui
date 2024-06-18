import type { Meta, StoryObj } from "@storybook/react";
import Container from "../components/layout/Container/Container";

const meta = {
  title: "Container",
  component: Container,
  tags: ["autodocs", "layout"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof Container>;

export const Default = {
  args: {
    children: "Hello World",
    centerContent: true,
  },
} satisfies Story;
