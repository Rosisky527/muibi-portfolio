import nodemailer from "nodemailer";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message } = body || {};

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const submission = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    subject: String(subject || "New portfolio contact form message").slice(0, 300),
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

  // If email credentials are configured, actually send the message.
  if (EMAIL_USER && EMAIL_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: EMAIL_USER, pass: EMAIL_PASS },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${EMAIL_USER}>`,
        to: EMAIL_TO || EMAIL_USER,
        replyTo: submission.email,
        subject: `[Portfolio] ${submission.subject}`,
        text: `From: ${submission.name} <${submission.email}>\n\n${submission.message}`,
      });

      return Response.json({ success: true, delivered: true });
    } catch (err) {
      console.error("Contact form email failed to send:", err);
      return Response.json(
        { error: "The message could not be sent right now. Please try again shortly or email directly." },
        { status: 502 }
      );
    }
  }

  // Fallback for local development / before email credentials are configured:
  // log the submission server-side so nothing is silently lost.
  console.log("New contact form submission (email not configured):", submission);

  return Response.json({ success: true, delivered: false });
}
