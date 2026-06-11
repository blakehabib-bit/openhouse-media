import type { Metadata } from "next";

/**
 * /video — DD. Video (Brisbane brand & business videography)
 * Built per claude-code-video-page-instructions.md + video-page.html.
 * Deliberately a different colour world (dark green) from the homepage.
 * All styles scoped under .video-root so the green palette never bleeds into
 * the homepage, and the homepage palette never bleeds in here.
 * Fonts inherit the main site's system font stack (no new font added).
 *
 * PENDING ASSETS (blocked on Blake — never invent):
 *   - 8 client reels in #work (files/embeds + permission labels, lazy-loaded)  [VIDEOS]
 *   - One-off + retainer starting prices, OR remove the "From" lines           [PRICE]
 *   - National news outlet logo/link in founder block                          [NEWS]
 *   - #quote wired to enquiry form / booking link (mailto fallback for now)    [BOOKING]
 *   - Instagram / TikTok URLs in footer                                        [SOCIALS]
 */

export const metadata: Metadata = {
  title: "Video Production Brisbane | The Digital Door Knock",
  description:
    "Brisbane video production by the team behind 3,000+ videos. One-off shoots and monthly retainer content for brands, businesses and real estate agents. Shot, edited, delivered.",
  openGraph: {
    title: "DD. Video | Brisbane Video Production",
    description:
      "One-off shoots and monthly content retainers by the team behind 3,000+ videos.",
    locale: "en_AU",
    type: "website",
  },
};

