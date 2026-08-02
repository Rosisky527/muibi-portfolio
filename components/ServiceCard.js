export default function ServiceCard({ title, description }) {
  return (
    <div className="border border-line rounded-sm p-6 hover:border-accent/60 hover:-translate-y-0.5 transition-all duration-200 bg-panel">
      <h3 className="font-[family-name:var(--font-display)] text-[16px] font-medium text-ink mb-2">
        {title}
      </h3>
      <p className="text-[13.5px] text-ink-dim leading-relaxed">{description}</p>
    </div>
  );
}
