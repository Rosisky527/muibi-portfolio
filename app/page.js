import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import FloatingIcons from "@/components/FloatingIcons";
import TypingEffect from "@/components/TypingEffect";
import AnimatedCounter from "@/components/AnimatedCounter";
import FadeIn from "@/components/FadeIn";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { profile, stats, rotatingRoles, services, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <AnimatedBackground />
        <FloatingIcons />
        <div className="container-x relative z-10">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-8 bg-accent" />
            <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-accent">
              Available for freelance &amp; remote work
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] font-semibold text-ink text-[38px] leading-[1.1] sm:text-[52px] md:text-[62px] max-w-4xl">
            {profile.name}
          </h1>

          <div className="mt-4 h-9 sm:h-10">
            <span className="font-[family-name:var(--font-display)] text-[20px] sm:text-[26px] text-ink-dim">
              <TypingEffect words={rotatingRoles} />
            </span>
          </div>

          <p className="mt-6 text-[16px] md:text-[17px] text-ink-dim max-w-xl leading-relaxed">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-[14px] font-medium text-void hover:opacity-90 transition-opacity"
            >
              View my work
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-sm border border-line px-6 py-3 text-[14px] text-ink hover:border-accent hover:text-accent transition-colors"
            >
              Download résumé
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 border-t border-line">
        <div className="container-x">
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-[family-name:var(--font-display)] text-[30px] sm:text-[36px] font-semibold text-accent">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[12.5px] text-ink-faint mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 md:py-28 border-t border-line">
        <div className="container-x">
          <FadeIn>
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-ink-faint">
                  About
                </span>
              </div>
              <div className="max-w-2xl">
                <p className="text-[18px] md:text-[20px] text-ink leading-relaxed">{profile.bio}</p>
                <Link
                  href="/about"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] text-accent"
                >
                  More about me <span>→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 md:py-28 border-t border-line">
        <div className="container-x">
          <FadeIn>
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-ink-faint">
                  Services
                </span>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-[26px] md:text-[30px] font-semibold text-ink">
                  What I can build for you
                </h2>
              </div>
              <Link href="/services" className="text-[13.5px] text-accent inline-flex items-center gap-1.5">
                All services <span>→</span>
              </Link>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.slice(0, 6).map((s, i) => (
              <FadeIn key={s.title} delay={i * 60}>
                <ServiceCard {...s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 md:py-28 border-t border-line">
        <div className="container-x">
          <FadeIn>
            <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
              <div>
                <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-ink-faint">
                  Selected work
                </span>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-[26px] md:text-[30px] font-semibold text-ink">
                  Recent projects
                </h2>
              </div>
              <Link href="/projects" className="text-[13.5px] text-accent inline-flex items-center gap-1.5">
                All projects <span>→</span>
              </Link>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.slice(0, 4).map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 md:py-28 border-t border-line">
        <div className="container-x">
          <FadeIn>
            <div className="max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-[28px] md:text-[34px] font-semibold text-ink leading-tight">
                Have a project in mind? Let&apos;s talk.
              </h2>
              <p className="mt-4 text-[15px] text-ink-dim leading-relaxed">
                Send over the brief and I&apos;ll get back to you with scope and timeline.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-[14px] font-medium text-void hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
