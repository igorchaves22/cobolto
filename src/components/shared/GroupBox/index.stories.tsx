import type { Meta, StoryObj } from "@storybook/react";
import { GroupBox } from ".";

const meta = {
    title: "Components/Shared/GroupBox",
    component: GroupBox,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `GroupBox` component serves as a container for grouping elements together. It allows for customizable sizing and alignment options, making it flexible for various layouts."
            }
        }
    },
    argTypes: {
        size: {
            description: "Defines the size of the GroupBox.",
            control: { type: "select", options: ["sm", "md", "lg", "max"] },
            defaultValue: "md"
        },
        justifyContentLeft: {
            description: "If true, justifies the content to the left.",
            control: "boolean",
            defaultValue: false
        },
        children: {
            description: "The content to be displayed inside the GroupBox.",
            control: "text",
            defaultValue: "Content goes here"
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: "md",
        children: "Content goes here"
    }
};

export const JustifiedLeft: Story = {
    args: {
        size: "lg",
        justifyContentLeft: true,
        children: "Left-justified content"
    }
};
