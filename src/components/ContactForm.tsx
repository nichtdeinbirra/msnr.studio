"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/site";
import { Arrow } from "./ui";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-2xl border border-line bg-surface px-4 py-3.5 text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-lime";

/**
 * Contact form handled by Netlify Forms. Netlify detects the form from
 * public/__forms.html at deploy time; this component posts the same fields there.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-surface p-8 text-center">
        <p className="text-xl font-medium">Danke, ist angekommen.</p>
        <p className="mt-2 text-muted">Ich melde mich bei dir.</p>
      </div>
    );
  }

  return (
    <form name="kontakt" onSubmit={onSubmit} className="grid gap-4 text-left">
      <input type="hidden" name="form-name" value="kontakt" />
      <p hidden>
        <label>
          Nicht ausfüllen: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm text-muted">Name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="text-sm text-muted">E-Mail</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm text-muted">Was hast du vor?</span>
        <textarea name="nachricht" required rows={5} className={`${field} resize-y`} />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Was mit deinen Angaben passiert, steht im{" "}
          <Link href="/datenschutz" className="text-ink underline underline-offset-4">
            Datenschutz
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-lime disabled:opacity-60"
        >
          {status === "sending" ? "Wird gesendet …" : "Nachricht senden"}
          <Arrow className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
        </button>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-[#ff8a7a]">
          Das hat leider nicht geklappt. Schreib mir direkt an{" "}
          <a href={`mailto:${site.contact.email}`} className="underline underline-offset-4">
            {site.contact.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
