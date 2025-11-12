import { LandingHeader } from "../components/LandingHeader.tsx";
import LandingCalc from "../components/LandingCalc.tsx";
import LandingHero from "../components/LandingHero.tsx";
import LandingAdvantages from "../components/LandingAdvantages.tsx";
import LandingInterface from "../components/LandingInterface.tsx";
import LandingHowItWork from "../components/LandingHowItWork.tsx";
import LandingConnectBroker from "../components/LandingConnectBroker.tsx";

export default function LandingPage() {
    return (
        <main>
            <LandingHeader />
            <LandingHero />
            <LandingAdvantages />
            <LandingInterface />
            <LandingHowItWork />
            <LandingConnectBroker />
            <LandingCalc />
        </main>
    );
}
