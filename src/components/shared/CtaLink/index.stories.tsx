import type { Meta, StoryObj } from "@storybook/react";
import { CtaLink } from ".";

const meta = {
    title: "Components/Shared/CtaLink",
    component: CtaLink,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `CtaLink` component renders a call-to-action (CTA) link with customizable text. It allows you to provide a title to display as the link text."
            }
        }
    },
    argTypes: {
        title: {
            description: "The text displayed for the CTA link.",
            control: "text",
            defaultValue: "Click Here"
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Click Here"
    }
};

export const CustomTitle: Story = {
    args: {
        title: "Learn More"
    }
};
