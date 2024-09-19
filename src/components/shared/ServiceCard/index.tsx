import { Text, PhosphorIcon } from "~components/shared";
import { IPhosphorIcon } from "~types";
import "./styles.scss";

interface IServiceCard extends IPhosphorIcon {
    name: string;
}

export function ServiceCard({ icon, name }: IServiceCard) {
    return (
        <li className="service-card">
            <PhosphorIcon
                icon={icon}
                color="secondary"
            />
            <Text
                color="secondary"
                font="xs"
            >
                {name}
            </Text>
        </li>
    );
}
