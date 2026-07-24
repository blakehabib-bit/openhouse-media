import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, interests, message } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const interestsList: string[] = Array.isArray(interests) ? interests : [];

  await resend.emails.send({
    from: "blake@thedigitaldoorknock.com",
    to: "blake@thedigitaldoorknock.com",
    replyTo: email,
    subject: `New quote request: ${name}`,
    html: `
      <h2>New quote request from DD. Video</h2>
      <table>
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${phone || "-"}</td></tr>
        <tr><td><strong>Interested in</strong></td><td>${interestsList.length ? interestsList.join(", ") : "-"}</td></tr>
        <tr><td><strong>Message</strong></td><td>${message || "-"}</td></tr>
        <tr><td><strong>Time</strong></td><td>${new Date().toLocaleString("en-NZ", { timeZone: "Pacific/Auckland" })}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ ok: true });
}
