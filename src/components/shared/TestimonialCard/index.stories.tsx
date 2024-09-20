import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from ".";

const meta: Meta<typeof TestimonialCard> = {
    title: "Components/Shared/TestimonialCard",
    component: TestimonialCard,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `TestimonialCard` component is designed to display a user's testimonial with an accompanying image, making it ideal for showcasing customer feedback."
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
