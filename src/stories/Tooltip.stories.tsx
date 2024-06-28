import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@/components/atoms/Tooltip";
import React from "react";
import { Icon } from "@/components/atoms/Icon";

const meta = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "13rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default = {
  args: {
    label: "Tool tip que ayuda a los usuarios a entender mejor la interfaz",
    children: (<Icon nameIcon="adox-checkmark" />) as React.ReactNode,
    transition: "normal",
    position: "top",
  },
} satisfies Story;
