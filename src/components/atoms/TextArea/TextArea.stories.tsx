import type { Meta, StoryObj } from "@storybook/react"
import TextArea from "./TextArea"

const meta = {
    title: 'TextArea',
    component: TextArea,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
