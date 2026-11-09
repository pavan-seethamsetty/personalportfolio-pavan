import { Mail } from "lucide-react";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm opacity-90 hover:text-accent">
            <Mail className="h-4 w-4" /> {site.email}
          </a>
        </div>
        <p className="text-sm opacity-75">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
