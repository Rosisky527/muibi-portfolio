import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-32 md:py-44">
      <div className="container-x text-center">
        <p className="font-[family-name:var(--font-display)] text-[13px] tracking-[0.18em] uppercase text-accent mb-4">
          404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-[30px] md:text-[38px] font-semibold text-ink mb-4">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-[15px] text-ink-dim mb-10 max-w-md mx-auto">
          The page you&apos;re looking for may have been moved or never existed. Let&apos;s get
          you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-[14px] font-medium text-void hover:opacity-90 transition-opacity"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
