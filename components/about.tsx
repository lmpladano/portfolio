import Image from "next/image";

import { content } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section className="border-b border-border py-16 sm:py-20" aria-labelledby="about-heading">
      <SectionHeading headingId="about-heading" label="About" title="About" />
      <div className="grid items-start gap-8 md:grid-cols-[220px_1fr] md:gap-10">
        <div className="relative aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl border border-border bg-card shadow-editorial">
          <Image
            src={content.about.photo}
            alt={`${content.site.name} portrait`}
            fill
            sizes="220px"
            className="object-cover"
          />
        </div>
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{content.about.shortBio}</p>
      </div>
    </section>
  );
}
