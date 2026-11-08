import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Pavan Kumar Seethamsetty" },
      { name: "description", content: "Get in touch with Pavan Kumar Seethamsetty about Data, AI and enterprise HR systems." },
      { property: "og:title", content: "Contact – Pavan Kumar Seethamsetty" },
      { property: "og:description", content: "Reach out via the contact form, phone or email." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const field = "w-full rounded-lg border border-input bg-card px-4 py-3 text-primary outline-none transition focus:border-accent focus:ring-2 focus:ring-ring/30";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-[2fr_3fr]">
      <div className="animate-fade-up">
        <SectionHeading eyebrow="Say hello" title="Contact" intro="I'd love to hear from recruiters, faculty and fellow data enthusiasts." />
        <div className="space-y-3">
          <a href="tel:+13462191083" className="card-lift flex items-center gap-3 rounded-xl border border-border bg-card p-4 font-medium text-primary">
            <Phone className="h-5 w-5 text-accent-strong" /> +1 (346) 219-1083
          </a>
          <a href={`mailto:${site.email}`} className="card-lift flex items-center gap-3 rounded-xl border border-border bg-card p-4 font-medium text-primary break-all">
            <Mail className="h-5 w-5 shrink-0 text-accent-strong" /> {site.email}
          </a>
        </div>
      </div>
      <form onSubmit={submit} className="animate-fade-up space-y-5 rounded-2xl border border-border bg-muted p-7 shadow-soft">
        {(["name", "email"] as const).map((k) => (
          <div key={k}>
            <label htmlFor={k} className="mb-1.5 block text-sm font-medium capitalize text-primary">{k}</label>
            <input id={k} type={k === "email" ? "email" : "text"} required maxLength={200} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} className={field} />
          </div>
        ))}
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-primary">Message</label>
          <textarea id="message" required rows={6} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={field} />
        </div>
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-accent-strong">
          Send Message <Send className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
