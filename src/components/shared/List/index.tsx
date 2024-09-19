import { IChildren } from "~types";
import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface IList extends IChildren {
    column?: boolean;
    alignStart?: boolean;
}

const BLOCK_CLASS_NAME = "list";

export function List({ column, alignStart, children }: IList) {
    const setBlockClassName =
        BLOCK_CLASS_NAME +
        applyClassNameIfTrue(!!column, `${BLOCK_CLASS_NAME}--column`) +
        applyClassNameIfTrue(!!alignStart, `${BLOCK_CLASS_NAME}--align-start`);

    return <ul className={setBlockClassName}>{children}</ul>;
}
