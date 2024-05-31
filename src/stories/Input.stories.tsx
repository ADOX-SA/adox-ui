import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/atoms/Input/Input";
import React from "react";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default = {
  args: {
    disabled: false,
    alert: true,
    customAlert: "This is a custom alert",
    label: "Label",
    placeholder: "Placeholder",
    type: "file",
  },
} satisfies Story;
