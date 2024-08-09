import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";
import React from "react";

const meta = {
  title: "TextArea",
  component: TextArea,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
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
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default = {
  args: {
    size: "xl",
  },
} satisfies Story;
