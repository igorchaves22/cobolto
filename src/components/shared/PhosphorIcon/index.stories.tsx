import type { Meta, StoryObj } from "@storybook/react";
import { PhosphorIconLibrary } from "~utils";
import { PhosphorIcon } from ".";

const meta: Meta<typeof PhosphorIcon> = {
    title: "Components/Shared/PhosphorIcon",
    component: PhosphorIcon,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `PhosphorIcon` component allows you to render various icons from the Phosphor library with customizable color and size options."
            }
        }
    },
    argTypes: {
        icon: {
            description: "The name of the icon to render.",
            control: {
                type: "select",
                options: Object.keys(PhosphorIconLibrary)
            }
        },
        color: {
            description: "The color of the icon.",
            control: "select",
            options: ["brand", "primary", "secondary"],
            defaultValue: "primary"
        },
        bigSize: {
            description: "If true, the icon will be rendered in a larger size.",
            control: "boolean",
            defaultValue: false
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: "Acorn"
    }
};
