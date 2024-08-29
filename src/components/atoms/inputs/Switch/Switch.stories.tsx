import type { Meta, StoryObj } from "@storybook/react"
import Switch from "./Switch"

const meta = {
    title: 'Switch',
    component: Switch,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
