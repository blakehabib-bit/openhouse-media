"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SuburbExclusivity from "@/components/SuburbExclusivity";
import SocialProof from "@/components/SocialProof";
import InvestmentSection from "@/components/InvestmentSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import QualificationSection from "@/components/QualificationSection";
import FinalCTA from "@/components/FinalCTA";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface HomePageClientProps {
  data: any;
}

export default function HomePageClient({ data }: HomePageClientProps) {
  const page = data;

  return (
    <>
      {/* Hero + Navbar wrapper */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 text-white">
        <Navbar
          brand={page.navbar.brand}
          links={page.navbar.links}
          ctaText={page.navbar.ctaText}
          ctaHref={page.navbar.ctaHref}
        />
        <HeroSection
          badge={page.hero.badge}
          headlinePart1={page.hero.headlinePart1}
          headlineHighlight={page.hero.headlineHighlight}
          headlinePart2={page.hero.headlinePart2}
          subheadline={page.hero.subheadline}
          description={page.hero.description}
          stats={page.hero.stats}
          ctaPrimaryText={page.hero.ctaPrimaryText}
          ctaSecondaryText={page.hero.ctaSecondaryText}
          ctaFootnote={page.hero.ctaFootnote}
        />
      </section>

      <main>
        <SuburbExclusivity
          title={page.suburbs.title}
          description={page.suburbs.description}
          steps={page.suburbs.steps}
          listings={page.suburbs.listings}
          warningTitle={page.suburbs.warningTitle}
          warningText={page.suburbs.warningText}
        />

        <SocialProof
          title={page.socialProof.title}
          subtitle={page.socialProof.subtitle}
          testimonials={page.socialProof.testimonials}
          beforeTitle={page.socialProof.beforeTitle}
          beforeItems={page.socialProof.beforeItems}
          afterTitle={page.socialProof.afterTitle}
          afterItems={page.socialProof.afterItems}
        />

        <InvestmentSection
          title={page.investment.title}
          subtitle={page.investment.subtitle}
          valueStack={page.investment.valueStack}
          totalValue={page.investment.totalValue}
          priceLabel={page.investment.priceLabel}
          price={page.investment.price}
          pricePeriod={page.investment.pricePeriod}
          priceNote={page.investment.priceNote}
          includes={page.investment.includes}
          roiTitle={page.investment.roiTitle}
          monthlyInvestment={page.investment.monthlyInvestment}
          avgCommission={page.investment.avgCommission}
          breakEven={page.investment.breakEven}
          avgListings={page.investment.avgListings}
          avgListingsDetail={page.investment.avgListingsDetail}
        />

        <ProcessTimeline
          title={page.process.title}
          subtitle={page.process.subtitle}
          steps={page.process.steps}
        />

        <QualificationSection
          title={page.qualification.title}
          subtitle={page.qualification.subtitle}
          dontApply={page.qualification.dontApply}
          perfectIf={page.qualification.perfectIf}
        />

        <FAQ
          title={page.faq.title}
          items={page.faq.items}
        />

        <FinalCTA
          headline={page.cta.headline}
          subheadline={page.cta.subheadline}
          description={page.cta.description}
          formTitle={page.cta.formTitle}
          submitText={page.cta.submitText}
          footnote={page.cta.footnote}
          trustBadges={page.cta.trustBadges}
        />
      </main>

      <Footer
        brand={page.footer.brand}
        tagline={page.footer.tagline}
        quickLinks={page.footer.quickLinks}
        resources={page.footer.resources}
        email={page.footer.email}
        phone={page.footer.phone}
        location={page.footer.location}
        copyright={page.footer.copyright}
      />

      <StickyCTA
        text={page.stickyCta.text}
        buttonText={page.stickyCta.buttonText}
        buttonHref={page.stickyCta.buttonHref}
      />
    </>
  );
}
