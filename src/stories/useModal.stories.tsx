import type { Meta, StoryObj } from "@storybook/react";
import Paper from "../components/layout/Paper/Paper";
import React from "react";
import useModal from "@/hooks/useModal";
import { Button } from "@/components";

const meta: Meta<typeof Paper> = {
  component: Paper,
};

export default meta;

type Story = StoryObj<typeof Paper>;

export const Default: Story = () => {
  const { openModal, closeModal } = useModal();

  return (
    <Button
      onClick={() =>
        openModal(
          <Paper elevation={3} variant="elevation">
            <div>
              <h1>Modal</h1>
              <button onClick={closeModal}>Close Modal</button>
            </div>
          </Paper>
        )
      }
    >
      Open Modal
    </Button>
  );
};
