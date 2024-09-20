import type { Meta, StoryObj } from "@storybook/react";
import { PartnerCard } from ".";

const meta: Meta<typeof PartnerCard> = {
    title: "Components/Shared/PartnerCard",
    component: PartnerCard,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `PartnerCard` component displays an image representing a partner or affiliate, making it ideal for partnership sections in a UI."
            }
        }
    },
    argTypes: {
        src: {
            description: "The source URL of the image.",
            control: "text",
            defaultValue: "https://via.placeholder.com/150"
        },
        alt: {
            description: "The alt text for the image.",
            control: "text",
            defaultValue: "Partner Logo"
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "https://via.placeholder.com/150",
        alt: "Partner Logo"
    }
};
