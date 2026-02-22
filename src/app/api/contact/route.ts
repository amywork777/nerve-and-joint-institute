import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { firstName, lastName, email, phone, reason, date, time, notes } =
      body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Nerve and Joint Institute <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "info@nerveandjoint.com",
      replyTo: email,
      subject: `New Appointment Request: ${firstName} ${lastName} — ${reason || "General"}`,
      html: `
        <h2 style="color:#0B6E6E;margin-bottom:20px">New Appointment Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:12px 8px;font-weight:bold;width:140px;color:#334155">Name</td>
            <td style="padding:12px 8px;color:#475569">${firstName} ${lastName}</td>
          </tr>
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:12px 8px;font-weight:bold;color:#334155">Email</td>
            <td style="padding:12px 8px;color:#475569">${email}</td>
          </tr>
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:12px 8px;font-weight:bold;color:#334155">Phone</td>
            <td style="padding:12px 8px;color:#475569">${phone || "Not provided"}</td>
          </tr>
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:12px 8px;font-weight:bold;color:#334155">Reason</td>
            <td style="padding:12px 8px;color:#475569">${reason || "Not specified"}</td>
          </tr>
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:12px 8px;font-weight:bold;color:#334155">Preferred Date</td>
            <td style="padding:12px 8px;color:#475569">${date || "No preference"}</td>
          </tr>
          <tr style="border-bottom:1px solid #eee">
            <td style="padding:12px 8px;font-weight:bold;color:#334155">Preferred Time</td>
            <td style="padding:12px 8px;color:#475569">${time || "No preference"}</td>
          </tr>
          <tr>
            <td style="padding:12px 8px;font-weight:bold;color:#334155;vertical-align:top">Notes</td>
            <td style="padding:12px 8px;color:#475569">${notes || "None"}</td>
          </tr>
        </table>
        <p style="margin-top:24px;font-size:12px;color:#94a3b8">
          This message was sent from the Nerve and Joint Institute website contact form.
        </p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
