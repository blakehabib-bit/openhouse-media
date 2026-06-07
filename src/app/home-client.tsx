"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsTDDK from "@/components/WhatIsTDDK";
import WhatWeDo from "@/components/WhatWeDo";
import TheSystem from "@/components/TheSystem";
import SuburbExclusivity from "@/components/SuburbExclusivity";
import Process3Steps from "@/components/Process3Steps";
import CaseStudyFeatured from "@/components/CaseStudyFeatured";
import FinalCTA from "@/components/FinalCTA";
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
        {page.whatIs && (
          <WhatIsTDDK eyebrow={page.whatIs.eyebrow} body={page.whatIs.body} />
        )}

        {page.whatWeDo && (
          <WhatWeDo
            title={page.whatWeDo.title}
            subtitle={page.whatWeDo.subtitle}
            items={page.whatWeDo.items}
          />
        )}

        {page.system && (
          <TheSystem
            title={page.system.title}
            subtitle={page.system.subtitle}
            pillars={page.system.pillars}
          />
        )}

        {page.suburbs && (
          <SuburbExclusivity
            title={page.suburbs.title}
            description={page.suburbs.description}
            steps={page.suburbs.steps}
            warningTitle={page.suburbs.warningTitle}
            warningText={page.suburbs.warningText}
            checkerTitle={page.suburbs.checkerTitle}
            checkerPlaceholder={page.suburbs.checkerPlaceholder}
            checkerButtonText={page.suburbs.checkerButtonText}
            checkerFootnote={page.suburbs.checkerFootnote}
            popupTitle={page.suburbs.popupTitle}
            popupSubtitle={page.suburbs.popupSubtitle}
            popupNamePlaceholder={page.suburbs.popupNamePlaceholder}
            popupEmailPlaceholder={page.suburbs.popupEmailPlaceholder}
            popupButtonText={page.suburbs.popupButtonText}
            popupFootnote={page.suburbs.popupFootnote}
          />
        )}

        {page.process && (
          <Process3Steps
            title={page.process.title}
            subtitle={page.process.subtitle}
            steps={page.process.steps}
          />
        )}

        {page.caseStudy && (
          <CaseStudyFeatured
            eyebrow={page.caseStudy.eyebrow}
            client={page.caseStudy.client}
            objective={page.caseStudy.objective}
            solution={page.caseStudy.solution}
            resultHeadline={page.caseStudy.resultHeadline}
            resultDetail={page.caseStudy.resultDetail}
            image={page.caseStudy.image}
          />
        )}

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
