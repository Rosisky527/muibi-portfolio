import FadeIn from "@/components/FadeIn";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="font-[family-name:var(--font-display)] text-[28px] md:text-[34px] font-semibold text-ink mb-3">
              Privacy Policy
            </h1>
            <p className="text-[13px] text-ink-faint mb-10">Last updated: August 2026</p>

            <div className="space-y-6 text-[14.5px] text-ink-dim leading-relaxed">
              <p>
                This Privacy Policy explains how {profile.name} (&quot;I&quot;, &quot;me&quot;)
                collects, uses, and protects information submitted through this website.
              </p>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Information I Collect
                </h2>
                <p>
                  When you use the contact form on this site, I collect the information you
                  voluntarily provide: your name, email address, subject, and message content. I
                  do not use cookies or analytics trackers to collect personal data on this site
                  beyond what is submitted directly through the form.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  How I Use It
                </h2>
                <p>
                  Information submitted through the contact form is used solely to respond to
                  your inquiry. It is not sold, rented, or shared with third parties, and is not
                  used for marketing without your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Data Retention
                </h2>
                <p>
                  Messages sent through the contact form are retained only as long as needed to
                  respond to and resolve your inquiry, after which they may be deleted.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Third-Party Services
                </h2>
                <p>
                  This site may be hosted on infrastructure provided by third parties (such as
                  Vercel), which may log standard technical data (such as IP address and request
                  metadata) as part of normal hosting operations, independent of anything
                  collected directly by this site.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Your Rights
                </h2>
                <p>
                  You may request that any information you&apos;ve submitted be deleted at any
                  time by contacting {profile.email}.
                </p>
              </div>

              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[17px] font-medium text-ink mb-2">
                  Contact
                </h2>
                <p>
                  Questions about this policy can be sent to{" "}
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
