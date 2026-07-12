export function SectionSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={`animate-pulse section-padding ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="container-custom">
        <div className="mx-auto mb-8 h-4 w-24 rounded-full bg-primary/20" />
        <div className="mx-auto mb-4 h-10 w-64 rounded-lg bg-navy/10 dark:bg-white/10" />
        <div className="mx-auto h-4 w-96 max-w-full rounded bg-navy/5 dark:bg-white/5" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="aspect-[4/3] rounded-2xl bg-navy/5 dark:bg-white/5" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-20 rounded-xl bg-navy/5 dark:bg-white/5"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