export default function VideoPage() {
  return (
    <div className="video-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav>
        <div className="wrap">
          <a className="logo" href="/video">
            DD. <span>video</span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
            <a className="nav-cta" href="#quote">
              Get a quote
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <p className="kicker">Video production, Brisbane</p>
          <h1>Brisbane video production by the team behind 3,000+ videos.</h1>
          <p>
            One-off shoots and monthly content retainers for brands, businesses
            and real estate agents. Shot, edited, delivered. No fluff in
            between.
          </p>
          <a className="btn" href="#quote">
            Get a quote →
          </a>
          <div className="stats">
            <div>
              <strong>3,000+</strong>
              <span>Videos produced</span>
            </div>
            <div>
              <strong>6 yrs</strong>
              <span>In production</span>
            </div>
            <div>
              <strong>7 days</strong>
              <span>Standard turnaround</span>
            </div>
          </div>
        </div>
      </header>

      <section className="alt" id="services">
        <div className="wrap">
          <p className="kicker">Services</p>
          <h2 style={{ fontSize: "34px" }}>Two ways to work with us.</h2>
          <div className="grid-2">
            <div className="card">
              <h3>One-off shoots</h3>
              <p>
                A launch, an event, a brand video, a property. One brief, one
                shoot day, edits delivered inside a week.
              </p>
              <ul>
                <li>Half or full day shoot</li>
                <li>4K video and drone where it earns its place</li>
                <li>Edited deliverables cut for where they&apos;ll live</li>
                <li>Vertical and horizontal versions included</li>
              </ul>
            </div>
            <div className="card">
              <h3>Monthly content retainers</h3>
              <p>
                Consistent content without hiring an in-house team. We plan it,
                shoot it, edit it and hand it back ready to post.
              </p>
              <ul>
                <li>Monthly shoot day at your place or on location</li>
                <li>Batch of edited reels and cutdowns every month</li>
                <li>Content planning and shot lists handled</li>
                <li>Priority turnaround, locked monthly rate</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="agent-banner">
            <div>
              <h3>Real estate agent? Read this first.</h3>
              <p>
                We&apos;ll happily shoot your content. But content alone gets you
                seen, the full Digital Door Knock system gets you listings:
                strategy, social management, paid ads and your suburb locked so
                no competitor can use us. If you&apos;re an agent, that&apos;s
                the better conversation to have.
              </p>
            </div>
            <a href="/">See the full system →</a>
          </div>
        </div>
      </section>

      <section className="alt" id="process">
        <div className="wrap">
          <p className="kicker">Process</p>
          <h2 style={{ fontSize: "34px" }}>From enquiry to delivery.</h2>
          <div className="step">
            <div className="step-num">1</div>
            <div>
              <h3>Tell us what you need</h3>
              <p>
                Quick enquiry, then a short call. We scope the shoot, lock the
                date and quote you a fixed price. No surprises later.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div>
              <h3>Shoot day</h3>
              <p>
                We turn up with a plan and a shot list, not just a camera.
                You&apos;ll know exactly what we&apos;re capturing and why before
                we roll.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div>
              <h3>Delivered, ready to post</h3>
              <p>
                Edited deliverables inside 7 days, cut for the platforms
                they&apos;ll actually live on. One round of revisions included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="kicker">Who&apos;s behind it</p>
          <h2 style={{ fontSize: "34px" }}>
            Six years. 3,000+ videos. One standard.
          </h2>
          <p
            className="muted"
            style={{ maxWidth: "680px", marginTop: "18px", fontSize: "17px" }}
          >
            DD. Video is the production arm of The Digital Door Knock, run by
            founder Blake Habib. Six years of production across real estate,
            brands and businesses, 3,000+ videos delivered, and work featured on
            national news. We&apos;re not a videographer with a website.
            We&apos;re a content machine with a shoot calendar.
          </p>
          <div className="founder-row">
            <div className="founder-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/uploads/blake.headshot.jpg" alt="Blake Habib" />
            </div>
            <div>
              <div className="founder-name">Blake Habib</div>
              <div className="founder-role muted">
                Founder, The Digital Door Knock
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt" id="faq">
        <div className="wrap">
          <p className="kicker">Common questions</p>
          <h2 style={{ fontSize: "34px" }}>Before you enquire</h2>
          <div style={{ marginTop: "24px" }}>
            <details className="faq-item">
              <summary>How fast is turnaround?</summary>
              <p>
                Standard is 7 days from shoot to delivery. Retainer clients get
                priority. If you&apos;ve got a hard deadline, tell us up front
                and we&apos;ll tell you straight if we can hit it.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do you travel outside Brisbane?</summary>
              <p>
                Yes. Gold Coast and Sunshine Coast regularly, and further for the
                right project. Travel is quoted up front, never added after.
              </p>
            </details>
            <details className="faq-item">
              <summary>Do we own the footage?</summary>
              <p>
                You own the edited deliverables outright. Raw footage is
                available, just ask when we quote.
              </p>
            </details>
            <details className="faq-item">
              <summary>Can you handle the posting too?</summary>
              <p>
                For real estate agents, yes, that&apos;s the full Digital Door
                Knock system. For brands and businesses we deliver post-ready
                content and can advise on rollout.
              </p>
            </details>
            <details className="faq-item">
              <summary>What does it cost?</summary>
              <p>
                Every job is quoted fixed before we book a date. Tell us what you
                need and we&apos;ll come back with a number, usually same day.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section id="quote">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "38px", maxWidth: "640px", margin: "0 auto 16px" }}>
            Got a project? Let&apos;s price it.
          </h2>
          <p
            className="muted"
            style={{ maxWidth: "520px", margin: "0 auto 32px", fontSize: "17px" }}
          >
            Tell us what you&apos;re after and we&apos;ll come back with a fixed
            quote and the next available shoot dates. Usually same day.
          </p>
          {/* PENDING [BOOKING]: wire to enquiry form / booking link.
              mailto fallback uses Blake's real address for now. */}
          <a
            className="btn"
            href="mailto:blake@thedigitaldoorknock.com?subject=Video%20production%20enquiry"
          >
            Get a quote →
          </a>
          <span style={{ display: "inline-block", width: "12px" }} />
          <a className="btn-ghost" href="/">
            I&apos;m a real estate agent →
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p style={{ fontWeight: 700, color: "var(--v-text)", fontSize: "18px" }}>
            DD.
          </p>
          <p style={{ maxWidth: "420px", margin: "10px auto" }}>
            Video production and suburb-exclusive marketing systems, Brisbane and
            beyond.
          </p>
          <p>
            <a href="mailto:blake@thedigitaldoorknock.com">
              blake@thedigitaldoorknock.com
            </a>
          </p>
          <p style={{ marginTop: "16px" }}>
            © 2026 The Digital Door Knock. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* Palette from video-page.html :root, exact. Scoped to .video-root.
   Vars renamed with --v- prefix to avoid any collision with the app. */
