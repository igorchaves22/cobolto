import illustration1Icon from "~assets/icon/illustration-1.svg";
import illustration2Icon from "~assets/icon/illustration-2.svg";
import {
    CtaLink,
    FaqCard,
    GroupBox,
    Image,
    List,
    PartnerCard,
    PlanCard,
    SectionContainer,
    ServiceCard,
    StatCard,
    TestimonialCard,
    Text
} from "~components/shared";
import { PhosphorIconLibraryType } from "~types";
import { faqList, partnerList, planList, serviceList, statsList } from "~utils";
import "./styles.scss";

export function Page() {
    return (
        <main className="page">
            <SectionContainer
                heroSectionLayout
                bgImage
                changeLayoutOnScreen={{
                    breakpoint: "md",
                    layout: "secondary"
                }}
            >
                <GroupBox
                    size="lg"
                    justifyContentLeft
                >
                    <Text
                        tag="h1"
                        font="xxl"
                        changeTextAlignOnScreen={{
                            breakpoint: "md",
                            textAlign: "left"
                        }}
                    >
                        Explore the world in comfort and style with{" "}
                        <Text
                            tag="span"
                            color="brand"
                            font="mega"
                        >
                            Cobolt
                        </Text>
                    </Text>
                    <Text
                        changeTextAlignOnScreen={{
                            breakpoint: "md",
                            textAlign: "justify"
                        }}
                    >
                        Turn your vacations into unforgettable experiences with our exclusive packages and personalized
                        itineraries.
                    </Text>
                    <CtaLink title="Register now" />
                </GroupBox>
                <Image
                    src={illustration1Icon}
                    alt="Illustration"
                    changeSizeOnScreen={{
                        breakpoint: "md",
                        size: "lg"
                    }}
                />
            </SectionContainer>
            <SectionContainer id="partners">
                <GroupBox>
                    <Text
                        tag="h1"
                        font="xxl"
                    >
                        Our Partners
                    </Text>
                    <Text>
                        We collaborate with top brands and companies to ensure your journey is flawless and of the
                        highest quality.
                    </Text>
                </GroupBox>
                <List>
                    {partnerList.map(({ image, name }) => (
                        <PartnerCard
                            key={name}
                            src={image}
                            alt={name}
                        />
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                id="plans"
                bgImage
            >
                <Text
                    tag="h1"
                    font="xxl"
                >
                    Choose the Ideal Plan for Your
                </Text>
                <List alignStart>
                    {planList.map((data) => (
                        <PlanCard
                            key={data.title}
                            {...data}
                        />
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                id="stats"
                changeLayoutOnScreen={{
                    breakpoint: "md",
                    layout: "secondary"
                }}
            >
                <List>
                    {statsList.map(({ icon, title, content }) => (
                        <StatCard
                            key={title}
                            icon={icon as PhosphorIconLibraryType}
                            {...{ title, content }}
                        />
                    ))}
                </List>
                <GroupBox>
                    <Text
                        tag="h1"
                        font="xxl"
                    >
                        Numbers That Tell Our Story
                    </Text>
                    <Text>Discover the impact of our journeys around the world</Text>
                    <CtaLink title="Learn more" />
                </GroupBox>
            </SectionContainer>
            <SectionContainer
                id="services"
                changeLayoutOnScreen={{
                    breakpoint: "md",
                    layout: "tertiary"
                }}
            >
                <GroupBox>
                    <Text
                        tag="h1"
                        font="xxl"
                    >
                        Services Offered
                    </Text>
                    <CtaLink title="View more" />
                </GroupBox>
                <List>
                    {serviceList.map(({ icon, name }) => (
                        <ServiceCard
                            key={name}
                            icon={icon as PhosphorIconLibraryType}
                            name={name}
                        />
                    ))}
                </List>
            </SectionContainer>
            <SectionContainer
                id="testimonial"
                bgImage
                changeLayoutOnScreen={{
                    breakpoint: "md",
                    layout: "main"
                }}
            >
                <GroupBox size="md">
                    <Text
                        tag="h1"
                        font="xxl"
                        changeTextAlignOnScreen={{
                            breakpoint: "md",
                            textAlign: "left"
                        }}
                    >
                        Testimonial
                    </Text>
                    <Text
                        changeTextAlignOnScreen={{
                            breakpoint: "md",
                            textAlign: "justify"
                        }}
                    >
                        Cobolto’s commitment to unforgettable travel is evident in our clients’ feedback. With easy
                        bookings and personalized recommendations, we aim to make every trip memorable. See how our
                        travelers have been inspired and get ready for your next adventure.
                    </Text>
                </GroupBox>
                <TestimonialCard />
            </SectionContainer>
            <SectionContainer
                id="faq"
                changeLayoutOnScreen={{
                    breakpoint: "md",
                    layout: "primary"
                }}
            >
                <Text
                    tag="h1"
                    font="xxl"
                >
                    Frequently Asked Questions
                </Text>
                <Image
                    src={illustration2Icon}
                    alt="Illustration"
                    changeSizeOnScreen={{
                        breakpoint: "md",
                        size: "md"
                    }}
                />
                <GroupBox>
                    {faqList.map(({ question, answer }) => (
                        <FaqCard
                            key={question}
                            {...{ question, answer }}
                        />
                    ))}
                </GroupBox>
            </SectionContainer>
            <SectionContainer
                id="newsletter"
                bgImage
            >
                <GroupBox size="lg">
                    <Text font="lg">
                        Explore the world with Cobolto! Subscribe to our newsletter to get the best travel deals and
                        tips delivered straight to your inbox.
                    </Text>
                </GroupBox>
                <CtaLink title="Subscribe Now" />
            </SectionContainer>
        </main>
    );
}
