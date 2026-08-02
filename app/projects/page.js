import FadeIn from "@/components/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import { profile, projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description: `A selection of projects built by ${profile.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn>
          <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-accent">
            Selected work
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[32px] md:text-[42px] font-semibold text-ink max-w-2xl leading-tight">
            Projects I&apos;ve built.
          </h1>
        </FadeIn>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 4) * 80}>
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
