import type { Meta, StoryObj } from "@storybook/react";
import { List } from ".";

const meta = {
    title: "Components/Shared/List",
    component: List,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `List` component is designed to render a list `ul` with customizable layout options. It allows you to display the list items in a column layout and align the items to the start if needed. This component offers flexibility in structuring lists for various UI designs."
            }
        }
    },
    argTypes: {
        column: {
            description: "Sets the list to display items in a column layout.",
            control: "boolean",
            defaultValue: false
        },
        alignStart: {
            description: "Aligns the list items to the start.",
            control: "boolean",
            defaultValue: false
        },
        children: {
            description: "The content of the list, usually list items (`<li>`).",
            control: "text",
            defaultValue: "<li>Item 1</li><li>Item 2</li><li>Item 3</li>"
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        column: false,
        alignStart: false,
        children: (
            <>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </>
        )
    }
};

export const ColumnList: Story = {
    args: {
        column: true,
        children: (
            <>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </>
        )
    }
};

export const AlignStartList: Story = {
    args: {
        alignStart: true,
        children: (
            <>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </>
        )
    }
};
