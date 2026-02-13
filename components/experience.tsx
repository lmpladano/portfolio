import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { content } from "@/lib/content";

export function Experience() {
  return (
    <section className="border-b border-border py-16 sm:py-20" aria-labelledby="experience-heading">
      <SectionHeading
        headingId="experience-heading"
        label="Experience"
        title="Experience"
        subtitle="Professional roles where I led delivery from architecture to launch."
      />

      <div className="space-y-6">
        {content.experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-2xl border border-border bg-card p-6 shadow-editorial sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.role}</h3>
                  <p className="text-sm text-muted">
                    {item.company} · {item.employmentType}
                  </p>
                </div>
              </div>
              <div className="text-sm text-muted sm:text-right">
                <p>{item.dateRange}</p>
                <p>{item.duration}</p>
                <p>
                  {item.location} · {item.workMode}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
