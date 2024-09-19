import "./styles.scss";

interface ICtaLink {
    title: string;
}

export function CtaLink({ title }: ICtaLink) {
    return (
        <a
            href="/"
            className="cta-link"
        >
            {title}
        </a>
    );
}
