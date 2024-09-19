import "./styles.scss";

interface IFooterLink {
    title: string;
}

export function FooterLink({ title }: IFooterLink) {
    return (
        <li className="footer-link">
            <a
                href="/"
                className="footer-link__link"
            >
                {title}
            </a>
        </li>
    );
}
