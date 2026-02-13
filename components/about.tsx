import { SectionHeading } from "@/components/section-heading";
import { content } from "@/lib/content";

export function About() {
  return (
    <section className="border-b border-border py-20 sm:py-24" aria-labelledby="about-heading">
      <SectionHeading headingId="about-heading" label="Biography" title="About" />

      <div className="grid items-start gap-8 md:grid-cols-[auto_1fr] md:gap-8">
        <div className="w-fit">
          <img
            src={content.about.photo}
            alt={`${content.site.name} portrait`}
            className="h-[260px] w-auto border border-border object-contain"
          />
        </div>

        <p className="max-w-4xl text-base leading-relaxed text-foreground/88">{content.about.shortBio}</p>
      </div>
    </section>
  );
}
