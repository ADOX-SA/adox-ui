import type { Meta, StoryObj } from "@storybook/react";
import ProgressCircle from "../components/atoms/ProgressCircle/ProgressCircle";

const meta = {
  title: "Atoms/ProgressCircle",
  component: ProgressCircle,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof ProgressCircle>;

export default meta;

type Story = StoryObj<typeof ProgressCircle>;

export const Default = {
  args: {
    value: 25,
    size: "sm",
    color: "var(--color-primary-500)",
    label:
      "Esta es una prueba para ver que onda con el label y en caso de que asi lo sea que salga bien saldra bien",
  },
} satisfies Story;
