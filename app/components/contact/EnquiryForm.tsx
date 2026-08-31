import { useState } from "react";

import { Button } from "~/components/ui/Button";
import { cn } from "~/lib/cn";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as
  string | undefined;

type Status = "idle" | "submitting" | "success" | "error";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "min-h-11 w-full border border-steel-400 bg-sheet px-4 py-3 text-base text-ink " +
  "placeholder:text-steel-500 focus:border-accent focus:outline-none";

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [failure, setFailure] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people cannot see this field, bots fill it in.
    if (data.get("company_website")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Enter your name so we know who to reply to.";
    if (!email) nextErrors.email = "Enter an email address for the quote.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "That email address does not look complete.";
    if (!message)
      nextErrors.message = "Describe the part, the grade and the volume.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!ACCESS_KEY) {
      setStatus("error");
      setFailure(
        "The enquiry form is not connected yet. Call or WhatsApp us on the number below and we will pick it up straight away.",
      );
      return;
    }

    setStatus("submitting");
    setFailure(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Website enquiry from ${name}`,
          from_name: "Dev Components website",
          name,
          email,
          phone: data.get("phone"),
          message,
        }),
      });

      if (!response.ok)
        throw new Error(`Request failed with ${response.status}`);

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setFailure(
        "The enquiry did not go through. Call or WhatsApp us on the number below and we will pick it up straight away.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-accent bg-accent-soft p-8" role="status">
        <p className="eyebrow text-accent-deep">Enquiry sent</p>
        <h3 className="mt-4 text-xl font-semibold text-ink">We have it.</h3>
        <p className="mt-3 text-steel-700">
          Someone from the team will come back to you with a quote. If it is
          urgent, call the number below — that reaches a person faster than
          email.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot. Hidden from people and from screen readers, visible to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Field id="name" label="Name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={cn(fieldClass, errors.name && "border-red-600")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={cn(fieldClass, errors.email && "border-red-600")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </Field>

        <Field id="phone" label="Phone" hint="Optional">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91"
            className={fieldClass}
          />
        </Field>
      </div>

      <Field id="message" label="What do you need?" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Part profile, grade, thickness, annual volume. Attach a drawing by email if you have one."
          className={cn(
            fieldClass,
            "resize-y",
            errors.message && "border-red-600",
          )}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </Field>

      {failure ? (
        <p
          role="alert"
          className="border border-red-600 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          {failure}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="self-start disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="flex items-baseline gap-2 text-sm font-semibold text-ink"
      >
        {label}
        {hint ? (
          <span className="font-mono text-sm font-normal text-steel-500">
            {hint}
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
