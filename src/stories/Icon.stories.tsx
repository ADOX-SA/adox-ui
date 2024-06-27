import type { Meta, StoryObj } from "@storybook/react";
import Icon from "@/components/atoms/Icon/Icon";

const meta = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default = {
  args: {
    nameIcon: "adox-loading",
    propsIcon: {
      size: 24,
      color: "red",
    },
  },
} satisfies Story;

export const AIIcon = {
  args: {
    nameIcon: "AiFillAlert",
    propsIcon: {
      size: 24,
      color: "blue",
    },
  },
} satisfies Story;
