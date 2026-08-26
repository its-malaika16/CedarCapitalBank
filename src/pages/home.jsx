import HomeHeroSection from '../components/Home/home-hero-section';
import DigitalBanking from '../components/Home/digital-banking-section';
import SecuritySection from '../components/Home/security-section';
import TestimonialsSection from '../components/Home/testimonials-section';
import StepsSection from '../components/Home/steps-section';
import SupportSection from '../components/Home/support-section';
import StatsSection from '../components/Home/stats-section';
import PricingPlans from '../components/Home/pricing-plan-section';

export default function home() {
  return (
    <>
    <HomeHeroSection/>
    <DigitalBanking />
    <SecuritySection />
    <TestimonialsSection />
    <StepsSection />
    <SupportSection />
    <StatsSection />
    <PricingPlans />
    </>
  );
}