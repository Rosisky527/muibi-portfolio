import FadeIn from "@/components/FadeIn";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsOfServicePage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="font-[family-name:var(--font-display)] text-[28px] md:text-[34px] font-semibold text-ink mb-3">
              Terms of Service
            </h1>
            <p className="text-[13px] text-ink-faint mb-10">Last updated: August 2026</p>

            <div className="space-y-6 text-[14.5px] text-ink-dim leading-relaxed">
              <p>
                These terms govern your use of this website, operated by {profile.name}. By
                using this site, you agree to the terms below.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Use of This Site
                </h2>
                <p>
                  This website is provided for informational purposes — to present my work,
                  services, and a way to get in contact. You agree not to misuse the contact form
                  (including submitting false information, spam, or malicious content) or attempt
                  to disrupt the site&apos;s normal operation.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Intellectual Property
                </h2>
                <p>
                  Unless otherwise noted, the design, text, and project descriptions on this site
                  are my own work and may not be reproduced without permission. Project links
                  point to their own respective repositories, which carry their own licenses.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Services and Engagements
                </h2>
                <p>
                  Descriptions of services on this site are general in nature. Any actual project
                  engagement — including scope, timeline, and payment — is governed by a separate
                  agreement made directly between me and the client, not by this website.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  No Warranty
                </h2>
                <p>
                  This site is provided &quot;as is&quot; without warranties of any kind. While I
                  make reasonable efforts to keep information accurate and the site running
                  smoothly, I don&apos;t guarantee uninterrupted availability or error-free
                  content.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Changes to These Terms
                </h2>
                <p>
                  These terms may be updated from time to time. Continued use of the site after
                  changes are posted constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Contact
                </h2>
                <p>
                  Questions about these terms can be sent to{" "}
                  <a href={`mailto:${profile.email}`} className="text-accent underline">
                    {profile.email}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
