import type { Meta, StoryObj } from "@storybook/react";
import Box from "../components/layout/Box/Box";
import styles from "../components/layout/Box/Box.module.css";
import React from "react";

const meta = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Box>;

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Box m="10em" className={styles["flex--gap-56"]}>
      Box
    </Box>
  ),
};
