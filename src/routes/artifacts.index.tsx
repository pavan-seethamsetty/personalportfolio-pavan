import { createFileRoute } from "@tanstack/react-router";
import { artifacts } from "@/data/artifacts";
import { ArtifactCard } from "@/components/ArtifactCard";
import { Reveal, SectionHeading } from "@/components/Reveal";

export const Route = createFileRoute("/artifacts/")({
  head: () => ({
    meta: [
      { title: "Artifacts – Pavan Kumar Seethamsetty" },
      { name: "description", content: "Projects and work completed during my graduate program in Data Analytics and AI." },
      { property: "og:title", content: "Artifacts – Pavan Kumar Seethamsetty" },
      { property: "og:description", content: "Projects and work completed during my graduate program." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArtifactsPage,
});

function ArtifactsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="animate-fade-up">
        <SectionHeading eyebrow="Portfolio" title="Artifacts" intro="A collection of projects and work I completed during my graduate program." />
      </div>
      <Reveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artifacts.map((a) => <ArtifactCard key={a.slug} artifact={a} />)}
      </Reveal>
    </section>
  );
}
