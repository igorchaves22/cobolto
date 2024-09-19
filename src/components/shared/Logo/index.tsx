import logoIcon from "~assets/icon/logo.svg";
import { Text } from "~components/shared";
import "./styles.scss";

interface ILogo {
    toggleTextColor?: boolean;
}

export function Logo({ toggleTextColor }: ILogo) {
    return (
        <figure className="logo">
            <img
                src={logoIcon}
                alt="Logo"
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
