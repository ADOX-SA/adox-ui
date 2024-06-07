import type { Meta, StoryObj } from "@storybook/react"
import Listbox from "./Listbox"

const meta = {
    title: 'Listbox',
    component: Listbox,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Listbox>;

export default meta;

type Story = StoryObj<typeof Listbox>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
