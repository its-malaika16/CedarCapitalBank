import AccountHeroSection from '../../components/Personal/BankAccount/account-hero-section'; 
import StatsSection from '../../components/Personal/BankAccount/stats-section';
import FeaturesSection from '../../components/Personal/BankAccount/features-section';
import SecuritySection from '../../components/Personal/security-section';
import AccountSwitching from '../../components/Personal/BankAccount/account-switching-section';
import StepsSection from '../../components/Home/steps-section';
import PricingPlanSection from '../../components/Home/pricing-plan-section';

export default function BankAccount() {
  return (
    <>
        <AccountHeroSection />
        <StatsSection />
        <FeaturesSection />
        <SecuritySection />
        <AccountSwitching />
        <StepsSection />
        <PricingPlanSection />
    </>
  );
}