import AboutHeroSection from "../components/About/about-hero-section";
import WhoWeAreSection from "../components/About/who-we-are-section";
import WhatWeDoSection from "../components/About/what-we-do-section";
import MissionVisionSection from "../components/About/mission-vision-section";
import StepsSection from '../components/Home/steps-section';
import PricingPlans from '../components/Home/pricing-plan-section';

export default function About() {
    return (
        <>
            <AboutHeroSection />
            <WhoWeAreSection />
            <WhatWeDoSection />
            <MissionVisionSection />
            <StepsSection />
            <PricingPlans />
        </>
    );
}