export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-line rounded-sm p-6 md:p-7 bg-panel hover:border-accent/60 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-[family-name:var(--font-display)] text-[18px] font-medium text-ink group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <span className="shrink-0 text-[11px] tracking-wide uppercase text-ink-faint mt-1.5">
          {project.status}
        </span>
      </div>

      <p className="text-[14.5px] text-ink-dim leading-relaxed mb-4">{project.description}</p>

      <p className="text-[12.5px] text-ink-faint mb-4">{project.stack.join("  ·  ")}</p>

      <span className="inline-flex items-center gap-1.5 text-[13px] text-accent">
        {project.linkLabel}
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </a>
  );
}
