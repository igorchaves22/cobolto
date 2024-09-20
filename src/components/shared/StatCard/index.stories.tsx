import type { Meta, StoryObj } from "@storybook/react";
import { PhosphorIconLibrary } from "~utils";
import { StatCard } from ".";

const meta: Meta<typeof StatCard> = {
    title: "Components/Shared/StatCard",
    component: StatCard,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `StatCard` component is designed to display a statistic with an associated icon, title, and content, making it ideal for dashboard summaries."
            }
        }
    },
    argTypes: {
        icon: {
            description: "The icon to represent the statistic.",
            control: { type: "select", options: Object.keys(PhosphorIconLibrary) }
        },
        title: {
            description: "The title of the statistic.",
            control: "text",
            defaultValue: "Statistic Title"
        },
        content: {
            description: "The content of the statistic.",
            control: "text",
            defaultValue: "Statistic Content"
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: "Acorn",
        title: "Total Users",
        content: "1,234"
    }
};
