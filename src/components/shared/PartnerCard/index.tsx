import { Image } from "~components/shared";
import { ImgType } from "~types";
import "./styles.scss";

interface IPartnerCard extends Pick<ImgType, "src" | "alt"> {}

export function PartnerCard({ ...rest }: IPartnerCard) {
    return (
        <li className="partner-card">
            <Image
                size="sm"
                {...rest}
            />
        </li>
    );
}
