import type { Meta, StoryObj } from "@storybook/react"
import Select from "./Select"

const meta = {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
