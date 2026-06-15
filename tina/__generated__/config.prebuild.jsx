// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        fields: [
          // ── NAVBAR ──
          {
            type: "object",
            name: "navbar",
            label: "Navigation Bar",
            fields: [
              { type: "string", name: "brand", label: "Brand Name" },
              {
                type: "object",
                name: "links",
                label: "Nav Links",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link (anchor)" }
                ]
              },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaHref", label: "CTA Button Link" }
            ]
          },
          // ── HERO ──
          {
            type: "object",
            name: "hero",
            label: "Hero Section",
            fields: [
              { type: "string", name: "badge", label: "Top Badge Text" },
              { type: "string", name: "headlinePart1", label: "Headline Part 1 (before highlight)" },
              { type: "string", name: "headlineHighlight", label: "Headline Highlighted Text" },
              { type: "string", name: "headlinePart2", label: "Headline Part 2 (after highlight)" },
              { type: "string", name: "subheadline", label: "Subheadline" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "ctaPrimaryText", label: "Primary CTA Text" },
              { type: "string", name: "ctaSecondaryText", label: "Secondary CTA Text" },
              { type: "string", name: "ctaFootnote", label: "Footnote under buttons" }
            ]
          },
          // ── ABOUT BLAKE ──
          {
            type: "object",
            name: "aboutBlake",
            label: "About Blake Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "videoFile", label: "Video File Path (e.g. /uploads/blake-intro.mp4)" },
              { type: "string", name: "youtubeUrl", label: "YouTube Video URL (e.g. https://youtube.com/shorts/...)" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value (e.g. 3,000+)" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          // ── AREA EXCLUSIVITY ──
          {
            type: "object",
            name: "suburbs",
            label: "Area Exclusivity Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "description", label: "Section Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "steps",
                label: "How It Works Steps",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Step Title" },
                  { type: "string", name: "description", label: "Step Description" }
                ]
              },
              { type: "string", name: "checkerTitle", label: "Area Checker Title" },
              { type: "string", name: "checkerPlaceholder", label: "Area Checker Placeholder" },
              { type: "string", name: "checkerButtonText", label: "Area Checker Button Text" },
              { type: "string", name: "checkerFootnote", label: "Area Checker Footnote" },
              { type: "string", name: "warningTitle", label: "Warning Box Title" },
              { type: "string", name: "warningText", label: "Warning Box Text", ui: { component: "textarea" } },
              { type: "string", name: "popupTitle", label: "Popup: Title" },
              { type: "string", name: "popupSubtitle", label: "Popup: Subtitle (use {suburb} for the area name)" },
              { type: "string", name: "popupNamePlaceholder", label: "Popup: Name Field Placeholder" },
              { type: "string", name: "popupEmailPlaceholder", label: "Popup: Email Field Placeholder" },
              { type: "string", name: "popupButtonText", label: "Popup: Button Text" },
              { type: "string", name: "popupFootnote", label: "Popup: Small Footnote" }
            ]
          },
          // ── SOCIAL PROOF / TESTIMONIALS ──
          {
            type: "object",
            name: "socialProof",
            label: "Social Proof Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "testimonials",
                label: "Testimonials",
                list: true,
                fields: [
                  { type: "string", name: "stat", label: "Headline Stat" },
                  { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "Person Name" },
                  { type: "string", name: "agency", label: "Agency & Area" },
                  { type: "image", name: "image", label: "Card Photo" },
                  { type: "image", name: "headshot", label: "Headshot (small circle)" }
                ]
              },
              { type: "string", name: "featuredTitle", label: "Featured Logos Title (e.g. Work Featured On)" },
              {
                type: "object",
                name: "featuredLogos",
                label: "Featured Logos",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Company Name" },
                  { type: "image", name: "logo", label: "Logo Image" }
                ]
              },
              { type: "string", name: "beforeTitle", label: "Before Title" },
              {
                type: "object",
                name: "beforeItems",
                label: "Before Items",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Text" }
                ]
              },
              { type: "string", name: "afterTitle", label: "After Title" },
              {
                type: "object",
                name: "afterItems",
                label: "After Items",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Text" }
                ]
              }
            ]
          },
          // ── INVESTMENT / PRICING ──
          {
            type: "object",
            name: "investment",
            label: "Investment Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "valueStack",
                label: "Value Stack Items",
                list: true,
                fields: [
                  { type: "string", name: "role", label: "Role Title" },
                  { type: "string", name: "detail", label: "Detail" },
                  { type: "string", name: "price", label: "Price" }
                ]
              },
              { type: "string", name: "totalValue", label: "Total Market Value" },
              { type: "string", name: "priceLabel", label: "Price Label" },
              { type: "string", name: "price", label: "Your Price" },
              { type: "string", name: "pricePeriod", label: "Price Period (e.g. /mo)" },
              { type: "string", name: "priceNote", label: "Price Footnote" },
              {
                type: "object",
                name: "includes",
                label: "What's Included",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Text" }
                ]
              },
              { type: "string", name: "roiTitle", label: "ROI Section Title" },
              { type: "string", name: "monthlyInvestment", label: "Monthly Investment" },
              { type: "string", name: "avgCommission", label: "Avg Commission" },
              { type: "string", name: "breakEven", label: "Break Even" },
              { type: "string", name: "avgListings", label: "Average Listings Won" },
              { type: "string", name: "avgListingsDetail", label: "Listings Detail" }
            ]
          },
          // ── PROCESS / TIMELINE ──
          {
            type: "object",
            name: "process",
            label: "Process Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "steps",
                label: "Timeline Steps",
                list: true,
                fields: [
                  { type: "string", name: "week", label: "Week Label" },
                  { type: "string", name: "title", label: "Step Title" },
                  {
                    type: "object",
                    name: "bullets",
                    label: "Bullet Points",
                    list: true,
                    fields: [
                      { type: "string", name: "text", label: "Text" }
                    ]
                  }
                ]
              }
            ]
          },
          // ── QUALIFICATION ──
          {
            type: "object",
            name: "qualification",
            label: "Qualification Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "dontApply",
                label: "Don't Apply If",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" }
                ]
              },
              {
                type: "object",
                name: "perfectIf",
                label: "Perfect If You",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" }
                ]
              }
            ]
          },
          // ── FINAL CTA ──
          {
            type: "object",
            name: "cta",
            label: "Final CTA Section",
            fields: [
              { type: "string", name: "headline", label: "Headline" },
              { type: "string", name: "subheadline", label: "Subheadline" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "formTitle", label: "Form Title" },
              { type: "string", name: "submitText", label: "Submit Button Text" },
              { type: "string", name: "footnote", label: "Footnote under form" },
              {
                type: "object",
                name: "trustBadges",
                label: "Trust Badges",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Text" }
                ]
              }
            ]
          },
          // ── FAQ ──
          {
            type: "object",
            name: "faq",
            label: "FAQ Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              {
                type: "object",
                name: "items",
                label: "Questions",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          // ── CONTENT PORTFOLIO ──
          {
            type: "object",
            name: "portfolio",
            label: "Content Portfolio Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              {
                type: "object",
                name: "items",
                label: "Portfolio Items",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Content Title" },
                  { type: "string", name: "type", label: "Content Type (e.g. Property Tour, Brand Reel)" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "stat", label: "Key Stat (e.g. 47K Views)" },
                  { type: "string", name: "videoFile", label: "Video File Path (e.g. /uploads/reels/filename.mp4)" },
                  { type: "string", name: "reelUrl", label: "Instagram Reel URL (fallback embed)" },
                  { type: "image", name: "image", label: "Thumbnail Image (fallback if no video)" }
                ]
              }
            ]
          },
          // ── BEFORE/AFTER SHOWCASE ──
          {
            type: "object",
            name: "showcase",
            label: "Before/After Showcase Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "agentName", label: "Agent Name" },
              { type: "string", name: "agentSuburb", label: "Agent Area" },
              {
                type: "object",
                name: "stats",
                label: "Transformation Stats",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Metric Label" },
                  { type: "string", name: "before", label: "Before Value" },
                  { type: "string", name: "after", label: "After Value" }
                ]
              },
              { type: "string", name: "quote", label: "Agent Quote", ui: { component: "textarea" } }
            ]
          },
          // ── CHECK AVAILABILITY PAGE ──
          {
            type: "object",
            name: "checkAvailability",
            label: "Check Availability Page",
            fields: [
              { type: "string", name: "headline", label: "Headline (use {suburb} for area name)" },
              { type: "string", name: "subtitle", label: "Subtitle" },
              { type: "string", name: "scarcityWarning", label: "Scarcity Warning", ui: { component: "textarea" } },
              {
                type: "object",
                name: "stats",
                label: "Stats Row",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Value" },
                  { type: "string", name: "label", label: "Label" }
                ]
              },
              { type: "string", name: "bookingTitle", label: "Booking Section Title" },
              { type: "string", name: "bookingSubtitle", label: "Booking Section Subtitle" },
              { type: "string", name: "auditTitle", label: "Audit Section Title" },
              { type: "string", name: "auditIntro", label: "Audit Intro Text", ui: { component: "textarea" } },
              {
                type: "object",
                name: "auditItems",
                label: "Audit Value Props",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "auditFootnote", label: "Audit Footnote" },
              { type: "string", name: "footnote", label: "Bottom Footnote" }
            ]
          },
          // ── FREE AUDIT SECTION ──
          {
            type: "object",
            name: "freeAudit",
            label: "Free Area Audit Section",
            fields: [
              { type: "string", name: "title", label: "Section Title" },
              { type: "string", name: "intro", label: "Intro Text", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Audit Value Props",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              },
              { type: "string", name: "footnote", label: "Footnote" },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaHref", label: "CTA Button Link" },
              {
                type: "string",
                name: "trustBadges",
                label: "Trust Badges",
                list: true
              }
            ]
          },
          // ── STICKY CTA ──
          {
            type: "object",
            name: "stickyCta",
            label: "Sticky CTA Bar",
            fields: [
              { type: "string", name: "text", label: "Banner Text" },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "buttonHref", label: "Button Link" }
            ]
          },
          // ── FOOTER ──
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "brand", label: "Brand Name" },
              { type: "string", name: "tagline", label: "Tagline" },
              {
                type: "object",
                name: "quickLinks",
                label: "Quick Links",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              },
              {
                type: "object",
                name: "resources",
                label: "Resources",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" }
                ]
              },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "copyright", label: "Copyright Text" }
            ]
          }
        ]
      },
      // ============================================================
      // HOMEPAGE (live /) — content/home/index.json
      // ============================================================
      {
        name: "home",
        label: "Homepage",
        path: "content/home",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "string",
            name: "ctaLabel",
            label: "Button label (used on every booking button)"
          },
          {
            type: "object",
            name: "nav",
            label: "Navigation",
            fields: [
              { type: "string", name: "videoLinkLabel", label: "Video link label" }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "headlineLead", label: "Headline (start)", ui: { component: "textarea" } },
              { type: "string", name: "headlineUnderline", label: "Headline (underlined end)" },
              { type: "string", name: "subhead", label: "Sub-headline", ui: { component: "textarea" } },
              { type: "string", name: "trust", label: "Trust items", list: true }
            ]
          },
          {
            type: "object",
            name: "stats",
            label: "Stat bar",
            list: true,
            fields: [
              { type: "string", name: "num", label: "Number" },
              { type: "string", name: "label", label: "Label" }
            ]
          },
          {
            type: "object",
            name: "problem",
            label: "Problem",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              { type: "string", name: "pains", label: "Pain points", list: true, ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "proof",
            label: "Proof / Case study",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              { type: "string", name: "videoFile", label: "Reel video file path (e.g. /uploads/case-study.mp4) \u2014 leave blank to hide" },
              { type: "string", name: "caseBadge", label: "Case badge" },
              { type: "string", name: "caseClient", label: "Case client" },
              {
                type: "object",
                name: "caseStats",
                label: "Case stats",
                list: true,
                fields: [
                  { type: "string", name: "num", label: "Number" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "founder",
            label: "Founder",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "image", name: "photo", label: "Headshot" },
              {
                type: "object",
                name: "creds",
                label: "Credibility chips",
                list: true,
                fields: [
                  { type: "string", name: "num", label: "Number" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "ctaBand",
            label: "Mid-page CTA band",
            fields: [{ type: "string", name: "text", label: "Text" }]
          },
          {
            type: "object",
            name: "system",
            label: "The System",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              {
                type: "object",
                name: "pillars",
                label: "Pillars",
                list: true,
                fields: [
                  { type: "string", name: "num", label: "Number" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "deliverables", label: "Deliverables", list: true }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "exclusivity",
            label: "Exclusivity",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "agenda",
            label: "What happens on the call",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "num", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "items",
                label: "Questions",
                list: true,
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCta",
            label: "Final CTA",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "trust", label: "Trust items", list: true }
            ]
          },
          {
            type: "object",
            name: "prefooter",
            label: "Pre-footer strip (door to /video)",
            fields: [
              { type: "string", name: "text", label: "Text" },
              { type: "string", name: "linkLabel", label: "Link label" }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "copyright", label: "Copyright" }
            ]
          }
        ]
      },
      // ============================================================
      // VIDEO PAGE (/video) — content/video/index.json
      // ============================================================
      {
        name: "video",
        label: "Video Page",
        path: "content/video",
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "quoteEmail", label: "Quote enquiry email" },
          {
            type: "object",
            name: "nav",
            label: "Navigation",
            fields: [
              {
                type: "object",
                name: "links",
                label: "Nav links",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Anchor (e.g. #services)" }
                ]
              },
              { type: "string", name: "ctaLabel", label: "Nav button label" }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "heroVideo", label: "Background video file path (e.g. /uploads/hero-reel.mp4) \u2014 leave blank for solid background" },
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "Button label" },
              {
                type: "object",
                name: "stats",
                label: "Stats",
                list: true,
                fields: [
                  { type: "string", name: "num", label: "Number" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "cards",
                label: "Service cards",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
                  { type: "string", name: "items", label: "Bullet items", list: true }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "reels",
            label: "Reels carousel",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "items",
                label: "Reels (up to 8)",
                list: true,
                fields: [
                  { type: "string", name: "url", label: "Instagram reel URL (e.g. https://www.instagram.com/reel/ABC123/)" },
                  { type: "string", name: "label", label: "Caption label (optional)" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "agentBanner",
            label: "Agent banner (coral)",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "string", name: "linkLabel", label: "Link label" }
            ]
          },
          {
            type: "object",
            name: "process",
            label: "Process",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "steps",
                label: "Steps",
                list: true,
                fields: [
                  { type: "string", name: "num", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "body", label: "Body", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "founder",
            label: "Founder",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "body", label: "Body", ui: { component: "textarea" } },
              { type: "image", name: "photo", label: "Headshot" },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "role", label: "Role" }
            ]
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ",
            fields: [
              { type: "string", name: "kicker", label: "Kicker" },
              { type: "string", name: "heading", label: "Heading" },
              {
                type: "object",
                name: "items",
                label: "Questions",
                list: true,
                fields: [
                  { type: "string", name: "q", label: "Question" },
                  { type: "string", name: "a", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "quote",
            label: "Quote CTA",
            fields: [
              { type: "string", name: "heading", label: "Heading" },
              { type: "string", name: "sub", label: "Sub-text", ui: { component: "textarea" } },
              { type: "string", name: "cta", label: "Quote button label" },
              { type: "string", name: "agentCta", label: "Agent button label" }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "tagline", label: "Tagline" },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "copyright", label: "Copyright" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
