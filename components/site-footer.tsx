import { content } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="flex flex-col gap-2 text-base text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {content.site.name}
        </p>
        <p>{content.site.role}</p>
      </div>
    </footer>
  );
}
