import { Text, PhosphorIcon } from "~components/shared";
import { IPhosphorIcon } from "~types";
import "./styles.scss";

interface IStatCard extends IPhosphorIcon {
    title: string;
    content: string;
}

export function StatCard({ icon, title, content }: IStatCard) {
    return (
        <div className="stat-card">
            <PhosphorIcon
                icon={icon}
                color="brand"
                bigSize
            />
            <Text
                tag="h5"
                color="brand"
                textAlign="left"
            >
                {title}
            </Text>
            <Text
                font="xs"
                textAlign="left"
            >
                {content}
            </Text>
        </div>
    );
}
