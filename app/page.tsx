import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { StatsSection } from "@/components/sections/stats";
import { BenefitsSection } from "@/components/sections/benefits";
import { PlansSection } from "@/components/sections/plans";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <StatsSection />
      <BenefitsSection />
      <PlansSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
