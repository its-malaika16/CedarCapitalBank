import SavingsHeroSection from '../../components/Personal/SavingsAccount/savings-hero-section';
import SavingsPromoSection from '../../components/Personal/SavingsAccount/savings-promo-section';
import SavingsSteps from '../../components/Personal/SavingsAccount/savings-steps-section';
import SavingsBenefits from '../../components/Personal/SavingsAccount/saving-benefits-section';
import SavingsGrowthSection from '../../components/Personal/SavingsAccount/savings-growth-section';
import SavingsGoalsSection from '../../components/Personal/SavingsAccount/saving-goals-section';
import PricingPlans from '../../components/Home/pricing-plan-section';

export default function SavingsAccount() {
  return (
    <>
        <SavingsHeroSection />
        <SavingsPromoSection />
        <SavingsSteps />
        <SavingsBenefits />
        <SavingsGrowthSection />
        <SavingsGoalsSection />
        <PricingPlans />
    </>
  );
}