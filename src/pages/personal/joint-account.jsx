import JointHeroSection from '../../components/Personal/JointAccount/joint-hero-section'; 
import SpendTogetherSection from '../../components/Personal/JointAccount/spend-together-section';
import JointCardsSection from '../../components/Personal/JointAccount/joint-cards-section';
import SecuritySection from '../../components/Personal/security-section'; 
import PricingPlans from '../../components/Home/pricing-plan-section';

export default function JointAccount() {
  return (
    <>
        <JointHeroSection />
        <SpendTogetherSection />
        <JointCardsSection />
        <SecuritySection />
        <PricingPlans />
    </>
  );
}