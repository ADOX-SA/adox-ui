import type { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta = {
  title: "Molecules/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default = {
  args: {
    currentPage: 1,
    totalPages: 100,
    neighbourNumbers: 3,
    onPageChange: () => {},
  },
} satisfies Story;
