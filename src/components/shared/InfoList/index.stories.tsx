import type { Meta, StoryObj } from "@storybook/react";
import { InfoList } from ".";

const meta: Meta<typeof InfoList> = {
    title: "Components/Shared/InfoList",
    component: InfoList,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `InfoList` component displays a title followed by a vertical list of items, making it ideal for presenting grouped information."
            }
        }
    },
    argTypes: {
        title: {
            description: "The title displayed above the list.",
            control: "text",
            defaultValue: "Sample Title"
        },
        items: {
            description: "The items to be displayed in the list.",
            control: "text",
            defaultValue: "<li>Item 1</li><li>Item 2</li><li>Item 3</li>"
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "Sample Title",
        items: [<li key="1">Item 1</li>, <li key="2">Item 2</li>, <li key="3">Item 3</li>]
    }
};
