import type { Meta, StoryObj } from "@storybook/react";
import { PlanCard } from ".";

const meta: Meta<typeof PlanCard> = {
    title: "Components/Shared/PlanCard",
    component: PlanCard,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `PlanCard` component displays a plan title and its description, allowing for structured presentation of different plans or features."
            }
        }
    },
    argTypes: {
        title: {
            description: "The title of the plan.",
            control: "text",
            defaultValue: "Basic Plan"
        },
        description: {
            description: "A brief description of the plan.",
            control: "text",
            defaultValue: "This is a basic plan that provides essential features."
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Basic Plan",
        description: "This is a basic plan that provides essential features."
    }
};
