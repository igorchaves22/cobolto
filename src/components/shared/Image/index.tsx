import { ImgType, ThemeBreakpointType } from "~types";
import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface IImage extends Pick<ImgType, "src" | "alt"> {
    circle?: boolean;
    size?: "sm" | "md" | "lg";
    changeSizeOnScreen?: Pick<IImage, "size"> & {
        breakpoint: ThemeBreakpointType;
    };
}

const BLOCK_CLASS_NAME = "image";

export function Image({ size, circle, changeSizeOnScreen, ...rest }: IImage) {
    const setBlockClassName =
        BLOCK_CLASS_NAME +
        applyClassNameIfTrue(!!size, `${BLOCK_CLASS_NAME}--size-${size}`) +
        applyClassNameIfTrue(!!circle, `${BLOCK_CLASS_NAME}--circle`) +
        applyClassNameIfTrue(
            !!changeSizeOnScreen,
            `${BLOCK_CLASS_NAME}--change-text-align-on-screen-${changeSizeOnScreen?.breakpoint}-${changeSizeOnScreen?.size}`
        );

    return (
        <img
            loading="lazy"
            className={setBlockClassName}
            {...rest}
        />
    );
}
