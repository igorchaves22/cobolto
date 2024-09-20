import type { Meta, StoryObj } from "@storybook/react";
import { FaqCard } from ".";

const meta = {
    title: "Components/Shared/FaqCard",
    component: FaqCard,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component:
                    "The `FaqCard` component displays a frequently asked question (FAQ) with a collapsible section for the answer. Users can click on the question to reveal or hide the answer."
            }
        }
    },
    argTypes: {
        question: {
            description: "The FAQ question text.",
            control: "text",
            defaultValue: "What is the purpose of this component?"
        },
        answer: {
            description: "The FAQ answer text.",
            control: "text",
            defaultValue: "The purpose of this component is to display FAQs in a clean and interactive manner."
        }
    }
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        question: "What is the purpose of this component?",
        answer: "The purpose of this component is to display FAQs in a clean and interactive manner."
    }
};

export const CustomFaq: Story = {
    args: {
        question: "How does the FAQ card work?",
        answer: "The FAQ card uses a collapsible details element where the question is the summary and the answer is shown when clicked."
    }
};
