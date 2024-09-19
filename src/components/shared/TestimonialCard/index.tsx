import saraPictureImage from "~assets/image/sara-picture.jpg";
import { Image, Text } from "~components/shared";
import "./styles.scss";

export function TestimonialCard() {
    return (
        <article className="testimonial-card">
            <Image
                src={saraPictureImage}
                alt="Camila S"
                size="lg"
                circle
            />
            <Text font="xs">
                My experience was incredible! From the planning to the execution, everything was perfect. Every detail
                was carefully thought out, and I was able to relax and enjoy every moment of the trip. I can't wait for
                my next adventure!" — Camila S.
            </Text>
        </article>
    );
}
