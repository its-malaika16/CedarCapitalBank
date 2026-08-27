import ProfessionalHeroSection from '../../components/Personal/ProfessionalAccount/professional-hero-section';
import SecuritySection from '../../components/Personal/security-section'; 
import PricingPlans from '../../components/Home/pricing-plan-section';

export default function ProfessionalAccount() {
  return (
    <>
        <ProfessionalHeroSection />
        <SecuritySection />
        <PricingPlans />
    </>
  );
}