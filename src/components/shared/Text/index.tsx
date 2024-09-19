import { IChildren, ThemeBreakpointType, ThemeColorType, ThemeFontType } from "~types";
import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface IText extends IChildren {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "figcaption" | "span";
    color?: ThemeColorType;
    font?: ThemeFontType;
    textAlign?: "center" | "left" | "justify";
    changeTextAlignOnScreen?: Pick<IText, "textAlign"> & {
        breakpoint: ThemeBreakpointType;
    };
}

const BLOCK_CLASS_NAME = "text";

export function Text({ tag, color, font, textAlign, changeTextAlignOnScreen, children }: IText) {
    const Component = tag ?? "p";
    const setBlockClassName =
        BLOCK_CLASS_NAME +
        applyClassNameIfTrue(!!color, `${BLOCK_CLASS_NAME}--color-${color}`) +
        applyClassNameIfTrue(!!font, `${BLOCK_CLASS_NAME}--font-${font}`) +
        applyClassNameIfTrue(!!textAlign, `${BLOCK_CLASS_NAME}--text-align-${textAlign}`) +
        applyClassNameIfTrue(
            !!changeTextAlignOnScreen,
            `${BLOCK_CLASS_NAME}--change-text-align-on-screen-${changeTextAlignOnScreen?.breakpoint}-${changeTextAlignOnScreen?.textAlign}`
        );

    return <Component className={setBlockClassName}>{children}</Component>;
}
