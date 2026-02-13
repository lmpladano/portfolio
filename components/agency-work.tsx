import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { content } from "@/lib/content";

export function AgencyWork() {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="agency-work-heading">
      <SectionHeading
        headingId="agency-work-heading"
        label="Agency Work"
        title="Client Websites"
        subtitle="Selected website work delivered during my time at WrightIMC."
      />

      <div className="grid gap-10 sm:grid-cols-2">
        {content.agencyWork.map((item) => (
          <article key={item.title} className="space-y-4 border-b border-border pb-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-card">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 ease-editorial hover:scale-[1.012]"
              />
            </div>
            <h3 className="text-xl leading-tight">{item.title}</h3>
            <p className="text-base leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
