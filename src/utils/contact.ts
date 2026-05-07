export type ContactPayload = {
  source: string;
  name: string;
  email: string;
  phone?: string;
  inquiry?: string;
  market?: string;
  timing?: string;
  message?: string;
};

type ContactSubmitResult =
  | {
      ok: true;
      message: string;
    }
  | {
      ok: false;
      fallback: true;
      message: string;
    };

function cleanValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function getFormValue(formData: FormData, key: string) {
  return cleanValue(formData.get(key));
}

export function buildMailtoHref(payload: ContactPayload) {
  const subject = encodeURIComponent(
    `VELARÉ ${payload.inquiry || payload.source} inquiry`,
  );
  const lines = [
    `Source: ${payload.source}`,
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.inquiry ? `Inquiry: ${payload.inquiry}` : "",
    payload.market ? `Market: ${payload.market}` : "",
    payload.timing ? `Timing: ${payload.timing}` : "",
    "",
    payload.message ? `Message:\n${payload.message}` : "",
  ].filter(Boolean);

  return `mailto:private@velare.residences?subject=${subject}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

export async function submitContactRequest(
  payload: ContactPayload,
): Promise<ContactSubmitResult> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = (await response.json().catch(() => ({}))) as {
      ok?: boolean;
      fallback?: boolean;
      message?: string;
    };

    if (response.ok && data.ok === true && !data.fallback) {
      return {
        ok: true,
        message: data.message || "Your private brief has been received.",
      };
    }

    return {
      ok: false,
      fallback: true,
      message:
        data.message ||
        "Opening your email client so the private office receives the brief.",
    };
  } catch {
    return {
      ok: false,
      fallback: true,
      message: "Opening your email client so the private office receives the brief.",
    };
  }
}
