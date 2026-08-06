/**
 * /real-estate-video — standalone portfolio-style showcase page mixing real
 * estate and brand videography. Content editable via the Tina
 * "realEstateVideo" collection (content/real-estate-video/index.json).
 * Server component; scoped under .rev-root so its palette never bleeds into
 * other pages.
 */

import HeroVideo from "@/components/HeroVideo";
import QuoteRequestPopup from "@/components/QuoteRequestPopup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Data = any;

function isInstagramUrl(url: string) {
  return url.includes("instagram.com");
}

function PortfolioCard({ item }: { item: Data }) {
  const hasMedia = !!item.mediaUrl?.trim();

  return (
    <div className="rev-card">
      <div className="rev-card-media">
        {hasMedia ? (
          isInstagramUrl(item.mediaUrl) ? (
            <iframe
              src={`${item.mediaUrl.replace(/\/+$/, "")}/embed/`}
              allowFullScreen
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title={item.title}
            />
          ) : (
            <video src={item.mediaUrl} autoPlay muted loop playsInline />
          )
        ) : item.thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.thumbnail} alt={item.title} />
        ) : (
          <div className="rev-placeholder">
            <span>+ Add video</span>
          </div>
        )}
      </div>
      <div className="rev-card-caption">
        <span className="rev-card-tag">{item.category}</span>
        <span className="rev-card-title">{item.title}</span>
      </div>
    </div>
  );
}

