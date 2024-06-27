import type { Preview } from "@storybook/react";
import { ModalProvider } from "../src/context/ModalContext/ModalContext";
import React from "react";
import { ToastProvider } from "../src/context/ToastContext/index";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <ToastProvider toastPosition="bottom-right">
          <ModalProvider>
            <Story />
          </ModalProvider>
        </ToastProvider>
      );
    },
  ],
};

export default preview;
