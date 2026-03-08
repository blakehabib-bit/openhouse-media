import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
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
                  { type: "string", name: "href", label: "Link (anchor)" },
                ],
              },
              { type: "string", name: "ctaText", label: "CTA Button Text" },
              { type: "string", name: "ctaHref", label: "CTA Button Link" },
            ],
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
                  { type: "string", name: "label", label: "Label" },
                ],
              },
              { type: "string", name: "ctaPrimaryText", label: "Primary CTA Text" },
              { type: "string", name: "ctaSecondaryText", label: "Secondary CTA Text" },
              { type: "string", name: "ctaFootnote", label: "Footnote under buttons" },
            ],
          },

          // ── SUBURB EXCLUSIVITY ──
          {
            type: "object",
            name: "suburbs",
            label: "Suburb Exclusivity Section",
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
                  { type: "string", name: "description", label: "Step Description" },
                ],
              },
              {
                type: "object",
                name: "listings",
                label: "Suburb Listings",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "Suburb Name" },
                  { type: "string", name: "detail", label: "Detail Text" },
                  { type: "string", name: "status", label: "Status (OPEN or CLAIMED)" },
                ],
              },
              { type: "string", name: "warningTitle", label: "Warning Box Title" },
              { type: "string", name: "warningText", label: "Warning Box Text", ui: { component: "textarea" } },
            ],
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
                  { type: "string", name: "agency", label: "Agency & Suburb" },
                  { type: "image", name: "image", label: "Photo" },
                ],
              },
              { type: "string", name: "beforeTitle", label: "Before Title" },
              {
                type: "object",
                name: "beforeItems",
                label: "Before Items",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Text" },
                ],
              },
              { type: "string", name: "afterTitle", label: "After Title" },
              {
                type: "object",
                name: "afterItems",
                label: "After Items",
                list: true,
                fields: [
                  { type: "string", name: "text", label: "Text" },
                ],
              },
            ],
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
                  { type: "string", name: "price", label: "Price" },
                ],
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
                  { type: "string", name: "text", label: "Text" },
                ],
              },
              { type: "string", name: "roiTitle", label: "ROI Section Title" },
              { type: "string", name: "monthlyInvestment", label: "Monthly Investment" },
              { type: "string", name: "avgCommission", label: "Avg Commission" },
              { type: "string", name: "breakEven", label: "Break Even" },
              { type: "string", name: "avgListings", label: "Average Listings Won" },
              { type: "string", name: "avgListingsDetail", label: "Listings Detail" },
            ],
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
                      { type: "string", name: "text", label: "Text" },
                    ],
                  },
                ],
              },
            ],
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
                  { type: "string", name: "description", label: "Description" },
                ],
              },
              {
                type: "object",
                name: "perfectIf",
                label: "Perfect If You",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                ],
              },
            ],
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
                  { type: "string", name: "text", label: "Text" },
                ],
              },
            ],
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
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
                ],
              },
            ],
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
                  { type: "image", name: "image", label: "Thumbnail Image (fallback if no video)" },
                ],
              },
            ],
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
              { type: "string", name: "agentSuburb", label: "Agent Suburb" },
              {
                type: "object",
                name: "stats",
                label: "Transformation Stats",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Metric Label" },
                  { type: "string", name: "before", label: "Before Value" },
                  { type: "string", name: "after", label: "After Value" },
                ],
              },
              { type: "string", name: "quote", label: "Agent Quote", ui: { component: "textarea" } },
            ],
          },

          // ── STICKY CTA ──
          {
            type: "object",
            name: "stickyCta",
            label: "Sticky CTA Bar",
            fields: [
              { type: "string", name: "text", label: "Banner Text" },
              { type: "string", name: "buttonText", label: "Button Text" },
              { type: "string", name: "buttonHref", label: "Button Link" },
            ],
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
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              {
                type: "object",
                name: "resources",
                label: "Resources",
                list: true,
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "href", label: "Link" },
                ],
              },
              { type: "string", name: "email", label: "Email" },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "location", label: "Location" },
              { type: "string", name: "copyright", label: "Copyright Text" },
            ],
          },
        ],
      },
    ],
  },
});
