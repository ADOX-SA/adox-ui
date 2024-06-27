import useModal from "@/hooks/useModal";
import type { StoryObj, Meta } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "useModal",
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: { expanded: true },
  },
};

export const Default: StoryObj = {
  render: () => {
    const { openModal } = useModal();
    return (
      <button
        onClick={() =>
          openModal(
            <div>
              <h1>Modal</h1>
              <p>Modal content</p>
              <button
                onClick={() => {
                  openModal(<div>otro modal </div>);
                }}
              >
                Close Modal
              </button>
            </div>
          )
        }
      >
        Open Modal
      </button>
    );
  },

  argTypes: {},
};

export default meta;
