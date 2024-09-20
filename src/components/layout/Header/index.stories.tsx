import type { Meta, StoryObj } from "@storybook/react";
import { Header } from ".";

const meta: Meta<typeof Header> = {
    title: "Components/Layout/Header",
    component: Header,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `Header` component serves as the top navigation bar of the application. It includes the logo, navigation links, and a menu icon for mobile views. It adapts its layout based on the screen size to provide a responsive experience."
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};
