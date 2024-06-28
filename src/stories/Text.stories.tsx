import type { Meta, StoryObj } from "@storybook/react";
import Text from "@/components/atoms/Text/Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default = {
  args: {
    children: "Text",
    underline: false,
    italic: false,
    as: "h1",
    weight: "thin",
    size: "6xl",
    colorScheme: "warning",
  },
} satisfies Story;
