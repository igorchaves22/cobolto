import { DivType, IChildren, ThemeBreakpointType } from "~types";
import { applyClassNameIfTrue } from "~utils";
import "./styles.scss";

interface ISectionContainer extends Pick<DivType, "id">, IChildren {
    heroSectionLayout?: boolean;
    bgImage?: boolean;
    changeLayoutOnScreen?: {
        breakpoint: ThemeBreakpointType;
        layout: "main" | "primary" | "secondary" | "tertiary";
    };
}

const BLOCK_CLASS_NAME = "section-container";
const ELEMENT_CLASS_NAME = `${BLOCK_CLASS_NAME}__content`;

export function SectionContainer({
    heroSectionLayout,
    bgImage,
    changeLayoutOnScreen,
    children,
    ...rest
}: ISectionContainer) {
    const setBlockClassName =
        BLOCK_CLASS_NAME +
        applyClassNameIfTrue(!!heroSectionLayout, `${BLOCK_CLASS_NAME}--hero-section-layout`) +
        applyClassNameIfTrue(!!bgImage, `${BLOCK_CLASS_NAME}--bg-image`);
    const setElementClassName =
        ELEMENT_CLASS_NAME +
        applyClassNameIfTrue(
            !!changeLayoutOnScreen,
            `${ELEMENT_CLASS_NAME}--change-text-align-on-screen-${changeLayoutOnScreen?.breakpoint}-${changeLayoutOnScreen?.layout}`
        );

    return (
        <section
            className={setBlockClassName}
            {...rest}
        >
            <section className={setElementClassName}>{children}</section>
        </section>
    );
}
