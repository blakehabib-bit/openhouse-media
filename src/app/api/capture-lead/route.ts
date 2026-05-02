import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, suburb } = await req.json();

  if (!name || !email || !suburb) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const firstName = name.split(" ")[0];

  // Notify Blake
  await resend.emails.send({
    from: "blake@thedigitaldoorknock.com",
    to: "blake@thedigitaldoorknock.com",
    subject: `New lead: ${name} checked ${suburb}`,
    html: `
      <h2>New suburb check on The Digital Door Knock</h2>
      <table>
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Suburb</strong></td><td>${suburb}</td></tr>
        <tr><td><strong>Time</strong></td><td>${new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" })}</td></tr>
      </table>
    `,
  });

  // Send lead magnet email to the lead
  await resend.emails.send({
    from: "Blake @ The Digital Door Knock <blake@thedigitaldoorknock.com>",
    to: email,
    subject: `${firstName}, your free ${suburb} suburb audit is ready`,
    html: `
      <!DOCTYPE html>
      <html>
      <body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#4338ca,#7c3aed);padding:40px 40px 32px;text-align:center;">
                    <p style="margin:0 0 8px;color:#c4b5fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">The Digital Door Knock</p>
                    <h1 style="margin:0;color:#ffffff;font-size:26px;line-height:1.3;">Your free ${suburb} suburb audit is waiting</h1>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 16px;color:#374151;font-size:16px;">Hey ${firstName},</p>
                    <p style="margin:0 0 16px;color:#374151;font-size:16px;">You just checked if <strong>${suburb}</strong> is available — and it is.</p>
                    <p style="margin:0 0 24px;color:#374151;font-size:16px;">That means no other agent in your area has locked in exclusive content rights yet. But agents are checking suburbs every week, so that window won't stay open forever.</p>

                    <!-- What you get box -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3ff;border-radius:10px;margin-bottom:28px;">
                      <tr>
                        <td style="padding:28px;">
                          <p style="margin:0 0 16px;color:#4338ca;font-size:14px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">Your Free Suburb Audit includes:</p>
                          <p style="margin:0 0 10px;color:#374151;font-size:15px;">✓ &nbsp;<strong>Competitor Snapshot</strong> - we audit the top 5 agents in ${suburb} and show you exactly where the content gaps are and how to position yourself ahead of them</p>
                          <p style="margin:0 0 10px;color:#374151;font-size:15px;">✓ &nbsp;<strong>Your Visibility Score</strong> - we score your current online presence against the local benchmark across Instagram, TikTok, Facebook and LinkedIn</p>
                          <p style="margin:0 0 0;color:#374151;font-size:15px;">✓ &nbsp;<strong>Your Opportunity Map</strong> - the specific content angles that would give you the fastest path to owning ${suburb} online</p>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:0 0 28px;color:#374151;font-size:15px;">It's a free 15-minute call. No pitch. No pressure. If ${suburb} isn't a fit for the exclusivity model, I'll tell you straight up.</p>

                    <!-- CTA Button -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center">
                          <a href="https://calendly.com/blakehabib98/30min" style="display:inline-block;background:#7c3aed;color:#ffffff;font-size:17px;font-weight:bold;text-decoration:none;padding:16px 40px;border-radius:8px;">Book My Free Suburb Audit →</a>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:28px 0 0;color:#6b7280;font-size:13px;text-align:center;">Free 15-min call &nbsp;·&nbsp; No obligation &nbsp;·&nbsp; ${suburb} is still available</p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f9fafb;padding:24px 40px;border-top:1px solid #e5e7eb;">
                    <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">Blake Habib &nbsp;·&nbsp; The Digital Door Knock &nbsp;·&nbsp; blake@thedigitaldoorknock.com</p>
                    <p style="margin:8px 0 0;color:#9ca3af;font-size:12px;text-align:center;">You received this because you checked suburb availability at thedigitaldoorknock.com</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });

  return NextResponse.json({ ok: true });
}
