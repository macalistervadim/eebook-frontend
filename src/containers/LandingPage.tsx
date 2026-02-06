import { LandingHeader } from "../components/landing/LandingHeader.tsx";
import LandingCalc from "../components/landing/LandingCalc.tsx";
import LandingHero from "../components/landing/LandingHero.tsx";
import LandingAdvantages from "../components/landing/LandingAdvantages.tsx";
import LandingHowItWork from "../components/landing/LandingHowItWork.tsx";
import LandingConnectBroker from "../components/landing/LandingConnectBroker.tsx";
import type { JSX } from "react";
import LandingCases from "../components/landing/LandingCases.tsx";
import LandingComparsion from "../components/landing/LandingComparsion.tsx";
import LandingSecurity from "../components/landing/LandingSecurity.tsx";
import LandingStats from "../components/landing/LandingStats.tsx";
import LandingReviews from "../components/landing/LandingReviews.tsx";
import LandingPricing from "../components/landing/LandingPricing.tsx";
import FAQ from "../components/ui/FAQ.tsx";
import CTA from "../components/ui/CTA.tsx";
import Footer from "../components/ui/Footer.tsx";
import DashboardAnimated from "@/components/landing/LandingAnimated.tsx";

export default function LandingPage(): JSX.Element {
    return (
        <main className="bg-white dark:bg-slate-900 overflow-hidden">
            <LandingHeader />
            <LandingHero />
            <LandingAdvantages />
            {/*<LandingInterface />*/}
            <DashboardAnimated />
            <LandingHowItWork />
            <LandingConnectBroker />
            <LandingCalc />
            <LandingCases />
            <LandingComparsion />
            <LandingSecurity />
            <LandingStats />
            <LandingReviews />
            <LandingPricing />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}
