import ProfessionalHeroSection from '../../components/Personal/ProfessionalAccount/professional-hero-section';
import FreelancerFeatures from '../../components/Personal/ProfessionalAccount/freelance-features-section';
import CashbackSection from '../../components/Personal/ProfessionalAccount/cashback-section';
import AnalyticsSection from '../../components/Personal/ProfessionalAccount/analytics-section';
import ProfessionalStepsSection from '../../components/Personal/ProfessionalAccount/professional-steps-section';
import SecuritySection from '../../components/Personal/security-section'; 
import PricingPlans from '../../components/Home/pricing-plan-section';

export default function ProfessionalAccount() {
  return (
    <>
        <ProfessionalHeroSection />
        <FreelancerFeatures />
        <CashbackSection />
        <AnalyticsSection />
        <ProfessionalStepsSection />
        <SecuritySection />
        <PricingPlans />
    </>
  );
}