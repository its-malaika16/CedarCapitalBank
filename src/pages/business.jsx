import BusinessHeroSection from "../components/Business/business-hero-section";
import BusinessFeatures from "../components/Business/business-features-section";
import FinanceFeaturesSection from "../components/Business/finance-features-section";

export default function home() {
    return (
        <>
            <BusinessHeroSection />
            <BusinessFeatures />
            <FinanceFeaturesSection />
        </>
    );
}