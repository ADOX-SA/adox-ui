import { Button } from "@/components";
import { Container } from "@/components/layout/Container";
import useToast from "@/hooks/useToast";
import type { StoryObj, Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "useToast",
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
  },
};

export const Default: StoryObj = {
  render: () => {
    const { showToast } = useToast();
    return (
      <Container display="flex" flexDirection="column">
        <Button
          size="md"
          onClick={() => showToast("This is a success toast", "success")}
        >
          Show success toast
        </Button>
        <Button onClick={() => showToast("This is an error toast", "error")}>
          Show error toast
        </Button>
        <Button onClick={() => showToast("This is a warning toast", "warning")}>
          Show warning toast
        </Button>
        <Button onClick={() => showToast("This is an info toast", "info")}>
          Show info toast
        </Button>
      </Container>
    );
  },

  argTypes: {},
};

export default meta;
