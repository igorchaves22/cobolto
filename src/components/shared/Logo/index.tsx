import logoIcon from "~assets/icon/logo.svg";
import { Image, Text } from "~components/shared";
import "./styles.scss";

interface ILogo {
    toggleTextColor?: boolean;
}

export function Logo({ toggleTextColor }: ILogo) {
    return (
        <figure className="logo">
            <Image
                src={logoIcon}
                alt="Logo"
                size="sm"
            />
            <Text
                tag="figcaption"
                color={toggleTextColor ? "main" : "primary"}
            >
                Cobolto
            </Text>
        </figure>
    );
}
