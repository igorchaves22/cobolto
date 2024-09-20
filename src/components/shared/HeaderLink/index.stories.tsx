import type { Meta, StoryObj } from "@storybook/react";
import { HeaderLink } from ".";

const meta: Meta<typeof HeaderLink> = {
    title: "Components/Shared/HeaderLink",
    component: HeaderLink,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `HeaderLink` component represents a navigational link within a header, allowing for click handling and dynamic linking while ensuring a consistent design."
            }
        }
    },
    argTypes: {
        title: {
            description: "The text displayed for the link.",
            control: "text",
            defaultValue: "Home"
        },
        href: {
            description: "The URL the link points to.",
            control: "text",
            defaultValue: "/"
        },
        onClick: {
            description: "Function to handle click events.",
            action: "clicked"
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Home",
        href: "/"
    }
};

export const AboutLink: Story = {
    args: {
        title: "About",
        href: "/about"
    }
};
