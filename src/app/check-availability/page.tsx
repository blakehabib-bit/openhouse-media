"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const CALENDLY =
  "https://calendly.com/blakehabib98/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=7c3aed";

// Placeholder logic: swap for a real backend check.
// Most suburbs return "available" to maximise conversions while the backend is wired up.
const TAKEN_SUBURBS = ["ponsonby", "remuera", "toorak", "double bay", "mosman"];

const css = `
:root{
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
  --maxw:520px;
}
#ca *{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
#ca{
  font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Inter,system-ui,sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.5;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
  min-height:100vh;
}
#ca .container{max-width:var(--maxw);margin:0 auto;padding:0 20px}
#ca .section{padding:56px 0}
#ca .section-tight{padding:32px 0}

/* HEADER */
#ca .nav{
  padding:18px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  max-width:var(--maxw);
  margin:0 auto;
}
#ca .logo{font-weight:800;letter-spacing:.5px;font-size:18px;color:var(--text);text-decoration:none}
#ca .logo span{color:var(--accent)}
#ca .nav-tag{font-size:11px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase}

/* HERO */
#ca .hero{padding:24px 0 48px;position:relative}
#ca .hero-glow{
  position:absolute;
  top:0;left:50%;transform:translateX(-50%);
  width:600px;height:600px;
  background:radial-gradient(circle,rgba(124,58,237,.22) 0%,transparent 60%);
  pointer-events:none;
  z-index:0;
}
#ca .hero-content{position:relative;z-index:1;text-align:center}
#ca .pill{
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
  margin-bottom:20px;
  letter-spacing:.3px;
}
#ca .pill-dot{
  width:8px;height:8px;
  background:var(--success);
  border-radius:50%;
  box-shadow:0 0 0 0 rgba(34,197,94,.7);
  animation:ca-pulse 2s infinite;
}
@keyframes ca-pulse{
  0%{box-shadow:0 0 0 0 rgba(34,197,94,.7)}
  70%{box-shadow:0 0 0 10px rgba(34,197,94,0)}
  100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}
}
#ca h1{font-size:38px;line-height:1.05;font-weight:800;letter-spacing:-1px;margin-bottom:18px}
#ca h1 .underline{background:linear-gradient(180deg,transparent 60%,rgba(167,139,250,.4) 60%);padding:0 2px}
#ca .hero-sub{font-size:17px;color:var(--muted);margin-bottom:28px;line-height:1.55}

/* SUBURB FORM */
#ca .suburb-form{
  background:var(--surface);
  border:1px solid #262626;
  border-radius:var(--radius);
  padding:20px;
  margin-bottom:16px;
  box-shadow:0 20px 60px -20px rgba(124,58,237,.3);
}
#ca .form-label{
  display:block;
  text-align:left;
  font-size:13px;
  font-weight:600;
  color:var(--muted);
  margin-bottom:8px;
  text-transform:uppercase;
  letter-spacing:.5px;
}
#ca .form-input{
  width:100%;
  padding:16px 18px;
  background:#0a0a0a;
  border:1.5px solid #2a2a2a;
  border-radius:10px;
  color:var(--text);
  font-size:17px;
  font-weight:500;
  margin-bottom:12px;
  transition:border-color .2s;
  font-family:inherit;
}
#ca .form-input:focus{outline:none;border-color:var(--accent)}
#ca .form-input::placeholder{color:#555}
#ca .btn{
  display:block;
  width:100%;
  padding:18px 24px;
  background:linear-gradient(135deg,var(--accent-strong) 0%,#a855f7 100%);
  color:#fff;
  font-size:17px;
  font-weight:700;
  border:none;
  border-radius:10px;
  cursor:pointer;
  text-decoration:none;
  text-align:center;
  transition:transform .15s,box-shadow .15s;
  letter-spacing:.2px;
  box-shadow:0 8px 30px -8px rgba(124,58,237,.6);
}
#ca .btn:hover,#ca .btn:active{transform:translateY(-1px);box-shadow:0 12px 40px -8px rgba(124,58,237,.8)}
#ca .btn-secondary{background:transparent;border:1.5px solid #333;box-shadow:none}
#ca .trust-row{
  display:flex;
  justify-content:center;
  gap:18px;
  flex-wrap:wrap;
  margin-top:18px;
  font-size:12px;
  color:var(--muted);
}
#ca .trust-row span{display:flex;align-items:center;gap:6px}
#ca .check{color:var(--success);font-weight:800}

/* SOCIAL PROOF STRIP */
#ca .proof-strip{
  background:var(--surface);
  border-top:1px solid #1f1f1f;
  border-bottom:1px solid #1f1f1f;
  padding:24px 0;
  text-align:center;
}
#ca .proof-strip-stat{font-size:32px;font-weight:800;color:var(--gold);letter-spacing:-.5px}
#ca .proof-strip-label{font-size:13px;color:var(--muted);margin-top:4px}

/* PROBLEM */
#ca .problem{background:#0a0a0a;text-align:center}
#ca .section-tag{
  color:var(--accent);
  font-size:12px;
  font-weight:700;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-bottom:12px;
}
#ca h2{font-size:28px;line-height:1.15;font-weight:800;letter-spacing:-.5px;margin-bottom:14px}
#ca .section-sub{color:var(--muted);font-size:16px;margin-bottom:32px;line-height:1.55}
#ca .pain-list{list-style:none;text-align:left;max-width:420px;margin:0 auto}
#ca .pain-list li{
  padding:14px 0;
  border-bottom:1px solid #1f1f1f;
  display:flex;
  gap:12px;
  align-items:flex-start;
  font-size:15px;
  color:#d0d0d0;
}
#ca .pain-list li:last-child{border-bottom:none}
#ca .pain-x{color:var(--danger);font-weight:800;flex-shrink:0;margin-top:2px}

/* STACK */
#ca .stack{background:linear-gradient(180deg,#0a0a0a 0%,#0f0a14 100%)}
#ca .stack-card{
  background:linear-gradient(180deg,#1a1325 0%,#141014 100%);
  border:1px solid rgba(167,139,250,.2);
  border-radius:var(--radius);
  padding:28px 24px;
  margin-top:20px;
}
#ca .stack-header{text-align:center;margin-bottom:24px}
#ca .stack-header h3{font-size:14px;color:var(--accent);font-weight:700;letter-spacing:2px;text-transform:uppercase}
#ca .stack-item{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  padding:16px 0;
  border-bottom:1px dashed #2a2540;
  gap:16px;
}
#ca .stack-item:last-of-type{border-bottom:none}
#ca .stack-item-title{font-weight:600;font-size:15px;color:#e8e8e8}
#ca .stack-item-desc{font-size:13px;color:var(--muted);margin-top:2px}
#ca .stack-item-value{font-size:14px;font-weight:700;color:var(--gold);white-space:nowrap;flex-shrink:0}
#ca .stack-total{
  margin-top:20px;
  padding-top:20px;
  border-top:2px solid rgba(167,139,250,.3);
  display:flex;
  justify-content:space-between;
  align-items:center;
}
#ca .stack-total-label{font-size:13px;color:var(--muted);text-transform:uppercase;letter-spacing:1px}
#ca .stack-total-value{font-size:22px;font-weight:800;color:var(--gold)}
#ca .stack-banner{
  background:rgba(124,58,237,.15);
  border:1px solid rgba(167,139,250,.3);
  border-radius:10px;
  padding:14px;
  margin-top:16px;
  text-align:center;
  font-size:13px;
  color:#e0d4ff;
  font-weight:500;
}

/* CASE STUDY */
#ca .case{background:var(--cream);color:#1a1a1a}
#ca .case h2{color:#0a0a0a}
#ca .case .section-tag{color:var(--accent-strong)}
#ca .case-card{
  background:#fff;
  border:1px solid #e5dfd3;
  border-radius:var(--radius);
  padding:28px 24px;
  margin-top:8px;
  box-shadow:0 4px 20px rgba(0,0,0,.04);
}
#ca .case-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:20px 0}
#ca .case-stat{background:#0a0a0a;color:#fff;padding:18px 12px;border-radius:10px;text-align:center}
#ca .case-stat-num{font-size:28px;font-weight:800;color:var(--gold);line-height:1}
#ca .case-stat-label{font-size:11px;color:var(--muted);margin-top:6px;text-transform:uppercase;letter-spacing:1px}
#ca .case-quote{
  font-style:italic;
  font-size:16px;
  line-height:1.5;
  color:#333;
  padding:16px 0;
  border-top:1px solid #e5dfd3;
  margin-top:8px;
}
#ca .case-attribution{font-size:13px;color:#666;margin-top:8px;font-style:normal;font-weight:600}

/* RISK REVERSAL */
#ca .risk{text-align:center}
#ca .risk-grid{display:grid;gap:14px;margin-top:24px}
#ca .risk-item{
  background:var(--surface);
  border:1px solid #222;
  border-left:3px solid var(--accent);
  border-radius:10px;
  padding:18px 20px;
  text-align:left;
}
#ca .risk-item-title{font-weight:700;font-size:15px;margin-bottom:4px}
#ca .risk-item-desc{font-size:14px;color:var(--muted)}

/* FAQ */
#ca .faq{background:#0a0a0a}
#ca .faq-item{border-bottom:1px solid #1f1f1f;padding:20px 0;cursor:pointer}
#ca .faq-item summary{
  list-style:none;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-weight:600;
  font-size:16px;
  color:#fff;
  cursor:pointer;
}
#ca .faq-item summary::-webkit-details-marker{display:none}
#ca .faq-icon{color:var(--accent);font-size:20px;transition:transform .2s;flex-shrink:0;margin-left:12px}
#ca .faq-item[open] .faq-icon{transform:rotate(45deg)}
#ca .faq-answer{padding-top:14px;color:var(--muted);font-size:15px;line-height:1.6}

/* FINAL CTA */
#ca .final-cta{background:linear-gradient(180deg,#0a0a0a 0%,#1a0f2e 100%);text-align:center;padding:64px 0}
#ca .final-cta h2{font-size:32px;margin-bottom:14px}
#ca .final-cta .section-sub{margin-bottom:28px}

/* FOOTER */
#ca footer{background:#000;padding:32px 0 40px;text-align:center;border-top:1px solid #1a1a1a}
#ca .footer-logo{font-size:16px;font-weight:800;margin-bottom:10px}
#ca .footer-logo span{color:var(--accent)}
#ca .footer-tag{font-size:13px;color:var(--muted);max-width:280px;margin:0 auto 16px}
#ca .footer-contact{font-size:13px;color:var(--muted)}
#ca .footer-contact a{color:var(--accent);text-decoration:none}
#ca .footer-copy{font-size:11px;color:#555;margin-top:20px;letter-spacing:.5px}

/* RESULT STATES */
#ca .result{
  display:none;
  background:var(--surface);
  border-radius:var(--radius);
  padding:24px;
  margin-bottom:16px;
  border:1px solid #262626;
}
#ca .result.show{display:block}
#ca .result.available{border-color:var(--success);background:rgba(34,197,94,.05)}
#ca .result.taken{border-color:var(--danger);background:rgba(239,68,68,.05)}
#ca .result-icon{font-size:32px;margin-bottom:8px}
#ca .result-title{font-size:20px;font-weight:800;margin-bottom:6px}
#ca .result-sub{font-size:14px;color:var(--muted);margin-bottom:16px}

/* DESKTOP */
@media(min-width:700px){
  #ca h1{font-size:48px}
  #ca h2{font-size:34px}
  #ca .section{padding:80px 0}
  #ca .case-stats{grid-template-columns:repeat(4,1fr)}
}
`;