const css = `
  .video-root{
    --font-heading:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Inter,system-ui,sans-serif;
    --font-body:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Inter,system-ui,sans-serif;
    --v-bg:#0E1F1A;
    --v-bg-alt:#132A23;
    --v-card:#1A3029;
    --v-line:#234137;
    --v-accent:#1D9E75;
    --v-accent-hover:#17855F;
    --v-accent-light:#5DCAA5;
    --v-text:#F4F6F5;
    --v-muted:#93A8A0;
    --v-coral-bg:#FAECE7;
    --v-coral-text:#712B13;
    --v-coral-link:#993C1D;
    background:var(--v-bg);
    color:var(--v-text);
    font-family:var(--font-body);
    line-height:1.6;
    min-height:100vh;
  }
  .video-root *{margin:0;padding:0;box-sizing:border-box}
  .video-root h1,.video-root h2,.video-root h3{font-family:var(--font-heading);line-height:1.2;font-weight:700}
  .video-root .wrap{max-width:1100px;margin:0 auto;padding:0 24px}
  .video-root .btn{display:inline-block;background:var(--v-accent);color:#fff;font-weight:600;font-size:16px;padding:14px 28px;border-radius:8px;text-decoration:none;transition:background .2s}
  .video-root .btn:hover{background:var(--v-accent-hover)}
  .video-root .btn-ghost{display:inline-block;border:1px solid var(--v-accent-light);color:var(--v-accent-light);font-weight:600;font-size:16px;padding:13px 27px;border-radius:8px;text-decoration:none}
  .video-root .kicker{color:var(--v-accent-light);font-size:13px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;margin-bottom:12px}
  .video-root section{padding:88px 0}
  .video-root .muted{color:var(--v-muted)}

  .video-root nav{position:sticky;top:0;background:rgba(14,31,26,.92);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-bottom:1px solid var(--v-line);z-index:50}
  .video-root nav .wrap{display:flex;align-items:center;justify-content:space-between;padding-top:16px;padding-bottom:16px}
  .video-root .logo{color:var(--v-text);font-weight:700;font-size:20px;text-decoration:none}
  .video-root .logo span{color:var(--v-accent-light);font-weight:400;font-size:15px}
  .video-root .nav-links{display:flex;gap:28px;align-items:center}
  .video-root .nav-links a{color:var(--v-muted);text-decoration:none;font-size:15px}
  .video-root .nav-links a:hover{color:var(--v-text)}
  .video-root .nav-cta{background:var(--v-accent);color:#fff !important;padding:10px 18px;border-radius:8px;font-weight:600}

  .video-root .hero{text-align:center;padding:96px 0 64px}
  .video-root .hero h1{font-size:clamp(34px,5vw,54px);max-width:820px;margin:0 auto 20px}
  .video-root .hero p{font-size:19px;max-width:640px;margin:0 auto 32px;color:var(--v-muted)}
  .video-root .stats{display:flex;justify-content:center;gap:48px;margin-top:56px;flex-wrap:wrap}
  .video-root .stats div{text-align:center}
  .video-root .stats strong{display:block;font-size:28px;font-weight:700}
  .video-root .stats span{font-size:14px;color:var(--v-muted)}

  .video-root .reel-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:40px}
  .video-root .reel{aspect-ratio:9/16;background:var(--v-card);border-radius:12px;overflow:hidden;position:relative;border:1px solid var(--v-line);display:flex;align-items:center;justify-content:center}
  .video-root .reel video,.video-root .reel iframe{width:100%;height:100%;object-fit:cover;border:0}
  .video-root .reel .tag{position:absolute;bottom:10px;left:10px;background:rgba(14,31,26,.85);color:var(--v-text);font-size:12px;padding:4px 10px;border-radius:6px}

  .video-root .alt{background:var(--v-bg-alt)}
  .video-root .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:40px}
  .video-root .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:40px}
  .video-root .card{background:var(--v-card);border:1px solid var(--v-line);border-radius:14px;padding:32px 28px}
  .video-root .card h3{font-size:21px;margin-bottom:10px}
  .video-root .card p{color:var(--v-muted);font-size:15.5px}
  .video-root .card ul{list-style:none;margin-top:18px}
  .video-root .card li{color:var(--v-text);font-size:15.5px;padding:7px 0;border-bottom:1px solid var(--v-line)}
  .video-root .card li:last-child{border-bottom:0}
  .video-root .card li::before{content:"✓";color:var(--v-accent-light);margin-right:10px;font-weight:700}
  .video-root .price-note{margin-top:18px;font-size:14px;color:var(--v-accent-light);font-weight:600}

  .video-root .step{display:flex;gap:20px;align-items:flex-start;margin-top:36px}
  .video-root .step-num{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--v-accent);color:#fff;font-weight:700;display:flex;align-items:center;justify-content:center;font-size:17px}
  .video-root .step h3{font-size:19px;margin-bottom:4px}
  .video-root .step p{color:var(--v-muted);font-size:15.5px;max-width:560px}

  .video-root .agent-banner{background:var(--v-coral-bg);color:var(--v-coral-text);border-radius:14px;padding:32px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
  .video-root .agent-banner h3{color:var(--v-coral-text);font-size:21px;margin-bottom:6px}
  .video-root .agent-banner p{font-size:15.5px;max-width:560px}
  .video-root .agent-banner a{color:var(--v-coral-link);font-weight:700;text-decoration:none;white-space:nowrap;font-size:16px}

  .video-root .founder-row{display:flex;align-items:center;gap:20px;margin-top:32px}
  .video-root .founder-photo{width:88px;height:88px;border-radius:50%;overflow:hidden;flex-shrink:0;border:1px solid var(--v-line)}
  .video-root .founder-photo img{width:100%;height:100%;object-fit:cover;object-position:center top}
  .video-root .founder-name{font-weight:700;font-size:16px}
  .video-root .founder-role{font-size:14px;margin-top:2px}
  .video-root .pending-inline{margin-top:8px;font-size:12px;color:var(--v-accent-light);border:1px dashed var(--v-line);border-radius:8px;padding:6px 10px;display:inline-block}

  .video-root .faq-item{border-bottom:1px solid var(--v-line);padding:22px 0}
  .video-root .faq-item summary{font-size:17px;font-weight:600;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
  .video-root .faq-item summary::-webkit-details-marker{display:none}
  .video-root .faq-item summary::after{content:"+";color:var(--v-accent-light);font-size:22px}
  .video-root .faq-item[open] summary::after{content:"−"}
  .video-root .faq-item p{color:var(--v-muted);margin-top:12px;max-width:680px;font-size:15.5px}

  .video-root footer{border-top:1px solid var(--v-line);padding:48px 0;text-align:center}
  .video-root footer p{color:var(--v-muted);font-size:14px}
  .video-root footer a{color:var(--v-accent-light);text-decoration:none}
  .video-root .socials{margin:16px 0}
  .video-root .socials a{margin:0 10px}

  @media(max-width:760px){
    .video-root .reel-grid{grid-template-columns:repeat(2,1fr)}
    .video-root .stats{gap:28px}
    .video-root .nav-links a:not(.nav-cta){display:none}
    .video-root .grid-2,.video-root .grid-3{grid-template-columns:1fr}
  }
`;
