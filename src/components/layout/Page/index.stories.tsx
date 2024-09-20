import type { Meta, StoryObj } from "@storybook/react";
import { Page } from ".";

const meta: Meta<typeof Page> = {
    title: "Pages/Layout/Page",
    component: Page,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `Page` component serves as the main layout for the application. It incorporates various sections such as the hero section, partner details, plans, statistics, services offered, testimonials, FAQs, and a newsletter subscription area. Each section is responsive and adapts to different screen sizes."
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
