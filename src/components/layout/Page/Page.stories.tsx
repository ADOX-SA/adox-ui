import type { Meta, StoryObj } from "@storybook/react"
import Page from "./Page"

const meta = {
    title: 'Page',
    component: Page,
    tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof Page>;

export const Default = {
    args: {
        // props
    },
} satisfies Story;
