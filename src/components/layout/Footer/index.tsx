import { GroupBox, FooterLink, InfoList, Logo, Text } from "~components/shared";
import "./styles.scss";

export function Footer() {
    return (
        <footer className="footer">
            <section className="footer__content">
                <GroupBox
                    size="sm"
                    justifyContentLeft
                >
                    <Logo toggleTextColor />
                    <Text
                        color="main"
                        font="sm"
                        textAlign="left"
                    >
                        Join the adventure and discover how effortless Wander makes travel planning.
                    </Text>
                </GroupBox>
                <section className="footer__group">
                    <InfoList
                        title="Company"
                        items={
                            <>
                                <FooterLink title="cobolto@gmail.com" />
                                <FooterLink title="99999-9999" />
                            </>
                        }
                    />
                    <InfoList
                        title="Who We Help"
                        items={
                            <>
                                <FooterLink title="Families" />
                                <FooterLink title="Couples" />
                                <FooterLink title="Solo Travelers" />
                            </>
                        }
                    />
                    <InfoList
                        title="Follow us"
                        items={
                            <>
                                <FooterLink title="LinkedIn" />
                                <FooterLink title="Instagram" />
                                <FooterLink title="Twitter" />
                            </>
                        }
                    />
                </section>
                <Text
                    color="brand"
                    font="xs"
                >
                    Copyright @ 2024 | Licensed Travel Agency 999999
                </Text>
            </section>
        </footer>
    );
}
