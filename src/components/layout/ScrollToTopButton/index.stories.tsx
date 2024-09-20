import type { Meta, StoryObj } from "@storybook/react";
import { ScrollToTopButton } from ".";

const meta: Meta<typeof ScrollToTopButton> = {
    title: "Components/Layout/ScrollToTopButton",
    component: ScrollToTopButton,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `ScrollToTopButton` component provides a button that allows users to quickly scroll back to the top of the page. It is typically displayed when the user scrolls down a significant amount on the page."
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
