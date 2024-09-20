import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

const meta = {
    title: "Components/Shared/Logo",
    component: Logo,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `Logo` component renders a brand logo along with a caption. It allows you to display the logo image and dynamically toggle the text color of the caption. This component provides a simple way to include a logo with customizable styling."
            }
        }
    },
    argTypes: {
        toggleTextColor: {
            description: "Toggles the text color of the caption between 'main' and 'primary'.",
            control: "boolean",
            defaultValue: false
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ToggleTextColor: Story = {
    args: {
        toggleTextColor: true
    }
};
