import { HeaderLink, List, Logo, PhosphorIcon } from "~components/shared";
import { useHeader } from "~hooks";
import { headerList, renderElementIfTrue } from "~utils";
import "./styles.scss";

export function Header() {
    const { itsOnSmallScreen, menuIcon, renderNavigation, handleClickToggleVisibility } = useHeader();

    return (
        <header className="header">
            <section className="header__content">
                <Logo />
                {renderElementIfTrue(
                    itsOnSmallScreen,
                    <button
                        type="button"
                        className="header__button"
                        onClick={() => handleClickToggleVisibility()}
                    >
                        <PhosphorIcon
                            icon={menuIcon}
                            bigSize
                        />
                    </button>
                )}
                {renderElementIfTrue(
                    renderNavigation,
                    <List column={itsOnSmallScreen}>
                        {headerList.map((data) => (
                            <HeaderLink
                                key={data.title}
                                onClick={() => handleClickToggleVisibility()}
                                {...data}
                            />
                        ))}
                    </List>
                )}
            </section>
        </header>
    );
}
