"use client";

import { useId, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const formId = useId();

  return (
    <form
      id={formId}
      className="flex flex-col gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for subscribing!");
        setEmail("");
      }}
    >
      <input
        id={`${formId}-email`}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary"
        suppressHydrationWarning
      />
      <button
        type="submit"
        className="btn-primary !text-xs !py-2.5"
        suppressHydrationWarning
      >
        Subscribe
      </button>
    </form>
  );
}
