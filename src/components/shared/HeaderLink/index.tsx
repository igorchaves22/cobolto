import { LinkType } from "~types";
import "./styles.scss";

interface IHeaderLink extends Pick<LinkType, "onClick" | "href"> {
    title: string;
}

export function HeaderLink({ title, ...rest }: IHeaderLink) {
    return (
        <li className="header-link">
            <a
                className="header-link__link"
                {...rest}
            >
                {title}
            </a>
        </li>
    );
}
