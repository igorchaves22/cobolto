import { useCallback, useEffect, useState } from "react";

const SCROLL_Y_INITIAL_STATE = window.scrollY;
const SCROLL_THRESHOLD = 20;

export const useScrollToTopButton = () => {
    const [scrollY, setScrollY] = useState(SCROLL_Y_INITIAL_STATE);

    const handleScrollY = () => setScrollY(window.scrollY);
    const renderScrollToTopButton = scrollY >= SCROLL_THRESHOLD;
    const handleClickScrollToTop = useCallback(() => {
        window.history.pushState(null, "", window.location.pathname);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollY);

        return () => window.removeEventListener("scroll", handleScrollY);
    }, []);

    return { renderScrollToTopButton, handleClickScrollToTop };
};
