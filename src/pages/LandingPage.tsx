import { LandingHeader } from "../components/LandingHeader.tsx";
import LandingCalc from "../components/LandingCalc.tsx";
import LandingHero from "../components/LandingHero.tsx";
import LandingAdvantages from "../components/LandingAdvantages.tsx";
import LandingInterface from "../components/LandingInterface.tsx";
import LandingHowItWork from "../components/LandingHowItWork.tsx";
import LandingConnectBroker from "../components/LandingConnectBroker.tsx";
import type { JSX } from "react";
import LandingCases from "../components/LandingCases.tsx";
import LandingComparsion from "../components/LandingComparsion.tsx";
import LandingSecurity from "../components/LandingSecurity.tsx";
import LandingStats from "../components/LandingStats.tsx";
import LandingReviews from "../components/LandingReviews.tsx";
import Pricing from "../components/Pricing.tsx";
import FAQ from "../components/FAQ.tsx";
import CTA from "../components/CTA.tsx";
import Footer from "../components/Footer.tsx";

export default function LandingPage(): JSX.Element {
    return (
        <main>
            <LandingHeader />
            <LandingHero />
            <LandingAdvantages />
            <LandingInterface />
            <LandingHowItWork />
            <LandingConnectBroker />
            <LandingCalc />
            <LandingCases />
            <LandingComparsion />
            <LandingSecurity />
            <LandingStats />
            <LandingReviews />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
