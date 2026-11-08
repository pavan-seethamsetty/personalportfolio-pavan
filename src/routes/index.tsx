import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Server, BrainCircuit, Handshake } from "lucide-react";
import { site } from "@/data/site";
import { artifacts } from "@/data/artifacts";
import { ArtifactCard } from "@/components/ArtifactCard";
import { Reveal, SectionHeading } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pavan Kumar Seethamsetty – Data & AI Portfolio" },
      { name: "description", content: "Portfolio of Pavan Kumar Seethamsetty: 10 years of SAP SuccessFactors experience, now pursuing Data Analytics & AI at Indiana Wesleyan University." },
      { property: "og:title", content: "Pavan Kumar Seethamsetty – Data & AI Portfolio" },
      { property: "og:description", content: "Enterprise HR Systems Consultant → Data & AI Professional." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const skills = ["SAP SuccessFactors EC", "HR Data Migration", "Business Process Design", "Data Analytics", "Data Governance", "Machine Learning", "Generative AI", "Prompt Engineering", "Stakeholder Management"];

const values = [
  { icon: Server, title: "Enterprise Systems Expertise", text: "10 years implementing SAP solutions for global clients." },
  { icon: BrainCircuit, title: "Data & AI Skills", text: "Analytics, data governance, ML/DL concepts and generative AI tools." },
  { icon: Handshake, title: "Business-to-Tech Translator", text: "Turning stakeholder needs into working, user-friendly solutions." },
];

function Hero() {
  const initials = site.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <section className="bg-hero relative overflow-hidden text-primary-foreground">
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1fr_auto] md:py-28">
        <div className="animate-fade-up">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">Graduate Portfolio · Indiana Wesleyan University</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">{site.name}</h1>
          <p className="mt-5 max-w-xl text-lg opacity-85 sm:text-xl">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/artifacts" className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              View My Artifacts <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 font-semibold transition-colors hover:bg-primary-foreground/10">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="animate-fade-up mx-auto">
          <div className="flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-4 border-accent/60 bg-primary-foreground/10 text-6xl font-bold shadow-2xl sm:h-64 sm:w-64">
            {site.photo ? <img src={site.photo} alt={`Portrait of ${site.name}`} className="h-full w-full object-cover" /> : <span aria-label={`Profile photo placeholder for ${site.name}`}>{initials}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div>
          <SectionHeading eyebrow="Bio" title="About Me" />
          <p className="text-lg leading-relaxed text-muted-foreground">
            I am a graduate student at Indiana Wesleyan University pursuing advanced studies in Data Analytics and Artificial Intelligence. Before returning to academia, I spent 10 years as an SAP SuccessFactors Employee Central consultant in India, where I designed, configured and implemented global HR systems for enterprise clients. I led requirement workshops, translated business processes into system solutions, managed data migrations, and supported go-lives across multiple countries. After a 12-year gap from formal education, I came back to school to combine my enterprise systems experience with modern data analytics, machine learning and generative AI.
          </p>
        </div>
        <div className="self-end rounded-2xl border border-border bg-muted p-6">
          <h3 className="mb-4 font-semibold text-primary">Skills</h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li key={s} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-primary">{s}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

function Value() {
  return (
    <section className="bg-muted py-20">
      <Reveal className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Value" title="What I Bring" intro="I bridge enterprise business processes and data-driven intelligence. With a decade of hands-on ERP/HCM implementation experience and new training in analytics and AI, I help organizations turn their operational data into better decisions, and I make AI solutions practical, governed and aligned with real business needs." />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="card-lift rounded-2xl border border-border bg-card p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Featured() {
  const featured = artifacts.filter((a) => a.featured).slice(0, 3);
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <SectionHeading eyebrow="Work" title="Featured Artifacts" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => <ArtifactCard key={a.slug} artifact={a} cta="View Artifact" />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/artifacts" className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
            See All Artifacts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Value />
      <Featured />
    </>
  );
}
