import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { profile, services } from "@/lib/data";

export const metadata = {
  title: "Services",
  description: `Web development services offered by ${profile.name} — from business websites to full custom applications.`,
};

export default function ServicesPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn>
          <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-accent">
            Services
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[32px] md:text-[42px] font-semibold text-ink max-w-2xl leading-tight">
            What I can build for you.
          </h1>
          <p className="mt-5 text-[15.5px] text-ink-dim max-w-xl leading-relaxed">
            From a single landing page to a full custom application — here&apos;s what I offer,
            end to end.
          </p>
        </FadeIn>

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={(i % 6) * 60}>
              <ServiceCard {...s} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-20 max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-[22px] font-semibold text-ink">
              Not sure what you need?
            </h2>
            <p className="mt-3 text-[14.5px] text-ink-dim leading-relaxed">
              Tell me what you&apos;re trying to achieve and I&apos;ll help you figure out the
              right scope — no pressure, no jargon.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-[14px] font-medium text-void hover:opacity-90 transition-opacity"
            >
              Start a conversation
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
