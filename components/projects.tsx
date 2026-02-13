import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { content } from "@/lib/content";

export function Projects() {
  return (
    <section className="border-b border-border py-20 sm:py-24" aria-labelledby="projects-heading">
      <SectionHeading
        headingId="projects-heading"
        label="Selected Work"
        title="Projects"
        subtitle="Recent client and product work with a focus on usable, scalable implementation."
      />

      <div className="space-y-14">
        {content.projects.map((project) => (
          <article key={project.title} className="space-y-5 border-b border-border pb-12 last:border-0 last:pb-0">
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-card">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover transition-transform duration-500 ease-editorial hover:scale-[1.012]"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl leading-tight">{project.title}</h3>
              <p className="max-w-3xl text-base leading-relaxed text-muted">{project.description}</p>

              <ul className="flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.tech.map((item) => (
                  <li key={item} className="border border-border px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-muted">
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="space-y-1 text-base text-muted">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>

              <div className="flex gap-5 pt-1 text-base">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-border transition-colors duration-200 ease-editorial hover:text-accent hover:decoration-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Live
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline decoration-border transition-colors duration-200 ease-editorial hover:text-accent hover:decoration-accent focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
