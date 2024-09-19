import { PhosphorIcon } from "~components/shared";
import { useScrollToTopButton } from "~hooks";
import { renderElementIfTrue } from "~utils";
import "./styles.scss";

export function ScrollToTopButton() {
    const { renderScrollToTopButton, handleClickScrollToTop } = useScrollToTopButton();

    return renderElementIfTrue(
        renderScrollToTopButton,
        <button
            type="button"
            onClick={() => handleClickScrollToTop()}
            className="scroll-to-top-button"
        >
            <PhosphorIcon
                icon="CaretUp"
                color="brand"
                bigSize
            />
        </button>
    );
}
