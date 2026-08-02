const glyphs = [
  { char: "</>", top: "12%", left: "6%", size: "22px", delay: "0s", duration: "9s" },
  { char: "{ }", top: "68%", left: "10%", size: "18px", delay: "1.2s", duration: "7.5s" },
  { char: "( )", top: "22%", left: "88%", size: "20px", delay: "0.6s", duration: "8.5s" },
  { char: "#", top: "78%", left: "82%", size: "26px", delay: "2s", duration: "10s" },
  { char: "=>", top: "48%", left: "94%", size: "16px", delay: "1.6s", duration: "8s" },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {glyphs.map((g, i) => (
        <span
          key={i}
          className="float-icon"
          style={{
            top: g.top,
            left: g.left,
            fontSize: g.size,
            animationDelay: g.delay,
            animationDuration: g.duration,
          }}
        >
          {g.char}
        </span>
      ))}
    </div>
  );
}
