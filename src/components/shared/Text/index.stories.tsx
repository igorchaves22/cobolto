import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta = {
    title: "Components/Shared/Text",
    component: Text,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `Text` component is designed to render text blocks with various style customization options. It allows you to choose different HTML tags such as `h1`, `p`, `span`, and more, ensuring flexibility for different use cases without losing semantic meaning."
            }
        }
    },
    argTypes: {
        tag: {
            description: "The HTML tag used to render the text element.",
            control: { type: "select" },
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "figcaption", "span"]
        },
        color: {
            description: "The color of the text. It is based on the theme's color palette.",
            control: { type: "select" },
            options: ["brand", "main", "primary", "secondary"]
        },
        font: {
            description: "The font type to be applied to the text, based on the theme's fonts.",
            control: { type: "select" },
            options: ["xs", "sm", "md", "lg", "xl", "xxl", "mega"]
        },
        textAlign: {
            description: "The alignment of the text.",
            control: { type: "select" },
            options: ["center", "left", "justify"]
        },
        changeTextAlignOnScreen: {
            description: "Allows the text alignment to change based on screen size (breakpoints).",
            control: { type: "object" },
            defaultValue: {
                textAlign: "left",
                breakpoint: "md"
            },
            table: {
                type: {
                    summary: "object",
                    detail: `{
                        textAlign: "center" | "left" | "justify";
                        breakpoint: "tny" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "mega";
                    }`
                }
            },
            subControls: {
                textAlign: {
                    control: { type: "select" },
                    options: ["center", "left", "justify"]
                },
                breakpoint: {
                    control: { type: "select" },
                    options: ["tny", "xs", "sm", "md", "lg", "xl", "xxl", "mega"]
                }
            }
        }
    }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Text"
    }
};
