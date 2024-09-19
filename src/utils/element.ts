import * as PhosphorIconsReact from "@phosphor-icons/react";
import { ReactNode } from "react";
import partnerLogo1Image from "~assets/image/partner-logo-1.png";
import partnerLogo2Image from "~assets/image/partner-logo-2.png";
import partnerLogo3Image from "~assets/image/partner-logo-3.png";
import partnerLogo4Image from "~assets/image/partner-logo-4.png";
import partnerLogo5Image from "~assets/image/partner-logo-5.png";
import partnerLogo6Image from "~assets/image/partner-logo-6.png";
import partnerLogo7Image from "~assets/image/partner-logo-7.png";

export const applyClassNameIfTrue = (condition: boolean, className: string) => {
    return condition ? ` ${className}` : "";
};

export const renderElementIfTrue = (condition: boolean, element: ReactNode) => {
    return condition ? element : null;
};

export const PhosphorIconLibrary = PhosphorIconsReact;

export const headerList = [
    {
        href: "#partners",
        title: "Partners"
    },
    {
        href: "#plans",
        title: "Plans"
    },
    {
        href: "#stats",
        title: "Stats"
    },
    {
        href: "#services",
        title: "Services"
    },
    {
        href: "#testimonial",
        title: "Testimonial"
    },
    {
        href: "#faq",
        title: "FAQ"
    },
    {
        href: "#newsletter",
        title: "Newsletter"
    }
];

export const partnerList = [
    {
        image: partnerLogo1Image,
        name: "Partner 1"
    },
    {
        image: partnerLogo2Image,
        name: "Partner 2"
    },
    {
        image: partnerLogo3Image,
        name: "Partner 3"
    },
    {
        image: partnerLogo4Image,
        name: "Partner 4"
    },
    {
        image: partnerLogo5Image,
        name: "Partner 5"
    },
    {
        image: partnerLogo6Image,
        name: "Partner 6"
    },
    {
        image: partnerLogo7Image,
        name: "Partner 7"
    }
];

export const planList = [
    {
        title: "Basic Plan",
        description:
            "Ideal for short and budget-friendly trips. Includes flight booking and standard hotel accommodation."
    },
    {
        title: "Comfort Plan",
        description: "Perfect for those looking for a bit more comfort. Includes 4-star hotel bookings and car rentals."
    },
    {
        title: "Premium Plan",
        description:
            "For those who want a complete experience. Includes business class flights, 5-star hotels, and personalized tour packages."
    },
    {
        title: "Luxury Plan",
        description:
            "The ultimate in exclusivity. Includes first-class flights, luxury resort stays, and unique experiences."
    }
];

export const statsList = [
    {
        icon: "Path",
        title: "Over 500 Destinations",
        content: "Explored across the globe"
    },
    {
        icon: "GlobeHemisphereEast",
        title: "10,000+ Satisfied Clients",
        content: "From various parts of the world"
    },
    {
        icon: "AirplaneTilt",
        title: "1,200,000 Miles Traveled",
        content: "By our clients and partners"
    },
    {
        icon: "Coins",
        title: "150+ Exclusive Packages",
        content: "Designed to suit all tastes and preferences"
    }
];

export const serviceList = [
    {
        icon: "AirplaneTakeoff",
        name: "Flight Booking"
    },
    {
        icon: "HouseLine",
        name: "Hotel Reservations"
    },
    {
        icon: "CarProfile",
        name: "Car Rentals"
    },
    {
        icon: "MapTrifold",
        name: "Tour Packages"
    },
    {
        icon: "Shield",
        name: "Travel Insurance"
    },
    {
        icon: "FileText",
        name: "Visa Assistance"
    },
    {
        icon: "Sailboat",
        name: "Cruise Bookings"
    },
    {
        icon: "HandSwipeRight",
        name: "Local Guides"
    },
    {
        icon: "Confetti",
        name: "Event Planning"
    },
    {
        icon: "Taxi",
        name: "Airport Transfers"
    }
];

export const faqList = [
    {
        question: "How do I book a trip?",
        answer: "You can book a trip by selecting your desired destination, choosing your travel dates, and completing the booking process on our website. You can also contact our customer support for assistance."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, debit cards, bank transfers, and PayPal. For installment payments, please check the conditions of your credit card."
    },
    {
        question: "Can I cancel or change my booking?",
        answer: "Yes, you can cancel or change your booking depending on the policies of the package or service purchased. Please check the terms and conditions or contact our support for more details."
    },
    {
        question: "Do you offer travel insurance?",
        answer: "Yes, we offer travel insurance options that can be purchased along with your package. The insurance covers medical emergencies, cancellations, and other unforeseen events during your trip."
    },
    {
        question: "Do I need a visa to travel?",
        answer: "It depends on the destination. We recommend checking visa requirements in advance. We offer visa assistance services for many destinations."
    }
];
