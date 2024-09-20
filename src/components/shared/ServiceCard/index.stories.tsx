import type { Meta, StoryObj } from "@storybook/react";
import { PhosphorIconLibrary } from "~utils";
import { ServiceCard } from ".";

const meta: Meta<typeof ServiceCard> = {
    title: "Components/Shared/ServiceCard",
    component: ServiceCard,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `ServiceCard` component displays a service with an associated icon and name, useful for showcasing various services offered."
            }
        }
    },
    argTypes: {
        icon: {
            description: "The icon to represent the service.",
            control: { type: "select", options: Object.keys(PhosphorIconLibrary) }
        },
        name: {
            description: "The name of the service.",
            control: "text",
            defaultValue: "Service Name"
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: "Acorn",
        name: "Example Service"
    }
};
