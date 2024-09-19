import { useCallback, useEffect, useState } from "react";
import { PhosphorIconLibraryType } from "~types";
import { useToggle } from "./useToggle";

const SCREEN_WIDTH_INITIAL_STATE = window.innerWidth;
const VISIBILITY_INITIAL_STATE = {
    initialState: false,
    alternativeState: true
};

export const useHeader = () => {
    const [screenWidth, setScreenWidth] = useState(SCREEN_WIDTH_INITIAL_STATE);
    const { state: visibility, handleValue: handleVisibility } = useToggle(VISIBILITY_INITIAL_STATE);

    const handleScreenWidth = () => setScreenWidth(window.innerWidth);
    const screenBreakpoint = 768;
    const itsOnSmallScreen = screenWidth < screenBreakpoint;
    const itsOnLargeScreen = screenWidth >= screenBreakpoint;

    const menuIcon: PhosphorIconLibraryType = visibility ? "X" : "List";
    const renderNavigation = visibility || itsOnLargeScreen;
    const handleClickToggleVisibility = useCallback(() => {
        if (itsOnLargeScreen) {
            return null;
        }

        handleVisibility();
    }, [handleVisibility, itsOnLargeScreen]);

    useEffect(() => {
        window.addEventListener("resize", handleScreenWidth);

        if (itsOnLargeScreen) {
            handleVisibility(false);
        }

        return () => window.removeEventListener("resize", handleScreenWidth);
    }, [handleVisibility, itsOnLargeScreen]);

    return { itsOnSmallScreen, itsOnLargeScreen, menuIcon, renderNavigation, handleClickToggleVisibility };
};
