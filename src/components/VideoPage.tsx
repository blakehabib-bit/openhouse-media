/**
 * /video — DD. Video. Content editable via the Tina "video" collection
 * (content/video/index.json). Server component (no client interactivity).
 * Green palette scoped under .video-root so it never bleeds into the homepage.
 */

import VideoCarousel from "@/components/VideoCarousel";
import HeroVideo from "@/components/HeroVideo";
import QuoteRequestPopup from "@/components/QuoteRequestPopup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Data = any;

export default function VideoPage({ data }: { data: Data }) {
  return (
    <div className="video-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav>
        <div className="wrap">
          <a className="logo" href="/video">
            DD. <span>video</span>
          </a>
          <div className="nav-links">
            {data.nav.links.map((l: Data, i: number) => (
              <a href={l.href} key={i}>
                {l.label}
              </a>
            ))}
            <a className="nav-cta" href="#quote">
              {data.nav.ctaLabel}
            </a>
          </div>
        </div>
      </nav>

      <header className="hero">
        {data.hero.heroVideo && (
          <>
            <HeroVideo src={data.hero.heroVideo} />
            <div className="hero-bg-overlay" />
          </>
        )}
        <div className="wrap hero-content">
          <p className="kicker">{data.hero.kicker}</p>
          <h1>{data.hero.heading}</h1>
          <p>{data.hero.sub}</p>
          <a className="btn" href="#quote">
            {data.hero.cta}
          </a>
          <div className="stats">
            {data.hero.stats.map((s: Data, i: number) => (
              <div key={i}>
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="alt" id="services">
        <div className="wrap">
          <p className="kicker">{data.services.kicker}</p>
          <h2 style={{ fontSize: "34px" }}>{data.services.heading}</h2>
          <div className="grid-2">
            {data.services.cards.map((c: Data, i: number) => (
              <div className="card" key={i}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <ul>
                  {c.items.map((it: string, j: number) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REELS CAROUSEL */}
      {data.reels?.items?.length > 0 && (
        <section className="alt reels-section">
          <div className="wrap">
            <p className="kicker">{data.reels.kicker}</p>
            <h2 style={{ fontSize: "34px", marginBottom: "40px" }}>{data.reels.heading}</h2>
            <VideoCarousel items={data.reels.items} />
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <div className="agent-banner">
            <div>
              <h3>{data.agentBanner.heading}</h3>
              <p>{data.agentBanner.body}</p>
            </div>
            <a href="/">{data.agentBanner.linkLabel}</a>
          </div>
        </div>
      </section>

      <section className="alt" id="process">
        <div className="wrap">
          <p className="kicker">{data.process.kicker}</p>
          <h2 style={{ fontSize: "34px" }}>{data.process.heading}</h2>
          {data.process.steps.map((s: Data, i: number) => (
            <div className="step" key={i}>
              <div className="step-num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="kicker">{data.founder.kicker}</p>
          <h2 style={{ fontSize: "34px" }}>{data.founder.heading}</h2>
          <p
            className="muted"
            style={{ maxWidth: "680px", marginTop: "18px", fontSize: "17px" }}
          >
            {data.founder.body}
          </p>
          <div className="founder-row">
            <div className="founder-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={data.founder.photo} alt={data.founder.name} />
            </div>
            <div>
              <div className="founder-name">{data.founder.name}</div>
              <div className="founder-role muted">{data.founder.role}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="alt" id="faq">
        <div className="wrap">
          <p className="kicker">{data.faq.kicker}</p>
          <h2 style={{ fontSize: "34px" }}>{data.faq.heading}</h2>
          <div style={{ marginTop: "24px" }}>
            {data.faq.items.map((f: Data, i: number) => (
              <details className="faq-item" key={i}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="quote">
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "38px", maxWidth: "640px", margin: "0 auto 16px" }}>
            {data.quote.heading}
          </h2>
          <p
            className="muted"
            style={{ maxWidth: "520px", margin: "0 auto 32px", fontSize: "17px" }}
          >
            {data.quote.sub}
          </p>
          <QuoteRequestPopup buttonClassName="btn" buttonContent={data.quote.cta} />
          <span style={{ display: "inline-block", width: "12px" }} />
          <a className="btn-ghost" href="/">
            {data.quote.agentCta}
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <p style={{ fontWeight: 700, color: "var(--v-text)", fontSize: "18px" }}>
            DD.
          </p>
          <p style={{ maxWidth: "420px", margin: "10px auto" }}>
            {data.footer.tagline}
          </p>
          <p>
            <a href={`mailto:${data.footer.email}`}>{data.footer.email}</a>
          </p>
          <p style={{ marginTop: "16px" }}>{data.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

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

  .video-root .hero{text-align:center;padding:96px 0 64px;position:relative;overflow:hidden}
  .video-root .hero-bg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0;pointer-events:none}
  .video-root .hero-bg-overlay{position:absolute;inset:0;background:rgba(10,22,18,.62);z-index:1}
  .video-root .hero-content{position:relative;z-index:2}
  .video-root .hero h1{font-size:clamp(34px,5vw,54px);max-width:820px;margin:0 auto 20px}
  .video-root .hero p{font-size:19px;max-width:640px;margin:0 auto 32px;color:var(--v-muted)}
  .video-root .stats{display:flex;justify-content:center;gap:48px;margin-top:56px;flex-wrap:wrap}
  .video-root .stats div{text-align:center}
  .video-root .stats strong{display:block;font-size:28px;font-weight:700}
  .video-root .stats span{font-size:14px;color:var(--v-muted)}

  .video-root .alt{background:var(--v-bg-alt)}
  .video-root .grid-2{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:40px}
  .video-root .card{background:var(--v-card);border:1px solid var(--v-line);border-radius:14px;padding:32px 28px}
  .video-root .card h3{font-size:21px;margin-bottom:10px}
  .video-root .card p{color:var(--v-muted);font-size:15.5px}
  .video-root .card ul{list-style:none;margin-top:18px}
  .video-root .card li{color:var(--v-text);font-size:15.5px;padding:7px 0;border-bottom:1px solid var(--v-line)}
  .video-root .card li:last-child{border-bottom:0}
  .video-root .card li::before{content:"✓";color:var(--v-accent-light);margin-right:10px;font-weight:700}

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

  .video-root .faq-item{border-bottom:1px solid var(--v-line);padding:22px 0}
  .video-root .faq-item summary{font-size:17px;font-weight:600;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
  .video-root .faq-item summary::-webkit-details-marker{display:none}
  .video-root .faq-item summary::after{content:"+";color:var(--v-accent-light);font-size:22px}
  .video-root .faq-item[open] summary::after{content:"−"}
  .video-root .faq-item p{color:var(--v-muted);margin-top:12px;max-width:680px;font-size:15.5px}

  .video-root footer{border-top:1px solid var(--v-line);padding:48px 0;text-align:center}
  .video-root footer p{color:var(--v-muted);font-size:14px}
  .video-root footer a{color:var(--v-accent-light);text-decoration:none}

  /* REELS CAROUSEL */
  .video-root .reels-section{text-align:center}
  .vc-wrap{width:100%;max-width:900px;margin:0 auto}
  .vc-stage{display:flex;align-items:center;justify-content:center;gap:20px}
  .vc-arrow{flex-shrink:0;width:48px;height:48px;border-radius:50%;background:var(--v-card);border:1px solid var(--v-line);color:var(--v-text);font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .15s;line-height:1}
  .vc-arrow:hover{background:var(--v-accent)}
  .vc-viewer{position:relative;width:min(400px,80vw);height:min(710px,calc(80vw * 1.775));border-radius:16px;overflow:hidden;background:#000;box-shadow:0 16px 48px rgba(0,0,0,.5)}
  .vc-viewer iframe{width:100%;height:100%;border:none;display:block}
  .vc-label{position:absolute;bottom:0;left:0;right:0;padding:12px 16px;background:linear-gradient(transparent,rgba(0,0,0,.7));color:#fff;font-size:13px;font-weight:600;text-align:left}
  .vc-dots{display:flex;justify-content:center;gap:8px;margin-top:20px}
  .vc-dot{width:8px;height:8px;border-radius:50%;background:var(--v-line);border:none;cursor:pointer;transition:background .15s}
  .vc-dot.active{background:var(--v-accent-light)}

  @media(max-width:760px){
    .video-root .stats{gap:28px}
    .video-root .nav-links a:not(.nav-cta){display:none}
    .video-root .grid-2{grid-template-columns:1fr}
    .vc-arrow{width:38px;height:38px;font-size:16px}
    .vc-stage{gap:12px}
  }
`;