function CheckAvailabilityContent() {
  const searchParams = useSearchParams();
  const [suburb, setSuburb] = useState("");
  const [result, setResult] = useState<null | "available" | "taken">(null);

  function runCheck(value: string, doScroll = true) {
    const v = value.trim();
    if (!v) return;
    const isTaken = TAKEN_SUBURBS.some((s) => v.toLowerCase().includes(s));
    setResult(isTaken ? "taken" : "available");
    if (doScroll) {
      setTimeout(() => {
        const el = document.getElementById(isTaken ? "resultTaken" : "resultAvailable");
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }

  // Auto-fill (and auto-check) suburb from URL param — preserves the lead-capture funnel
  // that redirects to /check-availability?suburb=X
  useEffect(() => {
    const s = searchParams.get("suburb");
    if (s) {
      const val = decodeURIComponent(s);
      setSuburb(val);
      runCheck(val, false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    runCheck(suburb);
  }

  return (
    <div id="ca">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header>
        <nav className="nav">
          <a href="/" className="logo">DD<span>.</span></a>
          <div className="nav-tag">One agent. One suburb.</div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-content">
            <div className="pill">
              <span className="pill-dot" />
              5 suburbs claimed this month
            </div>
            <h1>Is your suburb <span className="underline">still available?</span></h1>
            <p className="hero-sub">
              We only work with <strong>one agent per suburb</strong>. Check yours in 10 seconds.
              If it&apos;s open, lock it in before your competitor does.
            </p>

            <form className="suburb-form" style={{ display: result ? "none" : "block" }} onSubmit={onSubmit}>
              <label className="form-label" htmlFor="suburbInput">Your suburb</label>
              <input
                type="text"
                id="suburbInput"
                className="form-input"
                placeholder="e.g. Bulimba, Brisbane"
                required
                autoComplete="off"
                value={suburb}
                onChange={(e) => setSuburb(e.target.value)}
              />
              <button type="submit" className="btn">Check Availability →</button>
            </form>

            <div id="resultAvailable" className={`result available${result === "available" ? " show" : ""}`}>
              <div className="result-icon">✓</div>
              <div className="result-title" style={{ color: "var(--success)" }}>Your suburb is available.</div>
              <div className="result-sub">For now. Book a free 15-min call and we&apos;ll lock it in.</div>
              <a href={CALENDLY} className="btn">Book My Free Call →</a>
            </div>

            <div id="resultTaken" className={`result taken${result === "taken" ? " show" : ""}`}>
              <div className="result-icon">⚠</div>
              <div className="result-title" style={{ color: "var(--danger)" }}>That suburb&apos;s claimed.</div>
              <div className="result-sub">
                Join the waitlist or book a call so we can find a high-potential suburb nearby that&apos;s still open.
              </div>
              <a href={CALENDLY} className="btn">Find Me a Nearby Suburb →</a>
            </div>

            <div className="trust-row">
              <span><span className="check">✓</span> Free 15-min call</span>
              <span><span className="check">✓</span> No obligation</span>
              <span><span className="check">✓</span> NZ &amp; AU agents</span>
            </div>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="proof-strip">
          <div className="container">
            <div className="proof-strip-stat">$75K GCI</div>
            <div className="proof-strip-label">from 1 video. Harcourts Team Green case study →</div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="section problem">
          <div className="container">
            <div className="section-tag">The Real Problem</div>
            <h2>Your competitor is posting reels. Your sellers are watching. You&apos;re invisible.</h2>
            <p className="section-sub">Sellers in your suburb pick the agent they see most. Right now, that probably isn&apos;t you.</p>
            <ul className="pain-list">
              <li><span className="pain-x">✕</span> You know you should be making content but you&apos;re flat out listing &amp; selling</li>
              <li><span className="pain-x">✕</span> You don&apos;t have a content and ads strategy to get listings from social media</li>
              <li><span className="pain-x">✕</span> Generic agencies will sign your competitor next week</li>
            </ul>
          </div>
        </section>

        {/* STACK */}
        <section className="section stack">
          <div className="container">
            <div className="section-tag" style={{ textAlign: "center" }}>Here&apos;s What You Get</div>
            <h2 style={{ textAlign: "center" }}>The full system. Done for you. One price.</h2>
            <div className="stack-card">
              <div className="stack-header">
                <h3>Inside the system</h3>
              </div>

              <div className="stack-item">
                <div>
                  <div className="stack-item-title">Pro-filmed reels &amp; photos</div>
                  <div className="stack-item-desc">On-the-ground shoots in your suburb. Built to stop the scroll.</div>
                </div>
                <div className="stack-item-value">$3,500/mo</div>
              </div>

              <div className="stack-item">
                <div>
                  <div className="stack-item-title">Full social media management</div>
                  <div className="stack-item-desc">Scripting, editing, captions, scheduling, posting. You touch nothing.</div>
                </div>
                <div className="stack-item-value">$2,200/mo</div>
              </div>

              <div className="stack-item">
                <div>
                  <div className="stack-item-title">Paid ads for buyers &amp; sellers</div>
                  <div className="stack-item-desc">Profile growth + lead gen campaigns. Attention turned into appraisals.</div>
                </div>
                <div className="stack-item-value">$1,800/mo</div>
              </div>

              <div className="stack-item">
                <div>
                  <div className="stack-item-title">Monthly performance reporting</div>
                  <div className="stack-item-desc">What worked, what didn&apos;t, what we&apos;re doing next. No black box.</div>
                </div>
                <div className="stack-item-value">$600/mo</div>
              </div>

              <div className="stack-item">
                <div>
                  <div className="stack-item-title">Suburb exclusivity. Locked.</div>
                  <div className="stack-item-desc">We will never sign another agent in your patch. Full stop.</div>
                </div>
                <div className="stack-item-value">Priceless</div>
              </div>

              <div className="stack-total">
                <div className="stack-total-label">Total value</div>
                <div className="stack-total-value">$8,100+/mo</div>
              </div>

              <div className="stack-banner">
                Real package pricing is a fraction of this. We&apos;ll walk you through it on the call.
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="section case">
          <div className="container">
            <div className="section-tag">Proof</div>
            <h2>Harcourts Team Green: 3 listings from 1 video.</h2>
            <p className="section-sub" style={{ color: "#555" }}>One piece of content. The right system behind it. Look what happens.</p>
            <div className="case-card">
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
                <div className="case-stat">
                  <div className="case-stat-num">14</div>
                  <div className="case-stat-label">Days to live</div>
                </div>
              </div>
              <p className="case-quote">
                &ldquo;One piece of content. Three new listings on the back of it. That&apos;s what happens when
                content earns attention and the system turns it into leads.&rdquo;
              </p>
              <p className="case-attribution">Harcourts Team Green</p>
            </div>
          </div>
        </section>

        {/* RISK REVERSAL */}
        <section className="section risk">
          <div className="container">
            <div className="section-tag">Zero Risk to Find Out</div>
            <h2>What happens on the call</h2>
            <p className="section-sub">15 minutes. No pitch deck. No pressure. Just a straight conversation about whether we&apos;re a fit.</p>
            <div className="risk-grid">
              <div className="risk-item">
                <div className="risk-item-title">1. Free suburb audit</div>
                <div className="risk-item-desc">We pull your competitors, their content, and where the gaps are. You keep the audit either way.</div>
              </div>
              <div className="risk-item">
                <div className="risk-item-title">2. Honest yes or no</div>
                <div className="risk-item-desc">If we&apos;re not a fit, we&apos;ll tell you. If we are, we&apos;ll show you the exact path to 14 days live.</div>
              </div>
              <div className="risk-item">
                <div className="risk-item-title">3. No follow-up spam</div>
                <div className="risk-item-desc">No drip sequences. No &ldquo;just checking in&rdquo; emails. If you want in, you come to us.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq">
          <div className="container">
            <div className="section-tag" style={{ textAlign: "center" }}>Common Questions</div>
            <h2 style={{ textAlign: "center" }}>Before you book</h2>

            <details className="faq-item">
              <summary>What if my suburb is already taken? <span className="faq-icon">+</span></summary>
              <div className="faq-answer">Two options. We add you to the waitlist for that suburb (we average 1-2 spots opening per quarter), or we find a high-potential suburb nearby that&apos;s still open. Either way, you keep the free audit.</div>
            </details>

            <details className="faq-item">
              <summary>How long until I&apos;m live? <span className="faq-icon">+</span></summary>
              <div className="faq-answer">14 days from signed. We audit, strategise, shoot your first content batch, set up ads and reporting, and go live. You spend roughly 2 hours total over those 14 days.</div>
            </details>

            <details className="faq-item">
              <summary>I&apos;ve been burnt by agencies before. Why is this different? <span className="faq-icon">+</span></summary>
              <div className="faq-answer">Most agencies don&apos;t know real estate. We do, deeply. We&apos;re suburb-exclusive, so we have skin in the game on your area specifically. And we don&apos;t lock you into 12-month contracts on day one.</div>
            </details>

            <details className="faq-item">
              <summary>How much does it cost? <span className="faq-icon">+</span></summary>
              <div className="faq-answer">Less than one extra listing per quarter pays for it. We&apos;ll walk you through exact pricing on the call once we know your suburb and goals. If it doesn&apos;t make commercial sense for you, we&apos;ll tell you.</div>
            </details>

            <details className="faq-item">
              <summary>I&apos;m not in NZ. Do you work in Australia? <span className="faq-icon">+</span></summary>
              <div className="faq-answer">Yes. We work across NZ and Australia. Brisbane, Sydney, Melbourne, Gold Coast, Auckland, Wellington and beyond. If you&apos;ve got a suburb, we can shoot it.</div>
            </details>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="final-cta">
          <div className="container">
            <div className="section-tag">Last Step</div>
            <h2>Lock your suburb. Or watch your competitor do it.</h2>
            <p className="section-sub">Once it&apos;s claimed, it&apos;s gone. The agent who books first wins.</p>
            <a href={CALENDLY} className="btn">Book My Free 15-Min Call →</a>
            <div className="trust-row">
              <span><span className="check">✓</span> 15 mins</span>
              <span><span className="check">✓</span> Free audit</span>
              <span><span className="check">✓</span> No pressure</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-logo">DD<span>.</span></div>
          <p className="footer-tag">Suburb-exclusive video and social media systems for Australasia&apos;s most ambitious real estate agents.</p>
          <p className="footer-contact"><a href="mailto:blake@thedigitaldoorknock.com">blake@thedigitaldoorknock.com</a></p>
          <p className="footer-copy">© 2026 THE DIGITAL DOOR KNOCK. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

export default function CheckAvailabilityPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "100vh", background: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          Loading…
        </div>
      }
    >
      <CheckAvailabilityContent />
    </Suspense>
  );
}
