type SectionHeadingProps = {
  headingId: string;
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ headingId, label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10 border-b border-border pb-4 sm:mb-12">
      <p className="text-[11px] uppercase tracking-[0.22em] text-muted">{label}</p>
      <h2 id={headingId} className="mt-2 text-3xl leading-tight sm:text-[2.35rem]">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{subtitle}</p> : null}
    </div>
  );
}
