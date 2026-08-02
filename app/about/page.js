import FadeIn from "@/components/FadeIn";
import { profile, skills } from "@/lib/data";

export const metadata = {
  title: "About",
  description: `About ${profile.name}, a Full Stack Developer based in ${profile.location}.`,
};

export default function AboutPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn>
          <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-accent">
            About
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[32px] md:text-[42px] font-semibold text-ink max-w-2xl leading-tight">
            The person behind the code.
          </h1>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div />
          <div className="max-w-2xl space-y-5">
            {profile.aboutLong.map((para, i) => (
              <FadeIn key={i} delay={i * 80}>
                <p className="text-[15.5px] text-ink-dim leading-relaxed">{para}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
          <div>
            <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-ink-faint">
              Skills
            </span>
          </div>
          <div className="grid sm:grid-cols-3 gap-x-10 gap-y-10 max-w-3xl">
            {skills.map((group, i) => (
              <FadeIn key={group.group} delay={i * 100}>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-[14px] font-medium text-ink mb-3">
                    {group.group}
                  </h3>
                  <ul className="space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="text-[13.5px] text-ink-dim">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
