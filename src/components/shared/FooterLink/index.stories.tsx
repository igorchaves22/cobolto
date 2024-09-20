import type { Meta, StoryObj } from "@storybook/react";
import { FooterLink } from ".";

const meta = {
    title: "Components/Shared/FooterLink",
    component: FooterLink,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `FooterLink` component renders an individual list item that contains a hyperlink, designed to be used within a footer section."
            }
        }
    },
    argTypes: {
        title: {
            description: "The text of the link.",
            control: "text",
            defaultValue: "Home"
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Home"
    }
};
