import { IPhosphorIcon, SvgElementType } from "~types";
import { applyClassNameIfTrue, PhosphorIconLibrary } from "~utils";
import "./styles.scss";

interface IPhosphorIconProps extends IPhosphorIcon {
    color?: "brand" | "primary" | "secondary";
    bigSize?: boolean;
}

const BLOCK_CLASS_NAME = "phosphor-icon";

export function PhosphorIcon({ icon, color, bigSize, ...rest }: IPhosphorIconProps) {
    const Component = PhosphorIconLibrary[icon] as SvgElementType;
    const setBlockClassName =
        BLOCK_CLASS_NAME +
        applyClassNameIfTrue(!!color, `${BLOCK_CLASS_NAME}--color-${color}`) +
        applyClassNameIfTrue(!!bigSize, `${BLOCK_CLASS_NAME}--big-size`);

    return (
        <Component
            className={setBlockClassName}
            {...rest}
        />
    );
}
