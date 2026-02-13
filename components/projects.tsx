import Image from "next/image";

import { content } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section className="border-b border-border py-16 sm:py-20" aria-labelledby="projects-heading">
      <SectionHeading
        headingId="projects-heading"
        label="Projects"
        title="Projects"
        subtitle="A quick look at selected work, built with performance and maintainability in mind."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {content.projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-editorial transition-all duration-300 ease-editorial hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <div className="space-y-4 p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted sm:text-base">{project.description}</p>
              <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.tech.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="flex gap-3 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-accent bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-200 ease-editorial hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Live
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors duration-200 ease-editorial hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Repo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
