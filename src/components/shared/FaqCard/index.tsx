import { Text } from "~components/shared";
import "./styles.scss";

interface IFaqCard {
    question: string;
    answer: string;
}

export function FaqCard({ question, answer }: IFaqCard) {
    return (
        <details className="faq-card">
            <summary className="faq-card__title">{question}</summary>
            <Text
                font="xs"
                textAlign="left"
            >
                {answer}
            </Text>
        </details>
    );
}
