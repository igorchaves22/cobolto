import { Text } from "~components/shared";
import "./styles.scss";

interface IPlanCard {
    title: string;
    description: string;
}

export function PlanCard({ title, description }: IPlanCard) {
    return (
        <li className="plan-card">
            <Text
                tag="h4"
                font="sm"
            >
                {title}
            </Text>
            <Text
                font="xs"
                textAlign="justify"
            >
                {description}
            </Text>
        </li>
    );
}
