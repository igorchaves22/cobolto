import type { Meta, StoryObj } from "@storybook/react";
import { SectionContainer } from ".";

const meta = {
    title: "Components/Shared/SectionContainer",
    component: SectionContainer,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `SectionContainer` component is a versatile layout container for rendering sections of a page. It supports different layout styles, background images, and provides responsive layout changes based on screen breakpoints, making it suitable for hero sections or other complex layout needs."
            }
        }
    },
    argTypes: {
        heroSectionLayout: {
            description: "Applies a hero layout style to the section.",
            control: "boolean",
            defaultValue: false
        },
        bgImage: {
            description: "Adds a background image to the section.",
            control: "boolean",
            defaultValue: false
        },
        changeLayoutOnScreen: {
            description: "Changes the section layout at a specific breakpoint.",
            control: {
                type: "object",
                properties: {
                    breakpoint: {
                        control: { type: "select" },
                        options: ["tny", "xs", "sm", "md", "lg", "xl", "xxl", "mega"]
                    },
                    layout: {
                        control: { type: "select" },
                        options: ["main", "primary", "secondary", "tertiary"]
                    }
                }
            }
        },
        children: {
            description: "The content to be rendered inside the section.",
            control: "text"
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Content"
    }
};

export const HeroSection: Story = {
    args: {
        heroSectionLayout: true,
        children: "Hero Section Content"
    }
};

export const BgImageSection: Story = {
    args: {
        bgImage: true,
        children: "Section with Background Image"
    }
};

export const ResponsiveLayout: Story = {
    args: {
        changeLayoutOnScreen: {
            breakpoint: "md",
            layout: "primary"
        },
        children: "Responsive Section Content"
    }
};
