import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Download, GraduationCap } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume – Pavan Kumar Seethamsetty" },
      { name: "description", content: "Resume of Pavan Kumar Seethamsetty: SAP SuccessFactors EC consultant turned Data & AI graduate student." },
      { property: "og:title", content: "Resume – Pavan Kumar Seethamsetty" },
      { property: "og:description", content: "10 years SAP SuccessFactors EC consulting, now Data & AI at Indiana Wesleyan University." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

const timeline = [
  { icon: Briefcase, title: "SAP SuccessFactors EC Consultant", meta: "10 years · India" },
  { icon: GraduationCap, title: "Graduate Student, Indiana Wesleyan University", meta: "2026 – present" },
];

function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16">
      <div className="animate-fade-up flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Experience" title="Resume" />
        <a href={site.resumeUrl} download className="mb-10 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground hover:bg-accent-strong">
          <Download className="h-4 w-4" /> Download Resume
        </a>
      </div>
      <ol className="mb-12 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        {timeline.map(({ icon: Icon, title, meta }, i) => (
          <li key={title} className={`contents`}>
            {i > 0 && <span aria-hidden className="hidden text-3xl font-bold text-accent md:block">→</span>}
            <div className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-strong"><Icon className="h-6 w-6" aria-hidden /></div>
              <div>
                <h3 className="font-semibold text-primary">{title}</h3>
                <p className="text-sm text-muted-foreground">{meta}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-soft">
        <object data={site.resumeUrl} type="application/pdf" className="h-[800px] w-full" aria-label="Resume PDF">
          <div className="flex h-[400px] flex-col items-center justify-center p-8 text-center text-muted-foreground">
            <p className="font-medium text-primary">Resume preview coming soon</p>
            <p className="mt-2 text-sm">Add your PDF as resume.pdf to display it here.</p>
          </div>
        </object>
      </div>
    </section>
  );
}
