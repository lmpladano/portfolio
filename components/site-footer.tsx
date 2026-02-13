import { content } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {content.site.name}
        </p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
