import type { Meta, StoryObj } from "@storybook/react";
import TablePagination from "./TablePagination";

const meta = {
  title: "Molecules/TablePagination",
  component: TablePagination,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof TablePagination>;

export default meta;

type Story = StoryObj<typeof TablePagination>;

export const Default = {
  args: {
    currentPage: 1,
    totalItems: 100,
    limit: 5,
    size: "xs",
  },
} satisfies Story;
