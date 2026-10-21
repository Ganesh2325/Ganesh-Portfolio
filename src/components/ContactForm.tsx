"use client";
import { useState, type FormEvent } from "react";
import Icon from "./Icon";

/** Static-site friendly: composes an email in the visitor's mail app. */
export default function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = `Portfolio enquiry from ${f.get("name")}`;
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = "ease-site w-full border-0 border-b border-line bg-transparent px-0 py-4 text-lg text-fg placeholder:text-muted focus:border-accent focus:outline-none";
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6">
      <label className="sr-only" htmlFor="cf-name">Full name</label>
      <input id="cf-name" name="name" required placeholder="Full Name" autoComplete="name" className={field} />
      <label className="sr-only" htmlFor="cf-email">Email address</label>
      <input id="cf-email" name="email" type="email" required placeholder="Email Address" autoComplete="email" className={field} />
      <label className="sr-only" htmlFor="cf-msg">Message</label>
      <textarea id="cf-msg" name="message" required rows={5} placeholder="Your Message" className={field} />
      <button type="submit" data-magnetic className="label transition-colors duration-300 mt-4 inline-flex items-center justify-center gap-2 self-start rounded-full bg-fg px-8 py-4 text-bg hover:bg-accent hover:text-white">
        Send Message <Icon name="send" className="h-4 w-4" />
      </button>
      <p role="status" className="text-sm text-muted">{sent ? "Opening your email app…" : ""}</p>
    </form>
  );
}
