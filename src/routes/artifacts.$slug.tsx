import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getArtifact } from "@/data/artifacts";
import { ArtifactThumb } from "@/components/ArtifactCard";

export const Route = createFileRoute("/artifacts/$slug")({
  loader: ({ params }) => {
    const artifact = getArtifact(params.slug);
    if (!artifact) throw notFound();
    return { artifact };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.artifact;
    const title = a ? `${a.title} – Pavan Kumar Seethamsetty` : "Artifact not found";
    return {
      meta: [
        { title },
        { name: "description", content: a?.summary ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: a?.summary ?? "" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center">
      <h1 className="text-2xl font-bold text-primary">Artifact not found</h1>
      <Link to="/artifacts" className="mt-4 inline-block text-accent-strong underline">Back to artifacts</Link>
    </div>
  ),
  component: ArtifactDetail,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-7 shadow-soft">
      <h2 className="mb-3 text-xl font-semibold text-primary">{title}</h2>
      <div className="leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function ArtifactDetail() {
  const { artifact: a } = Route.useLoaderData();
  return (
    <article className="mx-auto max-w-4xl px-5 py-12">
      <Link to="/artifacts" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> All artifacts
      </Link>
      <div className="animate-fade-up">
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">{a.tag}</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">{a.title}</h1>
        <div className="mt-8 aspect-[16/7] overflow-hidden rounded-2xl"><ArtifactThumb artifact={a} /></div>
      </div>
      <div className="mt-10 grid gap-6">
        <Block title="Introduction"><p>{a.introduction}</p></Block>
        <Block title="Description"><p>{a.description}</p></Block>
        <Block title="Objective"><p>{a.objective}</p></Block>
        <Block title="Process">
          <ol className="list-decimal space-y-1 pl-5">{a.process.map((p) => <li key={p}>{p}</li>)}</ol>
        </Block>
        <Block title="Tools and Technologies Used">
          <ul className="flex flex-wrap gap-2">
            {a.tools.map((t) => <li key={t} className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary">{t}</li>)}
          </ul>
        </Block>
        <Block title="Value Proposition"><p>{a.valueProposition}</p></Block>
        <Block title="Unique Value"><p>{a.uniqueValue}</p></Block>
        <Block title="Relevance"><p>{a.relevance}</p></Block>
        {a.link && (
          <Block title="View the Work">
            {a.link.embed && a.link.url.endsWith(".mp4") ? (
              <video src={a.link.url} controls playsInline preload="metadata" poster={a.image} className="w-full rounded-lg border border-border bg-black" />
            ) : a.link.embed ? (
              <iframe src={a.link.url} title={a.title} className="h-[600px] w-full rounded-lg border border-border" />
            ) : (
              <a href={a.link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 font-semibold text-accent-foreground hover:bg-accent-strong">
                {a.link.label} <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </Block>
        )}
      </div>
    </article>
  );
}
