import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { getAllPosts } from "@/lib/posts";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Blog",
  description: `Notes on web development from ${profile.name}.`,
};

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn>
          <span className="font-[family-name:var(--font-display)] text-[12px] tracking-[0.18em] uppercase text-accent">
            Blog
          </span>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[32px] md:text-[42px] font-semibold text-ink max-w-2xl leading-tight">
            Notes on building web software.
          </h1>
        </FadeIn>

        <div className="mt-14 max-w-2xl divide-y divide-line">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 60}>
              <Link href={`/blog/${post.slug}`} className="group block py-8 first:pt-0">
                <p className="text-[12.5px] text-ink-faint mb-2">{formatDate(post.date)}</p>
                <h2 className="font-[family-name:var(--font-display)] text-[19px] font-medium text-ink group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-[14.5px] text-ink-dim leading-relaxed">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] text-accent">
                  Read post <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
