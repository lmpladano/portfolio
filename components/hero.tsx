import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="border-b border-border pb-16 pt-24 sm:pb-20 sm:pt-28">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Portfolio</p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
        {content.site.name}
      </h1>
      <p className="mt-4 text-lg text-foreground/90 sm:text-xl">{content.site.role}</p>
      <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">{content.site.tagline}</p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {content.site.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-200 ease-editorial hover:-translate-y-px hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted">Based in {content.site.location}</p>
    </section>
  );
}
