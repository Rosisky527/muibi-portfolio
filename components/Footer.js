import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line pt-14 pb-8">
      <div className="container-x">
        <div className="grid sm:grid-cols-3 gap-10 pb-10">
          <div>
            <p className="font-[family-name:var(--font-display)] text-[15px] font-semibold text-ink mb-3">
              {profile.name}
            </p>
            <p className="text-[13.5px] text-ink-dim max-w-xs leading-relaxed">{profile.tagline}</p>
          </div>

          <div>
            <p className="text-[12px] tracking-[0.14em] uppercase text-ink-faint mb-3">Site</p>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[13.5px] text-ink-dim hover:text-ink transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] tracking-[0.14em] uppercase text-ink-faint mb-3">Contact</p>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${profile.email}`} className="text-[13.5px] text-ink-dim hover:text-ink transition-colors">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-ink-dim hover:text-ink transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-ink-dim hover:text-ink transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-[13.5px] text-ink-dim hover:text-ink transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12.5px] text-ink-faint">
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-[12.5px] text-ink-faint hover:text-ink transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[12.5px] text-ink-faint hover:text-ink transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
