// Build config used ONLY by the GitHub Pages workflow (.github/workflows/deploy-pages.yml).
// Lovable keeps using vite.config.ts, so nothing changes in the Lovable editor or its hosting.
//
// It builds a fully static copy of the site (every page pre-rendered to HTML) that can be
// served from https://<user>.github.io/<repo>/ .
import { existsSync, readFileSync } from "node:fs";
import { defineConfig, type Plugin } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Repo name = URL sub-path on GitHub Pages. The workflow sets PAGES_BASE automatically.
const BASE = (process.env.PAGES_BASE ?? "/personalportfolio-pavan/").replace(/\/?$/, "/");
const ROUTER_BASE = BASE.replace(/\/$/, "") || "/";
const LOVABLE_SITE = "https://personalportfolio-pavan.lovable.app";

// Images uploaded in Lovable live on Lovable's servers (/__l5e/...), not in the repo.
// For GitHub Pages, each `*.asset.json` import is pointed at public/images/<original file name>.
function lovableAssetsToPublicImages(): Plugin {
  const PREFIX = "\0pages-asset:";
  return {
    name: "pages:lovable-assets",
    enforce: "pre",
    async resolveId(source, importer) {
      if (!source.endsWith(".asset.json")) return null;
      const resolved = await this.resolve(source, importer, { skipSelf: true });
      return resolved ? PREFIX + resolved.id : null;
    },
    load(id) {
      if (!id.startsWith(PREFIX)) return null;
      const meta = JSON.parse(readFileSync(id.slice(PREFIX.length), "utf8"));
      // Use a copy in public/images/ if one was added; otherwise load it from the Lovable site.
      const url = existsSync(`public/images/${meta.original_filename}`)
        ? `${BASE}images/${meta.original_filename}`
        : `${LOVABLE_SITE}${meta.url}`;
      return `export default ${JSON.stringify({ ...meta, url })};`;
    },
  };
}

// Small source tweaks applied only to this build (the files in the repo stay unchanged):
//  - router knows it lives under /<repo>/
//  - root-relative links ("/favicon.png", href="/") get the /<repo>/ prefix
function subPathFixes(): Plugin {
  return {
    name: "pages:sub-path-fixes",
    enforce: "pre",
    transform(code, id) {
      if (id.endsWith("/src/router.tsx")) {
        return code.replace(
          "createRouter({",
          `createRouter({\n    basepath: ${JSON.stringify(ROUTER_BASE)},`,
        );
      }
      if (id.endsWith("/src/routes/__root.tsx") || id.endsWith("/src/lib/error-page.ts")) {
        return code
          .replaceAll(`href: "/favicon.png"`, `href: ${JSON.stringify(BASE + "favicon.png")}`)
          .replaceAll(`href="/"`, `href="${BASE}"`);
      }
      return null;
    },
  };
}

export default defineConfig({
  base: BASE,
  plugins: [
    lovableAssetsToPublicImages(),
    subPathFixes(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true, // follows links, so every artifact detail page is generated too
        autoSubfolderIndex: true,
        failOnError: true,
      },
    }),
    viteReact(),
  ],
});
