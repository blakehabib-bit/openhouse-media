import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, suburb } = await req.json();

  if (!name || !email || !suburb) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await resend.emails.send({
    from: "leads@thedigitaldoorknock.co.nz",
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

  return NextResponse.json({ ok: true });
}
