import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} for freelance web development work.`,
};

export default function ContactPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          <FadeIn>
            <div>
              <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-accent">
                Contact
              </span>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-[30px] md:text-[38px] font-semibold text-ink leading-tight">
                Let&apos;s build something.
              </h1>
              <p className="mt-5 text-[15px] text-ink-dim leading-relaxed max-w-sm">
                Fill out the form, or reach me directly through any of the channels below. I
                usually reply within a day.
              </p>

              <div className="mt-10 space-y-4">
                <a href={`mailto:${profile.email}`} className="block text-[14px] text-ink hover:text-accent transition-colors">
                  {profile.email}
                </a>
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="block text-[14px] text-ink hover:text-accent transition-colors">
                  WhatsApp — {profile.phoneDisplay}
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="block text-[14px] text-ink hover:text-accent transition-colors">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="block text-[14px] text-ink hover:text-accent transition-colors">
                  LinkedIn
                </a>
                <p className="text-[14px] text-ink-dim">{profile.location}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
