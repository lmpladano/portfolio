import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { content } from "@/lib/content";

export function Experience() {
  return (
    <section className="border-b border-border py-20 sm:py-24" aria-labelledby="experience-heading">
      <SectionHeading
        headingId="experience-heading"
        label="Career"
        title="Experience"
        subtitle="End-to-end product and engineering delivery across client web platforms."
      />

      <div className="space-y-8">
        {content.experience.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="grid gap-4 border-b border-border pb-8 last:border-0 last:pb-0 sm:grid-cols-[1fr_auto] sm:items-start"
          >
            <div className="order-2 sm:order-1">
              <div>
                <h3 className="text-2xl leading-tight">{item.role}</h3>
                <p className="text-base text-muted">
                  {item.company} · {item.employmentType}
                </p>
                <div className="mt-1 text-base leading-relaxed text-muted">
                  <p>
                    {item.dateRange} · {item.duration}
                  </p>
                  <p>
                    {item.location} · {item.workMode}
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted">{item.description}</p>
            </div>
            <div className="order-1 relative h-12 w-12 overflow-hidden rounded-sm border border-border sm:order-2">
              <Image src={item.logo} alt={`${item.company} logo`} fill sizes="48px" className="object-cover" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
