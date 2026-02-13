import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="border-b border-border pb-20 pt-28 sm:pb-24 sm:pt-32">
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted">Portfolio</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.01] sm:text-6xl">{content.site.name}</h1>
      <p className="mt-5 text-base text-foreground/90">{content.site.role}</p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{content.site.tagline}</p>

      <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-base">
        {content.site.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noreferrer" : undefined}
            className="font-medium underline decoration-border transition-colors duration-200 ease-editorial hover:text-accent hover:decoration-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-6 text-base text-muted">{content.site.location}</p>
    </section>
  );
}
