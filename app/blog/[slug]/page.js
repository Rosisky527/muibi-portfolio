import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="py-24 md:py-32">
      <div className="container-x">
        <FadeIn>
          <Link href="/blog" className="text-[13px] text-ink-faint hover:text-accent transition-colors">
            ← Back to blog
          </Link>

          <p className="mt-6 text-[12.5px] text-ink-faint">{formatDate(post.date)}</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-[28px] md:text-[38px] font-semibold text-ink max-w-2xl leading-tight">
            {post.title}
          </h1>

          <article
            className="prose-custom mt-10 max-w-2xl text-[15.5px] text-ink-dim leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </FadeIn>
      </div>
    </div>
  );
}
