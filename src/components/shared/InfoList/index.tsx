import { GroupBox, List, Text } from "~components/shared";
import { ChildrenType } from "~types";

interface IInfoList {
    title: string;
    items: ChildrenType;
}

export function InfoList({ title, items }: IInfoList) {
    return (
        <GroupBox size="max">
            <Text
                tag="h5"
                color="brand"
                font="sm"
                textAlign="left"
            >
                {title}
            </Text>
            <List column>{items}</List>
        </GroupBox>
    );
}
