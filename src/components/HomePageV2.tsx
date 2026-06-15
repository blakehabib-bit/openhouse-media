"use client";

import { ReactNode, useEffect } from "react";
import LeadCapturePopup from "@/components/LeadCapturePopup";

const CALENDLY_URL =
  "https://calendly.com/blakehabib98/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7c3aed";

/**
 * Homepage (TDDK agent site). Content is driven by content/home/index.json
 * and editable via the Tina "home" collection. Booking CTAs use the existing
 * LeadCapturePopup (collects name/email/suburb -> /api/capture-lead -> /check-availability).
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Data = any;

function CtaButton({
  className,
  children,
  popupButtonText,
}: {
  className: string;
  children: ReactNode;
  popupButtonText: string;
}) {
  return (
    <LeadCapturePopup
      buttonClassName={className}
      buttonContent={children}
      popupTitle="Check your suburb"
      popupSubtitle="Enter your details and we'll check if your suburb is still free."
      popupNamePlaceholder="Your name"
      popupEmailPlaceholder="Your email"
      popupSuburbPlaceholder="Your suburb"
      popupButtonText={`${popupButtonText} →`}
      popupFootnote="No spam. We'll only reach out about your suburb."
    />
  );
}

export default function HomePageV2({ data }: { data: Data }) {
  const cta: string = data.ctaLabel;

  useEffect(() => {
    if (document.querySelector('script[data-calendly]')) return;
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    s.setAttribute("data-calendly", "1");
    document.body.appendChild(s);
  }, []);

  return (
    <div className="v2-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="nav-inner">
          <div className="logo">
            DD<span>.</span>
          </div>
          <div className="nav-right">
            <a href="/video" className="nav-textlink">
              {data.nav.videoLinkLabel}
            </a>
            <CtaButton className="nav-cta" popupButtonText={cta}>
              {cta}
            </CtaButton>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="wrap hero-inner">
            <h1>
              {data.hero.headlineLead}
              <span className="underline">{data.hero.headlineUnderline}</span>
            </h1>
            <p className="hero-sub">{data.hero.subhead}</p>
            <div className="hero-cta-row">
              <CtaButton className="btn" popupButtonText={cta}>
                {cta} →
              </CtaButton>
            </div>
            <div className="trust-row">
              {data.hero.trust.map((t: string, i: number) => (
                <span key={i}>
                  <span className="check">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* STAT BAR */}
        <section className="stat-bar">
          <div className="wrap">
            <div className="stat-bar-grid">
              {data.stats.map((s: Data, i: number) => (
                <div key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM */}
        <section className="section system">
          <div className="narrow center">
            <span className="section-tag">{data.system.kicker}</span>
            <h2>{data.system.heading}</h2>
            <p className="section-sub">{data.system.sub}</p>
          </div>
          <div className="wrap">
            <div className="pillar-grid">
              {data.system.pillars.map((p: Data, i: number) => (
                <div className="pillar" key={i}>
                  <div className="pillar-num">{p.num}</div>
                  <h3>{p.name}</h3>
                  <ul className="pillar-list">
                    {p.deliverables.map((d: string, j: number) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="section case" id="case">
          <div className="narrow">
            <div className="center">
              <span className="section-tag">{data.proof.kicker}</span>
              <h2>{data.proof.heading}</h2>
              <p className="section-sub" style={{ color: "#555" }}>
                {data.proof.sub}
              </p>
            </div>
            <div className="proof-single">
              {data.proof.videoFile && (
                <div className="proof-video">
                  {data.proof.videoFile.includes("instagram.com") ? (
                    <iframe
                      src={`${data.proof.videoFile.replace(/\/?$/, "").replace(/\/embed$/, "")}/embed/`}
                      allowFullScreen
                      scrolling="no"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      title="Case study reel"
                    />
                  ) : (
                    <video src={data.proof.videoFile} autoPlay muted loop playsInline controls />
                  )}
                </div>
              )}
              <div className="case-card">
                <div className="case-header">
                  <span className="case-badge">{data.proof.caseBadge}</span>
                  <span className="case-client">{data.proof.caseClient}</span>
                </div>
                <div className="case-stats">
                  {data.proof.caseStats.map((s: Data, i: number) => (
                    <div className="case-stat" key={i}>
                      <div className="case-stat-num">{s.num}</div>
                      <div className="case-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="section founder">
          <div className="narrow">
            <div className="center">
              <h2>{data.founder.heading}</h2>
            </div>
            <div className="founder-card">
              <p className="founder-quote">&ldquo;{data.founder.quote}&rdquo;</p>
              <div className="founder-meta">
                <div className="founder-avatar">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={data.founder.photo} alt={data.founder.name} />
                </div>
                <div>
                  <div className="founder-name">{data.founder.name}</div>
                  <div className="founder-title">{data.founder.title}</div>
                </div>
              </div>
              <div className="founder-creds">
                {data.founder.creds.map((c: Data, i: number) => (
                  <div className="founder-cred" key={i}>
                    <div className="founder-cred-num">{c.num}</div>
                    <div className="founder-cred-label">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MID-PAGE CTA */}
        <section className="cta-band">
          <div className="wrap">
            <p>{data.ctaBand.text}</p>
            <CtaButton className="btn btn-ghost btn-sm" popupButtonText={cta}>
              {cta} →
            </CtaButton>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section problem">
          <div className="narrow center">
            <h2>{data.problem.heading}</h2>
            <p className="section-sub">{data.problem.sub}</p>
          </div>
          <div className="wrap">
            <ul className="pain-list">
              {data.problem.pains.map((p: string, i: number) => (
                <li key={i}>
                  <span className="pain-x">✕</span> {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXCLUSIVITY */}
        <section className="section exclusivity">
          <div className="wrap">
            <span className="section-tag">{data.exclusivity.kicker}</span>
            <h2>{data.exclusivity.heading}</h2>
            <div className="exclusivity-card">
              <div className="lock-icon">🔒</div>
              <p>{data.exclusivity.body}</p>
              <CtaButton className="btn btn-block" popupButtonText={cta}>
                {cta} →
              </CtaButton>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="narrow">
            <div className="center">
              <span className="section-tag">{data.faq.kicker}</span>
              <h2>{data.faq.heading}</h2>
            </div>
            <div className="faq-list">
              {data.faq.items.map((f: Data, i: number) => (
                <details className="faq-item" key={i}>
                  <summary>
                    {f.q} <span className="faq-icon">+</span>
                  </summary>
                  <div className="faq-answer">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section-lg final-cta">
          <div className="narrow">
            <h2>{data.finalCta.heading}</h2>
            <p className="section-sub">{data.finalCta.body}</p>
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
            />
            <div className="trust-row" style={{ marginTop: "24px" }}>
              {data.finalCta.trust.map((t: string, i: number) => (
                <span key={i}>
                  <span className="check">✓</span> {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* PRE-FOOTER STRIP — quiet door to /video */}
      <section className="prefooter">
        <div className="wrap">
          <p>
            {data.prefooter.text} <a href="/video">{data.prefooter.linkLabel}</a>
          </p>
        </div>
      </section>

      <footer className="v2-footer">
        <div className="wrap">
          <div className="footer-logo">
            DD<span>.</span>
          </div>
          <p className="footer-tag">{data.footer.tagline}</p>
          <p className="footer-contact">
            <a href={`mailto:${data.footer.email}`}>{data.footer.email}</a>
          </p>
          <p className="footer-copy">{data.footer.copyright}</p>
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
    display:flex;justify-content:space-between;align-items:center;
    padding:14px 20px;max-width:var(--maxw-page);margin:0 auto;
  }
  .v2-root .logo{font-weight:800;font-size:18px;letter-spacing:.5px}
  .v2-root .logo span{color:var(--accent)}
  .v2-root .nav-right{display:flex;align-items:center;gap:18px}
  .v2-root .nav-textlink{
    color:var(--muted);text-decoration:none;font-size:14px;font-weight:500;
    transition:color .15s;white-space:nowrap;
  }
  .v2-root .nav-textlink:hover{color:#fff}
  @media(max-width:600px){.v2-root .nav-textlink{display:none}}
  .v2-root .nav-cta{
    background:var(--accent-strong);color:#fff;text-decoration:none;
    padding:10px 18px;border-radius:8px;font-size:13px;font-weight:700;
    transition:transform .15s;border:none;cursor:pointer;
  }
  .v2-root .nav-cta:hover{transform:translateY(-1px)}

  /* HERO */
  .v2-root .hero{
    position:relative;padding:48px 0 56px;overflow:hidden;
    background:linear-gradient(155deg,#312e81 0%,#5b21b6 38%,#3b0764 68%,#0a0a0a 100%);
  }
  .v2-root .hero-glow{
    position:absolute;top:-100px;left:50%;transform:translateX(-50%);
    width:800px;height:800px;
    background:radial-gradient(circle,rgba(124,58,237,.18) 0%,transparent 55%);
    pointer-events:none;z-index:0;
  }
  .v2-root .hero-inner{position:relative;z-index:1;text-align:center}
  .v2-root h1{
    font-size:42px;line-height:1.05;font-weight:800;letter-spacing:-1.2px;
    margin-bottom:20px;max-width:680px;margin-left:auto;margin-right:auto;
    white-space:pre-line;
  }
  .v2-root h1 .underline{
    background:linear-gradient(180deg,transparent 60%,rgba(167,139,250,.4) 60%);
    padding:0 2px;
  }
  .v2-root .hero-sub{
    font-size:18px;color:#d8d2ec;margin-bottom:32px;max-width:560px;
    margin-left:auto;margin-right:auto;line-height:1.55;
  }
  .v2-root .hero-cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:24px}
  .v2-root .btn{
    display:inline-block;padding:16px 26px;
    background:linear-gradient(135deg,var(--accent-strong) 0%,#a855f7 100%);
    color:#fff;font-size:16px;font-weight:700;border:none;border-radius:10px;
    cursor:pointer;text-decoration:none;transition:transform .15s,box-shadow .15s;
    letter-spacing:.2px;box-shadow:0 8px 30px -8px rgba(124,58,237,.6);
  }
  .v2-root .btn:hover,.v2-root .btn:active{transform:translateY(-1px);box-shadow:0 12px 40px -8px rgba(124,58,237,.8)}
  .v2-root .btn-block{display:block;width:100%;text-align:center}
  .v2-root .btn-ghost{background:transparent;border:1.5px solid #333;box-shadow:none}
  .v2-root .btn-ghost:hover{border-color:var(--accent)}
  .v2-root .btn-sm{padding:12px 22px;font-size:14px}
  .v2-root .trust-row{display:flex;justify-content:center;gap:18px;flex-wrap:wrap;font-size:12px;color:var(--muted)}
  .v2-root .hero .trust-row{color:#c9c2e4}
  .v2-root .trust-row span{display:flex;align-items:center;gap:6px}
  .v2-root .check{color:var(--success);font-weight:800}

  /* STAT BAR */
  .v2-root .stat-bar{
    background:linear-gradient(180deg,#0f0a14 0%,#0a0a0a 100%);
    border-top:1px solid #1a1a1a;border-bottom:1px solid #1a1a1a;padding:28px 0;
  }
  .v2-root .stat-bar-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px 8px;text-align:center}
  .v2-root .stat-num{font-size:30px;font-weight:800;color:var(--gold);line-height:1;letter-spacing:-.5px}
  .v2-root .stat-label{font-size:11px;color:var(--muted);margin-top:6px;text-transform:uppercase;letter-spacing:1.2px}

  /* SECTION HEADINGS */
  .v2-root .section-tag{color:var(--accent);font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;margin-bottom:14px;display:block}
  .v2-root h2{font-size:30px;line-height:1.15;font-weight:800;letter-spacing:-.5px;margin-bottom:16px}
  .v2-root .section-sub{color:var(--muted);font-size:17px;margin-bottom:40px;line-height:1.6}
  .v2-root .center{text-align:center}

  /* PROBLEM */
  .v2-root .problem{background:#0a0a0a}
  .v2-root .pain-list{list-style:none;max-width:540px;margin:0 auto}
  .v2-root .pain-list li{padding:14px 0;display:flex;gap:14px;align-items:flex-start;font-size:16px;color:#d8d8d8}
  .v2-root .pain-x{color:var(--danger);font-weight:800;flex-shrink:0;margin-top:2px;font-size:18px}

  /* FOUNDER */
  .v2-root .founder{background:var(--cream);color:#1a1a1a}
  .v2-root .founder h2{color:#0a0a0a}
  .v2-root .founder .section-tag{color:var(--accent-strong)}
  .v2-root .founder-card{background:#fff;border:1px solid #e5dfd3;border-radius:var(--radius);padding:32px 24px;box-shadow:0 4px 24px rgba(0,0,0,.04)}
  .v2-root .founder-quote{font-size:19px;line-height:1.5;color:#222;margin-bottom:20px;font-weight:500}
  .v2-root .founder-meta{display:flex;align-items:center;gap:14px;padding-top:18px;border-top:1px solid #ece5d6}
  .v2-root .founder-avatar{width:64px;height:64px;border-radius:50%;overflow:hidden;background:linear-gradient(135deg,var(--accent-strong),var(--gold));flex-shrink:0}
  .v2-root .founder-avatar img{width:100%;height:100%;object-fit:cover;object-position:center top}
  .v2-root .founder-name{font-weight:700;font-size:15px;color:#1a1a1a}
  .v2-root .founder-title{font-size:13px;color:#666;margin-top:2px}
  .v2-root .founder-creds{display:grid;grid-template-columns:repeat(2,1fr);gap:16px 12px;margin-top:24px;padding-top:24px;border-top:1px solid #ece5d6}
  .v2-root .founder-cred{text-align:center}
  .v2-root .founder-cred-num{font-size:22px;font-weight:800;color:var(--accent-strong);line-height:1}
  .v2-root .founder-cred-label{font-size:11px;color:#666;margin-top:6px;text-transform:uppercase;letter-spacing:.8px}

  /* SYSTEM */
  .v2-root .system{background:#0a0a0a}
  .v2-root .pillar-grid{display:grid;gap:16px;margin-top:32px}
  .v2-root .pillar{background:linear-gradient(180deg,#1a1325 0%,#141014 100%);border:1px solid rgba(167,139,250,.2);border-radius:var(--radius);padding:28px 24px;position:relative}
  .v2-root .pillar-num{position:absolute;top:24px;right:24px;font-size:48px;font-weight:800;color:rgba(167,139,250,.15);line-height:1}
  .v2-root .pillar h3{font-size:20px;margin-bottom:12px;font-weight:700}
  .v2-root .pillar-list{list-style:none}
  .v2-root .pillar-list li{font-size:14px;color:#d0d0d0;padding:6px 0;display:flex;gap:10px;align-items:flex-start}
  .v2-root .pillar-list li::before{content:"";width:6px;height:6px;background:var(--accent);border-radius:50%;flex-shrink:0;margin-top:8px}
  .v2-root .pillar-goal{margin-top:20px;font-size:13px;color:var(--gold);font-weight:600}
  .v2-root .pillar-goal-label{color:var(--muted);text-transform:uppercase;letter-spacing:1px;font-size:10px;margin-right:6px}

  /* EXCLUSIVITY */
  .v2-root .exclusivity{background:linear-gradient(180deg,#0a0a0a 0%,#1a0f2e 100%);text-align:center}
  .v2-root .exclusivity-card{max-width:520px;margin:24px auto 0;background:var(--surface);border:1px solid rgba(167,139,250,.3);border-radius:var(--radius);padding:36px 28px}
  .v2-root .lock-icon{width:60px;height:60px;margin:0 auto 20px;background:linear-gradient(135deg,var(--accent-strong),var(--gold));border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:28px}
  .v2-root .exclusivity-card p{font-size:16px;color:#d8d8d8;margin-bottom:24px;line-height:1.55}

  /* PROOF / CASE STUDY */
  .v2-root .case{background:var(--cream);color:#1a1a1a}
  .v2-root .case h2{color:#0a0a0a}
  .v2-root .case .section-tag{color:var(--accent-strong)}
  .v2-root .proof-single{max-width:520px;margin:8px auto 0}
  .v2-root .proof-video{max-width:340px;margin:0 auto 24px;aspect-ratio:9/16;border-radius:var(--radius);overflow:hidden;background:#0a0a0a;box-shadow:0 8px 32px rgba(0,0,0,.18)}
  .v2-root .proof-video video,.v2-root .proof-video iframe{width:100%;height:100%;object-fit:cover;display:block;border:none}
  .v2-root .case-card{background:#fff;border:1px solid #e5dfd3;border-radius:var(--radius);padding:28px 24px;box-shadow:0 4px 24px rgba(0,0,0,.05)}
  .v2-root .case-header{display:flex;align-items:center;gap:14px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid #ece5d6}
  .v2-root .case-badge{background:#0a0a0a;color:var(--gold);padding:6px 12px;border-radius:6px;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
  .v2-root .case-client{font-size:15px;font-weight:700;color:#1a1a1a}
  .v2-root .case-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px}
  .v2-root .case-stat{background:#0a0a0a;color:#fff;padding:18px 10px;border-radius:10px;text-align:center}
  .v2-root .case-stat-num{font-size:26px;font-weight:800;color:var(--gold);line-height:1}
  .v2-root .case-stat-label{font-size:10px;color:#a8a8a8;margin-top:6px;text-transform:uppercase;letter-spacing:1px}

  /* FAQ */
  .v2-root .faq{background:#0a0a0a;border-top:1px solid #1a1a1a}
  .v2-root .faq-list{margin-top:24px}
  .v2-root .faq-item{border-bottom:1px solid #1f1f1f;padding:20px 0}
  .v2-root .faq-item summary{list-style:none;display:flex;justify-content:space-between;align-items:center;font-weight:600;font-size:16px;color:#fff;cursor:pointer;gap:12px}
  .v2-root .faq-item summary::-webkit-details-marker{display:none}
  .v2-root .faq-icon{color:var(--accent);font-size:22px;transition:transform .2s;flex-shrink:0}
  .v2-root .faq-item[open] .faq-icon{transform:rotate(45deg)}
  .v2-root .faq-answer{padding-top:14px;color:var(--muted);font-size:15px;line-height:1.6}

  /* FINAL CTA */
  .v2-root .final-cta{background:linear-gradient(180deg,#0a0a0a 0%,#1a0f2e 100%);text-align:center}
  .v2-root .final-cta h2{font-size:34px;margin-bottom:16px}
  .v2-root .final-cta .section-sub{margin-bottom:28px}
  .v2-root .calendly-inline-widget{min-width:320px;height:680px;margin:0 auto;border-radius:var(--radius);overflow:hidden;background:#fff;box-shadow:0 12px 40px rgba(0,0,0,.4)}
  @media(min-width:760px){.v2-root .calendly-inline-widget{height:720px}}

  /* INLINE CTA BAND */
  .v2-root .cta-band{background:rgba(124,58,237,.08);border-top:1px solid rgba(167,139,250,.15);border-bottom:1px solid rgba(167,139,250,.15);padding:32px 0;text-align:center}
  .v2-root .cta-band p{font-size:18px;font-weight:600;margin-bottom:16px;color:#e8e8e8}

  /* PRE-FOOTER STRIP */
  .v2-root .prefooter{background:#0d0d0d;border-top:1px solid #1a1a1a;padding:22px 0;text-align:center}
  .v2-root .prefooter p{font-size:14px;color:var(--muted)}
  .v2-root .prefooter a{color:var(--accent);text-decoration:none;font-weight:600;white-space:nowrap}
  .v2-root .prefooter a:hover{text-decoration:underline}

  /* FOOTER */
  .v2-root .v2-footer{background:#000;padding:40px 0;border-top:1px solid #1a1a1a;text-align:center}
  .v2-root .footer-logo{font-size:18px;font-weight:800;margin-bottom:12px}
  .v2-root .footer-logo span{color:var(--accent)}
  .v2-root .footer-tag{font-size:14px;color:var(--muted);max-width:320px;margin:0 auto 20px}
  .v2-root .footer-contact{font-size:13px;color:var(--muted);margin-bottom:8px}
  .v2-root .footer-contact a{color:var(--accent);text-decoration:none}
  .v2-root .footer-copy{font-size:11px;color:#555;margin-top:20px;letter-spacing:.5px}

  /* DESKTOP */
  @media(min-width:760px){
    .v2-root h1{font-size:60px;letter-spacing:-2px}
    .v2-root h2{font-size:38px}
    .v2-root .hero{padding:80px 0 96px}
    .v2-root .section{padding:88px 0}
    .v2-root .pillar-grid{grid-template-columns:repeat(3,1fr)}
    .v2-root .case-stats{grid-template-columns:repeat(3,1fr)}
    .v2-root .case-header{justify-content:flex-start}
    .v2-root .founder-creds{grid-template-columns:repeat(4,1fr)}
  }
`;
