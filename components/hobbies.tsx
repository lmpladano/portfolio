import Image from "next/image";

import { content } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Hobbies() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="hobbies-heading">
      <SectionHeading
        headingId="hobbies-heading"
        label="Hobbies"
        title="Hobbies"
        subtitle="Things I build and practice outside day-to-day product work."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {content.hobbies.map((hobby) => (
          <article
            key={hobby.title}
            className="group overflow-hidden rounded-2xl border border-border bg-card shadow-editorial transition-transform duration-300 ease-editorial hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background">
              <Image
                src={hobby.image}
                alt={hobby.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-editorial group-hover:scale-[1.03]"
              />
            </div>
            <div className="space-y-2 p-5">
              <h3 className="text-lg font-semibold">{hobby.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{hobby.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
