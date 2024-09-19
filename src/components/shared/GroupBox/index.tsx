import { IChildren } from "~types";
import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface IGroupBox extends IChildren {
    size?: "sm" | "md" | "lg" | "max";
    justifyContentLeft?: boolean;
}

const BLOCK_CLASS_NAME = "group-box";

export function GroupBox({ size, justifyContentLeft, children }: IGroupBox) {
    const setBlockClassName =
        BLOCK_CLASS_NAME +
        applyClassNameIfTrue(!!size, `${BLOCK_CLASS_NAME}--size-${size}`) +
        applyClassNameIfTrue(!!justifyContentLeft, `${BLOCK_CLASS_NAME}--justify-content-left`);

    return <div className={setBlockClassName}>{children}</div>;
}
