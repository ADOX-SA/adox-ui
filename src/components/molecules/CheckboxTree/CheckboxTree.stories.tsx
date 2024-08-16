import type { Meta, StoryObj } from "@storybook/react"
import CheckboxTree from "./CheckboxTree"

const meta = {
    title: 'CheckboxTree',
    component: CheckboxTree,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof CheckboxTree>;

export default meta;

type Story = StoryObj<typeof CheckboxTree>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
