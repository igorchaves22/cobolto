import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta: Meta<typeof Footer> = {
    title: "Components/Layout/Footer",
    component: Footer,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `Footer` component serves as the bottom section of the webpage, providing company information, contact details, and social media links. It enhances user engagement by inviting them to connect with the brand."
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
