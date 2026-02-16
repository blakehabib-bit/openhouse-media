import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <BenefitsSection />
        <ProcessSection />
        <TestimonialsSection />
        <AboutSection />
        <GuaranteesSection />
        <FinalCTA />
        <FAQSection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
