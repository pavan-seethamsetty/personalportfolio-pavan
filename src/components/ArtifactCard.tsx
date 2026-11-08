import { Link } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import type { Artifact } from "@/data/artifacts";

export function ArtifactThumb({ artifact, className = "" }: { artifact: Artifact; className?: string }) {
  if (artifact.image)
    return <img src={artifact.image} alt={`Thumbnail for ${artifact.title}`} className={`h-full w-full object-cover ${className}`} loading="lazy" />;
  return (
    <div role="img" aria-label={`Placeholder image for ${artifact.title}`} className={`bg-hero hero-grid flex h-full w-full items-center justify-center ${className}`}>
      <FileText className="h-12 w-12 text-accent" aria-hidden />
    </div>
  );
}

export function ArtifactCard({ artifact, cta = "View Details" }: { artifact: Artifact; cta?: string }) {
  return (
    <article className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="aspect-[16/9] overflow-hidden">
        <ArtifactThumb artifact={artifact} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-3 w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">{artifact.tag}</span>
        <h3 className="text-lg font-semibold leading-snug text-primary">{artifact.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{artifact.summary}</p>
        <Link
          to="/artifacts/$slug"
          params={{ slug: artifact.slug }}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent-strong"
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
