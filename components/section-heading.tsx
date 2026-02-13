type SectionHeadingProps = {
  headingId: string;
  label: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ headingId, label, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{label}</p>
      <h2 id={headingId} className="text-2xl font-semibold leading-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? <p className="max-w-2xl text-sm text-muted sm:text-base">{subtitle}</p> : null}
    </div>
  );
}
