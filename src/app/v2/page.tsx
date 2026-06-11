"use client";

import { ReactNode } from "react";
import LeadCapturePopup from "@/components/LeadCapturePopup";

/**
 * HOMEPAGE V3 — PREVIEW ONLY
 * Lives at /v2 so it never touches the live homepage (/).
 * Every booking CTA is wired to the existing LeadCapturePopup flow
 * (captures name/email/suburb -> /api/capture-lead -> /check-availability).
 * Once approved, this becomes the real homepage and the copy moves into Tina.
 */

function CtaButton({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <LeadCapturePopup
      buttonClassName={className}
      buttonContent={children}
      popupTitle="Check your suburb"
      popupSubtitle="Enter your details and we'll confirm if your suburb is available."
      popupNamePlaceholder="Your name"
      popupEmailPlaceholder="Your email"
      popupSuburbPlaceholder="Your suburb"
      popupButtonText="Check My Suburb →"
      popupFootnote="No spam. We'll only reach out if your suburb is available."
    />
  );
}

export default function HomeV2Preview() {
  return (
    <div className="v2-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            DD<span>.</span>
          </div>
          <CtaButton className="nav-cta">Check My Suburb</CtaButton>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="wrap hero-inner">
            <div className="pill">
              <span className="pill-dot" />5 suburbs claimed this month
            </div>
            <h1>
              Become the only agent sellers can{" "}
              <span className="underline">find in your suburb.</span>
            </h1>
            <p className="hero-sub">
              Suburb-exclusive video, social management, and paid ads. One agent
              per area. Locked in. Done for you.
            </p>
            <div className="hero-cta-row">
              <CtaButton className="btn">
                Check If My Suburb Is Available →
              </CtaButton>
            </div>
            <div className="trust-row">
              <span>
                <span className="check">✓</span> Free 15-min call
              </span>
              <span>
                <span className="check">✓</span> NZ &amp; AU agents
              </span>
            </div>
          </div>
        </section>

        {/* STAT BAR */}
        <section className="stat-bar">
          <div className="wrap">
            <div className="stat-bar-grid">
              <div>
                <div className="stat-num">3,000+</div>
                <div className="stat-label">Videos produced</div>
              </div>
              <div>
                <div className="stat-num">$75K</div>
                <div className="stat-label">GCI from 1 video</div>
              </div>
              <div>
                <div className="stat-num">14 days</div>
                <div className="stat-label">From signed to live</div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section problem">
          <div className="narrow center">
            <h2>The agent who shows up online wins the listing.</h2>
            <p className="section-sub">
              Sellers in your suburb pick the agent they see most. Right now,
              that probably isn&apos;t you.
            </p>
          </div>
          <div className="wrap">
            <ul className="pain-list">
              <li>
                <span className="pain-x">✕</span> You know you should be making
                content but you&apos;re flat out listing &amp; selling
              </li>
              <li>
                <span className="pain-x">✕</span> The agent down the road posts
                daily and gets the appraisals you should be getting
              </li>
              <li>
                <span className="pain-x">✕</span> Every week you wait, your
                competitor builds a deeper moat in your patch
              </li>
            </ul>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="section founder">
          <div className="narrow">
            <div className="center">
              <h2>
                Built by a former agent. Not a marketer guessing at real estate.
              </h2>
            </div>
            <div className="founder-card">
              <p className="founder-quote">
                &ldquo;I was a real estate agent from 18 to 22. TDDK is the
                system I wish I&apos;d had then.&rdquo;
              </p>
              <div className="founder-meta">
                <div className="founder-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/uploads/blake.headshot.jpg" alt="Blake Habib" />
                </div>
                <div>
                  <div className="founder-name">Blake Habib</div>
                  <div className="founder-title">
                    Founder, The Digital Door Knock
                  </div>
                </div>
              </div>
              <div className="founder-creds">
                <div className="founder-cred">
                  <div className="founder-cred-num">4 yrs</div>
                  <div className="founder-cred-label">Real Estate Agent</div>
                </div>
                <div className="founder-cred">
                  <div className="founder-cred-num">3,000+</div>
                  <div className="founder-cred-label">Videos Produced</div>
                </div>
                <div className="founder-cred">
                  <div className="founder-cred-num">6 yrs</div>
                  <div className="founder-cred-label">Video Production</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="cta-band">
          <div className="wrap">
            <p>Your suburb might still be open. Check before it isn&apos;t.</p>
            <CtaButton className="btn btn-ghost btn-sm">
              Check Availability →
            </CtaButton>
          </div>
        </section>

        {/* SYSTEM */}
        <section className="section system">
          <div className="narrow center">
            <span className="section-tag">The System</span>
            <h2>Three pillars. One connected machine.</h2>
            <p className="section-sub">
              Content earns attention. Management keeps you front of mind. Ads
              turn it into appraisals.
            </p>
          </div>
          <div className="wrap">
            <div className="pillar-grid">
              <div className="pillar">
                <div className="pillar-num">01</div>
                <h3>Content Creation</h3>
                <ul className="pillar-list">
                  <li>Professionally Produced Video Reels</li>
                  <li>High-quality lifestyle photos</li>
                  <li>Ideas and scripts created for your core area</li>
                </ul>
                <div className="pillar-goal">
                  <span className="pillar-goal-label">Goal</span>Build profile.
                  Show personality.
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-num">02</div>
                <h3>Social Management</h3>
                <ul className="pillar-list">
                  <li>Reels edited and published weekly</li>
                  <li>Stories and carousels rolled out</li>
                  <li>Captions, hashtags, scheduling handled</li>
                </ul>
                <div className="pillar-goal">
                  <span className="pillar-goal-label">Goal</span>More touch
                  points. Nurture the audience.
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-num">03</div>
                <h3>Paid Ads</h3>
                <ul className="pillar-list">
                  <li>Profile awareness campaigns</li>
                  <li>Buyer lead generation</li>
                  <li>Seller lead generation</li>
                </ul>
                <div className="pillar-goal">
                  <span className="pillar-goal-label">Goal</span>New eyeballs.
                  Real appraisals.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXCLUSIVITY */}
        <section className="section exclusivity">
          <div className="wrap">
            <span className="section-tag">The Unfair Advantage</span>
            <h2>One agent per suburb. No exceptions.</h2>
            <div className="exclusivity-card">
              <div className="lock-icon">🔒</div>
              <p>
                Once your suburb is claimed, it&apos;s locked. Every reel, every
                ad, every dollar of attention we earn in your patch goes to you
                and only you.
              </p>
              <CtaButton className="btn btn-block">Check My Suburb →</CtaButton>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="section case" id="case">
          <div className="narrow">
            <div className="center">
              <span className="section-tag">Proof</span>
              <h2>3 listings from 1 video. $75K GCI.</h2>
              <p className="section-sub" style={{ color: "#555" }}>
                One piece of content. The right system behind it. Watch what
                happens.
              </p>
            </div>
            <div className="case-card">
              <div className="case-header">
                <span className="case-badge">Case Study</span>
                <span className="case-client">Harcourts Team Green</span>
              </div>
              <div className="case-stats">
                <div className="case-stat">
                  <div className="case-stat-num">3</div>
                  <div className="case-stat-label">Listings</div>
                </div>
                <div className="case-stat">
                  <div className="case-stat-num">1</div>
                  <div className="case-stat-label">Video</div>
                </div>
                <div className="case-stat">
                  <div className="case-stat-num">$75K</div>
                  <div className="case-stat-label">GCI</div>
                </div>
              </div>
              <p className="case-quote">
                &ldquo;One piece of content. Three new listings on the back of
                it. That&apos;s what happens when content earns attention and the
                system turns it into leads.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="narrow">
            <div className="center">
              <span className="section-tag">Common Questions</span>
              <h2>Before you book</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary>
                  What if my suburb is already taken?{" "}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  Two options. We add you to the waitlist for that suburb, or we
                  find a high-potential suburb nearby that&apos;s still open. You
                  keep the free audit either way.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  I&apos;ve been burnt by agencies before. Why is this different?{" "}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  Most agencies don&apos;t understand real estate. We do, deeply.
                  Blake spent 4 years as an agent. We&apos;re suburb-exclusive, so
                  we have skin in the game on your area specifically.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  Do I need to be on camera? <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  Yes. People list with people, not logos. Don&apos;t worry about
                  being polished, we coach you through what to say and how to say
                  it. Most agents are comfortable by their second shoot.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  How long does it take to see results?{" "}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  Profile growth is immediate. Lead enquiries usually start in
                  weeks 3-6 once ads have data. Listings typically follow in
                  months 2-4. This is a compounding system, not a vending
                  machine.
                </div>
              </details>
              <details className="faq-item">
                <summary>
                  I&apos;m in Australia. Do you operate here?{" "}
                  <span className="faq-icon">+</span>
                </summary>
                <div className="faq-answer">
                  Yes. We work across NZ and Australia. Brisbane, Sydney,
                  Melbourne, Gold Coast, Auckland, Wellington and beyond. If
                  you&apos;ve got a suburb, we can shoot it.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-lg final-cta">
          <div className="narrow">
            <h2>Ready to own your suburb?</h2>
            <p className="section-sub">
              Book a free 15-min call. We&apos;ll audit your area, show you
              what&apos;s possible, and tell you straight whether we&apos;re a
              fit. No pitch deck. No pressure.
            </p>
            <CtaButton className="btn">Book My Free 15-Min Call →</CtaButton>
            <div className="trust-row" style={{ marginTop: "24px" }}>
              <span>
                <span className="check">✓</span> 15 mins
              </span>
              <span>
                <span className="check">✓</span> Free suburb audit
              </span>
              <span>
                <span className="check">✓</span> No pressure
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="v2-footer">
        <div className="wrap">
          <div className="footer-logo">
            DD<span>.</span>
          </div>
          <p className="footer-tag">
            Suburb-exclusive video and social media systems for Australasia&apos;s
            most ambitious real estate agents.
          </p>
          <p className="footer-contact">
            <a href="mailto:blake@thedigitaldoorknock.com">
              blake@thedigitaldoorknock.com
            </a>
          </p>
          <p className="footer-copy">
            © 2026 THE DIGITAL DOOR KNOCK. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

const css = `
  .v2-root{
    --bg:#0a0a0a;
    --surface:#141414;
    --cream:#f5f1ea;
    --text:#ffffff;
    --muted:#a8a8a8;
    --accent:#a78bfa;
    --accent-strong:#7c3aed;
    --gold:#d4af6a;
    --success:#22c55e;
    --danger:#ef4444;
    --radius:14px;
    --maxw-page:1100px;
    --maxw-content:680px;
    font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Inter,system-ui,sans-serif;
    background:var(--bg);
    color:var(--text);
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
    min-height:100vh;
  }
  .v2-root *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
  .v2-root img{max-width:100%;display:block}
  .v2-root a{color:inherit}

  /* LAYOUT */
  .v2-root .wrap{max-width:var(--maxw-page);margin:0 auto;padding:0 20px}
  .v2-root .narrow{max-width:var(--maxw-content);margin:0 auto;padding:0 20px}
  .v2-root .section{padding:68px 0}
  .v2-root .section-lg{padding:88px 0}

  /* NAV */
  .v2-root .nav{
    position:sticky;top:0;z-index:50;
    background:rgba(40,22,90,.72);
    backdrop-filter:blur(12px);
    -webkit-backdrop-filter:blur(12px);
    border-bottom:1px solid rgba(167,139,250,.12);
  }
  .v2-root .nav-inner{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:14px 20px;
    max-width:var(--maxw-page);
    margin:0 auto;
  }
  .v2-root .logo{font-weight:800;font-size:18px;letter-spacing:.5px}
  .v2-root .logo span{color:var(--accent)}
  .v2-root .nav-cta{
    background:var(--accent-strong);
    color:#fff;
    text-decoration:none;
    padding:10px 18px;
    border-radius:8px;
    font-size:13px;
    font-weight:700;
    transition:transform .15s;
    border:none;
    cursor:pointer;
  }
  .v2-root .nav-cta:hover{transform:translateY(-1px)}

  /* HERO */
  .v2-root .hero{
    position:relative;
    padding:48px 0 56px;
    overflow:hidden;
    background:linear-gradient(155deg,#312e81 0%,#5b21b6 38%,#3b0764 68%,#0a0a0a 100%);
  }
  .v2-root .hero-glow{
    position:absolute;top:-100px;left:50%;transform:translateX(-50%);
    width:800px;height:800px;
    background:radial-gradient(circle,rgba(124,58,237,.18) 0%,transparent 55%);
    pointer-events:none;z-index:0;
  }
  .v2-root .hero-inner{position:relative;z-index:1;text-align:center}
  .v2-root .pill{
    display:inline-flex;
    align-items:center;
    gap:8px;
    background:rgba(167,139,250,.12);
    border:1px solid rgba(167,139,250,.3);
    padding:8px 14px;
    border-radius:999px;
    font-size:12px;
    font-weight:600;
    color:var(--accent);
    margin-bottom:24px;
    letter-spacing:.3px;
  }
  .v2-root .pill-dot{
    width:8px;height:8px;background:var(--success);border-radius:50%;
    animation:v2pulse 2s infinite;
  }
  @keyframes v2pulse{
    0%{box-shadow:0 0 0 0 rgba(34,197,94,.7)}
    70%{box-shadow:0 0 0 10px rgba(34,197,94,0)}
    100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}
  }
  .v2-root h1{
    font-size:42px;
    line-height:1.05;
    font-weight:800;
    letter-spacing:-1.2px;
    margin-bottom:20px;
    max-width:680px;
    margin-left:auto;
    margin-right:auto;
  }
  .v2-root h1 .underline{
    background:linear-gradient(180deg,transparent 60%,rgba(167,139,250,.4) 60%);
    padding:0 2px;
  }
  .v2-root .hero-sub{
    font-size:18px;
    color:var(--muted);
    margin-bottom:32px;
    max-width:560px;
    margin-left:auto;
    margin-right:auto;
    line-height:1.55;
  }
  .v2-root .hero-cta-row{
    display:flex;
    gap:12px;
    justify-content:center;
    flex-wrap:wrap;
    margin-bottom:24px;
  }
  .v2-root .btn{
    display:inline-block;
    padding:16px 26px;
    background:linear-gradient(135deg,var(--accent-strong) 0%,#a855f7 100%);
    color:#fff;
    font-size:16px;
    font-weight:700;
    border:none;
    border-radius:10px;
    cursor:pointer;
    text-decoration:none;
    transition:transform .15s,box-shadow .15s;
    letter-spacing:.2px;
    box-shadow:0 8px 30px -8px rgba(124,58,237,.6);
  }
  .v2-root .btn:hover,.v2-root .btn:active{
    transform:translateY(-1px);
    box-shadow:0 12px 40px -8px rgba(124,58,237,.8);
  }
  .v2-root .btn-block{display:block;width:100%;text-align:center}
  .v2-root .btn-ghost{
    background:transparent;
    border:1.5px solid #333;
    box-shadow:none;
  }
  .v2-root .btn-ghost:hover{border-color:var(--accent)}
  .v2-root .btn-sm{padding:12px 22px;font-size:14px}
  .v2-root .trust-row{
    display:flex;
    justify-content:center;
    gap:18px;
    flex-wrap:wrap;
    font-size:12px;
    color:var(--muted);
  }
  .v2-root .trust-row span{display:flex;align-items:center;gap:6px}
  .v2-root .check{color:var(--success);font-weight:800}

  /* STAT BAR */
  .v2-root .stat-bar{
    background:linear-gradient(180deg,#0f0a14 0%,#0a0a0a 100%);
    border-top:1px solid #1a1a1a;
    border-bottom:1px solid #1a1a1a;
    padding:28px 0;
  }
  .v2-root .stat-bar-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:12px 8px;
    text-align:center;
  }
  .v2-root .stat-num{
    font-size:30px;
    font-weight:800;
    color:var(--gold);
    line-height:1;
    letter-spacing:-.5px;
  }
  .v2-root .stat-label{
    font-size:11px;
    color:var(--muted);
    margin-top:6px;
    text-transform:uppercase;
    letter-spacing:1.2px;
  }

  /* SECTION HEADINGS */
  .v2-root .section-tag{
    color:var(--accent);
    font-size:12px;
    font-weight:700;
    letter-spacing:2px;
    text-transform:uppercase;
    margin-bottom:14px;
    display:block;
  }
  .v2-root h2{
    font-size:30px;
    line-height:1.15;
    font-weight:800;
    letter-spacing:-.5px;
    margin-bottom:16px;
  }
  .v2-root .section-sub{
    color:var(--muted);
    font-size:17px;
    margin-bottom:40px;
    line-height:1.6;
  }
  .v2-root .center{text-align:center}

  /* PROBLEM */
  .v2-root .problem{background:#0a0a0a}
  .v2-root .pain-list{
    list-style:none;
    max-width:540px;
    margin:0 auto;
  }
  .v2-root .pain-list li{
    padding:14px 0;
    display:flex;
    gap:14px;
    align-items:flex-start;
    font-size:16px;
    color:#d8d8d8;
  }
  .v2-root .pain-x{color:var(--danger);font-weight:800;flex-shrink:0;margin-top:2px;font-size:18px}

  /* FOUNDER */
  .v2-root .founder{background:var(--cream);color:#1a1a1a}
  .v2-root .founder h2{color:#0a0a0a}
  .v2-root .founder .section-tag{color:var(--accent-strong)}
  .v2-root .founder-card{
    background:#fff;
    border:1px solid #e5dfd3;
    border-radius:var(--radius);
    padding:32px 24px;
    box-shadow:0 4px 24px rgba(0,0,0,.04);
  }
  .v2-root .founder-quote{
    font-size:19px;
    line-height:1.5;
    color:#222;
    margin-bottom:20px;
    font-weight:500;
  }
  .v2-root .founder-meta{
    display:flex;
    align-items:center;
    gap:14px;
    padding-top:18px;
    border-top:1px solid #ece5d6;
  }
  .v2-root .founder-avatar{
    width:64px;height:64px;
    border-radius:50%;
    overflow:hidden;
    background:linear-gradient(135deg,var(--accent-strong),var(--gold));
    flex-shrink:0;
  }
  .v2-root .founder-avatar img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center top;
  }
  .v2-root .founder-name{font-weight:700;font-size:15px;color:#1a1a1a}
  .v2-root .founder-title{font-size:13px;color:#666;margin-top:2px}
  .v2-root .founder-creds{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:12px;
    margin-top:24px;
    padding-top:24px;
    border-top:1px solid #ece5d6;
  }
  .v2-root .founder-cred{text-align:center}
  .v2-root .founder-cred-num{
    font-size:22px;
    font-weight:800;
    color:var(--accent-strong);
    line-height:1;
  }
  .v2-root .founder-cred-label{
    font-size:11px;
    color:#666;
    margin-top:6px;
    text-transform:uppercase;
    letter-spacing:.8px;
  }

  /* SYSTEM */
  .v2-root .system{background:#0a0a0a}
  .v2-root .pillar-grid{
    display:grid;
    gap:16px;
    margin-top:32px;
  }
  .v2-root .pillar{
    background:linear-gradient(180deg,#1a1325 0%,#141014 100%);
    border:1px solid rgba(167,139,250,.2);
    border-radius:var(--radius);
    padding:28px 24px;
    position:relative;
  }
  .v2-root .pillar-num{
    position:absolute;
    top:24px;right:24px;
    font-size:48px;
    font-weight:800;
    color:rgba(167,139,250,.15);
    line-height:1;
  }
  .v2-root .pillar h3{font-size:20px;margin-bottom:12px;font-weight:700}
  .v2-root .pillar-desc{
    color:var(--muted);
    font-size:14px;
    margin-bottom:18px;
    line-height:1.55;
  }
  .v2-root .pillar-list{list-style:none}
  .v2-root .pillar-list li{
    font-size:14px;
    color:#d0d0d0;
    padding:6px 0;
    display:flex;
    gap:10px;
    align-items:flex-start;
  }
  .v2-root .pillar-list li::before{
    content:"";
    width:6px;height:6px;
    background:var(--accent);
    border-radius:50%;
    flex-shrink:0;
    margin-top:8px;
  }
  .v2-root .pillar-goal{
    margin-top:20px;
    font-size:13px;
    color:var(--gold);
    font-weight:600;
  }
  .v2-root .pillar-goal-label{
    color:var(--muted);
    text-transform:uppercase;
    letter-spacing:1px;
    font-size:10px;
    margin-right:6px;
  }

  /* EXCLUSIVITY */
  .v2-root .exclusivity{
    background:linear-gradient(180deg,#0a0a0a 0%,#1a0f2e 100%);
    text-align:center;
  }
  .v2-root .exclusivity-card{
    max-width:520px;
    margin:24px auto 0;
    background:var(--surface);
    border:1px solid rgba(167,139,250,.3);
    border-radius:var(--radius);
    padding:36px 28px;
  }
  .v2-root .lock-icon{
    width:60px;height:60px;
    margin:0 auto 20px;
    background:linear-gradient(135deg,var(--accent-strong),var(--gold));
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:28px;
  }
  .v2-root .exclusivity-card p{
    font-size:16px;
    color:#d8d8d8;
    margin-bottom:24px;
    line-height:1.55;
  }

  /* CASE STUDY */
  .v2-root .case{background:var(--cream);color:#1a1a1a}
  .v2-root .case h2{color:#0a0a0a}
  .v2-root .case .section-tag{color:var(--accent-strong)}
  .v2-root .case-card{
    background:#fff;
    border:1px solid #e5dfd3;
    border-radius:var(--radius);
    padding:28px 24px;
    box-shadow:0 4px 24px rgba(0,0,0,.05);
  }
  .v2-root .case-header{
    display:flex;
    align-items:center;
    gap:14px;
    margin-bottom:20px;
    padding-bottom:18px;
    border-bottom:1px solid #ece5d6;
  }
  .v2-root .case-badge{
    background:#0a0a0a;
    color:var(--gold);
    padding:6px 12px;
    border-radius:6px;
    font-size:11px;
    font-weight:700;
    letter-spacing:1px;
    text-transform:uppercase;
  }
  .v2-root .case-client{font-size:15px;font-weight:700;color:#1a1a1a}
  .v2-root .case-stats{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:10px;
    margin-bottom:20px;
  }
  .v2-root .case-stat{
    background:#0a0a0a;
    color:#fff;
    padding:18px 10px;
    border-radius:10px;
    text-align:center;
  }
  .v2-root .case-stat-num{
    font-size:26px;
    font-weight:800;
    color:var(--gold);
    line-height:1;
  }
  .v2-root .case-stat-label{
    font-size:10px;
    color:#a8a8a8;
    margin-top:6px;
    text-transform:uppercase;
    letter-spacing:1px;
  }
  .v2-root .case-quote{
    font-style:italic;
    font-size:15px;
    line-height:1.55;
    color:#333;
  }

  /* FAQ */
  .v2-root .faq{background:#0a0a0a;border-top:1px solid #1a1a1a}
  .v2-root .faq-list{margin-top:24px}
  .v2-root .faq-item{
    border-bottom:1px solid #1f1f1f;
    padding:20px 0;
  }
  .v2-root .faq-item summary{
    list-style:none;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-weight:600;
    font-size:16px;
    color:#fff;
    cursor:pointer;
    gap:12px;
  }
  .v2-root .faq-item summary::-webkit-details-marker{display:none}
  .v2-root .faq-icon{
    color:var(--accent);
    font-size:22px;
    transition:transform .2s;
    flex-shrink:0;
  }
  .v2-root .faq-item[open] .faq-icon{transform:rotate(45deg)}
  .v2-root .faq-answer{
    padding-top:14px;
    color:var(--muted);
    font-size:15px;
    line-height:1.6;
  }

  /* FINAL CTA */
  .v2-root .final-cta{
    background:linear-gradient(180deg,#0a0a0a 0%,#1a0f2e 100%);
    text-align:center;
  }
  .v2-root .final-cta h2{font-size:34px;margin-bottom:16px}
  .v2-root .final-cta .section-sub{margin-bottom:28px}

  /* INLINE CTA BAND */
  .v2-root .cta-band{
    background:rgba(124,58,237,.08);
    border-top:1px solid rgba(167,139,250,.15);
    border-bottom:1px solid rgba(167,139,250,.15);
    padding:32px 0;
    text-align:center;
  }
  .v2-root .cta-band p{
    font-size:18px;
    font-weight:600;
    margin-bottom:16px;
    color:#e8e8e8;
  }

  /* FOOTER */
  .v2-root .v2-footer{
    background:#000;
    padding:40px 0;
    border-top:1px solid #1a1a1a;
    text-align:center;
  }
  .v2-root .footer-logo{font-size:18px;font-weight:800;margin-bottom:12px}
  .v2-root .footer-logo span{color:var(--accent)}
  .v2-root .footer-tag{
    font-size:14px;
    color:var(--muted);
    max-width:320px;
    margin:0 auto 20px;
  }
  .v2-root .footer-contact{font-size:13px;color:var(--muted);margin-bottom:8px}
  .v2-root .footer-contact a{color:var(--accent);text-decoration:none}
  .v2-root .footer-copy{
    font-size:11px;
    color:#555;
    margin-top:20px;
    letter-spacing:.5px;
  }

  /* DESKTOP */
  @media(min-width:760px){
    .v2-root h1{font-size:60px;letter-spacing:-2px}
    .v2-root h2{font-size:38px}
    .v2-root .hero{padding:80px 0 96px}
    .v2-root .section{padding:88px 0}
    .v2-root .pillar-grid{grid-template-columns:repeat(3,1fr)}
    .v2-root .case-stats{grid-template-columns:repeat(3,1fr)}
    .v2-root .case-header{justify-content:flex-start}
  }
`;
