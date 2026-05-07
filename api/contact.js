function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return text(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildEmailHtml(payload) {
  const rows = [
    ["Source", payload.source],
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone],
    ["Inquiry", payload.inquiry],
    ["Market", payload.market],
    ["Timing", payload.timing],
  ]
    .filter(([, value]) => text(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:10px 14px;color:#6f6f6f;border-bottom:1px solid #eee;">${label}</td><td style="padding:10px 14px;color:#111;border-bottom:1px solid #eee;">${escapeHtml(
          value,
        )}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Inter,Arial,sans-serif;color:#111;line-height:1.6;">
      <p style="letter-spacing:.16em;text-transform:uppercase;color:#c6a87d;font-size:12px;font-weight:700;">VELARÉ Private Brief</p>
      <h1 style="font-family:Georgia,serif;font-size:32px;font-weight:500;margin:8px 0 24px;">New private office inquiry</h1>
      <table style="border-collapse:collapse;width:100%;max-width:640px;border:1px solid #eee;">${rows}</table>
      <div style="margin-top:24px;max-width:640px;">
        <p style="letter-spacing:.14em;text-transform:uppercase;color:#6f6f6f;font-size:11px;font-weight:700;">Message</p>
        <p style="white-space:pre-wrap;">${escapeHtml(payload.message)}</p>
      </div>
    </div>
  `;
}

export default async function handler(request, response) {
  if (request.method === "OPTIONS") {
    response.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return response.status(204).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({ message: "Method not allowed" });
  }

  const payload =
    typeof request.body === "string" ? JSON.parse(request.body || "{}") : request.body || {};
  const name = text(payload.name);
  const email = text(payload.email);
  const message = text(payload.message);

  if (!name || !email || !message) {
    return response.status(400).json({
      ok: false,
      message: "Name, email, and message are required.",
      fallback: true,
    });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(202).json({
      ok: false,
      fallback: true,
      message:
        "Email delivery is ready for RESEND_API_KEY. Opening email fallback for now.",
    });
  }

  const to = process.env.CONTACT_TO_EMAIL || "private@velare.residences";
  const from = process.env.CONTACT_FROM_EMAIL || "VELARÉ <onboarding@resend.dev>";
  const subject = `VELARÉ inquiry from ${name}`;

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      html: buildEmailHtml({ ...payload, name, email, message }),
    }),
  });

  if (!resendResponse.ok) {
    return response.status(502).json({
      ok: false,
      fallback: true,
      message: "Email delivery could not complete. Opening email fallback.",
    });
  }

  return response.status(200).json({
    ok: true,
    message: "Your private brief has been received.",
  });
}
