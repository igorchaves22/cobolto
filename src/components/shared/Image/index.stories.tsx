import type { Meta, StoryObj } from "@storybook/react";
import { Image } from ".";

const meta = {
    title: "Components/Shared/Image",
    component: Image,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `Image` component is used to render an image with various style customization options. It allows you to define the size of the image, display it as a circle, and adjust its size dynamically based on screen breakpoints. This component is flexible and can be easily adapted to meet different responsive design requirements."
            }
        }
    },
    argTypes: {
        src: {
            description: "The URL of the image.",
            control: { type: "text" }
        },
        alt: {
            description: "The alt text for the image.",
            control: { type: "text" }
        },
        circle: {
            description: "Whether the image should be displayed as a circle.",
            control: { type: "boolean" }
        },
        size: {
            description: "The size of the image.",
            control: { type: "select" },
            options: ["sm", "md", "lg"]
        },
        changeSizeOnScreen: {
            description: "Changes the image size based on the screen size (breakpoints).",
            control: { type: "object" },
            defaultValue: {
                size: "md",
                breakpoint: "md"
            },
            table: {
                type: {
                    summary: "object",
                    detail: `{
                        size: "sm" | "md" | "lg";
                        breakpoint: "tny" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "mega";
                    }`
                }
            },
            subControls: {
                size: {
                    control: { type: "select" },
                    options: ["sm", "md", "lg"]
                },
                breakpoint: {
                    control: { type: "select" },
                    options: ["tny", "xs", "sm", "md", "lg", "xl", "xxl", "mega"]
                }
            }
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder Image"
    }
};

export const CircleImage: Story = {
    args: {
        src: "https://via.placeholder.com/150",
        alt: "Placeholder Image",
        circle: true,
        changeSizeOnScreen: {
            size: "lg",
            breakpoint: "md"
        }
    }
};