export default function RealEstateVideoPage({ data }: { data: Data }) {
  const logos = data.collaborators?.logos || [];

  return (
    <div className="rev-root">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav>
        <div className="wrap">
          <a className="logo" href="/real-estate-video">
            DD.
          </a>
          <div className="nav-links">
            <a href="/">{data.nav.agentLabel}</a>
            <a href="/video">{data.nav.videoLabel}</a>
            <QuoteRequestPopup buttonClassName="nav-cta" buttonContent={data.nav.quoteLabel} />
          </div>
        </div>
      </nav>

      <header className="hero">
        {data.hero.heroVideo && (
          <>
            <HeroVideo src={data.hero.heroVideo} />
            <div className="hero-overlay" />
          </>
        )}
        <div className="wrap hero-content">
          <p className="kicker">{data.hero.kicker}</p>
          <h1>{data.hero.heading}</h1>
          <p className="hero-sub">{data.hero.sub}</p>
        </div>
      </header>

      <section className="portfolio">
        <div className="wrap">
          <div className="center">
            <p className="kicker">{data.portfolio.kicker}</p>
            <h2>{data.portfolio.heading}</h2>
          </div>
          <div className="rev-grid">
            {data.portfolio.items.map((item: Data, i: number) => (
              <PortfolioCard item={item} key={i} />
            ))}
          </div>
        </div>
      </section>

      {logos.length > 0 && (
        <section className="collaborators">
          <div className="wrap center">
            <p className="kicker">{data.collaborators.heading}</p>
            <div className="logo-row">
              {logos.map((l: Data, i: number) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={l.image} alt={l.name} key={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="cta">
        <div className="wrap center">
          <h2>{data.cta.heading}</h2>
          <p className="cta-sub">{data.cta.sub}</p>
          <div className="cta-actions">
            <QuoteRequestPopup buttonClassName="btn" buttonContent={data.cta.quoteLabel} />
            <a className="btn-ghost" href="/">
              {data.cta.agentLabel}
            </a>
          </div>
          <a className="cta-link" href="/video">
            {data.cta.videoLabel} →
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap center">
          <p className="footer-logo">DD.</p>
          <p className="footer-tag">{data.footer.tagline}</p>
          <p>
            <a href={`mailto:${data.footer.email}`}>{data.footer.email}</a>
          </p>
          <p className="footer-copy">{data.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

const css = `
  .rev-root{
    --r-bg:#0a0a0a;
    --r-line:#242424;
    --r-text:#f5f5f5;
    --r-muted:#9a9a9a;
    --r-accent:#f5f5f5;
    font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display','Segoe UI',Inter,system-ui,sans-serif;
    background:var(--r-bg);
    color:var(--r-text);
    line-height:1.6;
    min-height:100vh;
  }
  .rev-root *{margin:0;padding:0;box-sizing:border-box}
  .rev-root h1,.rev-root h2{font-weight:800;line-height:1.1;letter-spacing:-.5px}
  .rev-root a{color:inherit;text-decoration:none}
  .rev-root img{max-width:100%;display:block}
  .rev-root .wrap{max-width:1180px;margin:0 auto;padding:0 24px}
  .rev-root .center{text-align:center}
  .rev-root .kicker{font-size:12px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--r-muted);margin-bottom:16px}

  .rev-root nav{position:sticky;top:0;z-index:50;background:rgba(10,10,10,.8);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--r-line)}
  .rev-root nav .wrap{display:flex;align-items:center;justify-content:space-between;padding:18px 24px}
  .rev-root .logo{font-weight:800;font-size:20px;letter-spacing:.1em}
  .rev-root .nav-links{display:flex;align-items:center;gap:28px}
  .rev-root .nav-links a{font-size:14px;color:var(--r-muted);transition:color .15s}
  .rev-root .nav-links a:hover{color:#fff}
  .rev-root .nav-cta{background:#fff;color:#0a0a0a;font-weight:700;font-size:13px;padding:10px 18px;border-radius:6px;border:none;cursor:pointer;letter-spacing:.02em}
  @media(max-width:640px){.rev-root .nav-links a:not(.nav-cta){display:none}}

  .rev-root .hero{position:relative;min-height:78vh;display:flex;align-items:center;overflow:hidden;background:linear-gradient(160deg,#1a1a1a 0%,#0a0a0a 60%)}
  .rev-root .hero-bg-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
  .rev-root .hero-overlay{position:absolute;inset:0;background:rgba(0,0,0,.55);z-index:1}
  .rev-root .hero-content{position:relative;z-index:2;text-align:center;padding:80px 24px}
  .rev-root .hero h1{font-size:clamp(32px,5.5vw,58px);max-width:880px;margin:0 auto 22px;text-transform:uppercase}
  .rev-root .hero-sub{font-size:18px;color:#d8d8d8;max-width:560px;margin:0 auto}

  .rev-root .portfolio{padding:96px 0}
  .rev-root .portfolio h2{font-size:clamp(26px,3.5vw,36px);margin-bottom:0}
  .rev-root .rev-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:48px}
  .rev-root .rev-card{position:relative;border-radius:12px;overflow:hidden;background:#111}
  .rev-root .rev-card-media{position:relative;aspect-ratio:4/5;background:#141414}
  .rev-root .rev-card-media video,.rev-root .rev-card-media iframe,.rev-root .rev-card-media img{width:100%;height:100%;object-fit:cover;border:none;display:block}
  .rev-root .rev-placeholder{width:100%;height:100%;display:flex;align-items:center;justify-content:center;border:1.5px dashed var(--r-line);color:var(--r-muted);font-size:13px;font-weight:600;letter-spacing:.04em}
  .rev-root .rev-card-caption{position:absolute;left:0;right:0;bottom:0;padding:16px;background:linear-gradient(transparent,rgba(0,0,0,.75));display:flex;flex-direction:column;gap:4px}
  .rev-root .rev-card-tag{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#c9c9c9}
  .rev-root .rev-card-title{font-size:15px;font-weight:700}

  .rev-root .collaborators{padding:56px 0;border-top:1px solid var(--r-line);border-bottom:1px solid var(--r-line)}
  .rev-root .logo-row{display:flex;align-items:center;justify-content:center;gap:40px;flex-wrap:wrap;margin-top:8px;opacity:.7}
  .rev-root .logo-row img{max-height:32px;width:auto;filter:grayscale(1) brightness(2)}

  .rev-root .cta{padding:100px 0;background:#0d0d0d}
  .rev-root .cta h2{font-size:clamp(26px,4vw,38px);max-width:640px;margin:0 auto 16px}
  .rev-root .cta-sub{color:var(--r-muted);font-size:16px;max-width:480px;margin:0 auto 32px}
  .rev-root .cta-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-bottom:20px}
  .rev-root .btn{background:#fff;color:#0a0a0a;font-weight:700;font-size:15px;padding:15px 28px;border-radius:8px;border:none;cursor:pointer}
  .rev-root .btn-ghost{border:1.5px solid #333;color:#fff;font-weight:600;font-size:15px;padding:14px 26px;border-radius:8px}
  .rev-root .btn-ghost:hover{border-color:#666}
  .rev-root .cta-link{display:inline-block;font-size:14px;color:var(--r-muted);text-decoration:underline;text-underline-offset:3px}
  .rev-root .cta-link:hover{color:#fff}

  .rev-root footer{padding:48px 0;border-top:1px solid var(--r-line)}
  .rev-root .footer-logo{font-weight:800;font-size:18px;margin-bottom:10px}
  .rev-root .footer-tag{color:var(--r-muted);font-size:14px;max-width:340px;margin:0 auto 14px}
  .rev-root footer a{color:var(--r-muted);text-decoration:none}
  .rev-root .footer-copy{color:#555;font-size:11px;margin-top:16px}

  @media(max-width:900px){
    .rev-root .rev-grid{grid-template-columns:repeat(2,1fr)}
  }
  @media(max-width:600px){
    .rev-root .rev-grid{grid-template-columns:1fr}
  }
`;
