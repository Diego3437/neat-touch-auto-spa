import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-posts";
import { blogPostingSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

// Render inline markdown links [label](/href) as real links; plain text otherwise.
function renderInline(text: string) {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const [, label, href] = match;
    parts.push(
      <Link key={key++} href={href} className="text-[#C9A84C] font-semibold hover:underline">
        {label}
      </Link>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const schema = blogPostingSchema({
    title: post.title,
    description: post.metaDescription,
    slug: post.slug,
    date: post.date,
  });
  const pageSchema = webPageSchema({
    name: post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Convert markdown-ish content to simple paragraphs
  const paragraphs = post.content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [schema, pageSchema, breadcrumb],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#C9A84C] text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>

          <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs px-3 py-1 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {paragraphs.map((line, i) => {
              if (line.startsWith("# ")) {
                return null; // skip h1, already in hero
              }
              if (line.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-black mt-10 mb-4"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("### ")) {
                return (
                  <h3
                    key={i}
                    className="text-xl font-semibold text-black mt-8 mb-3"
                  >
                    {line.replace("### ", "")}
                  </h3>
                );
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-gray-600 leading-relaxed ml-4 list-disc mb-1">
                    {renderInline(line.replace("- ", ""))}
                  </li>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {renderInline(line)}
                </p>
              );
            })}
          </div>

          {/* Author/about */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-start gap-4">
            <div className="w-12 h-12 bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
              <Tag size={20} className="text-[#C9A84C]" />
            </div>
            <div>
              <p className="font-semibold text-black text-sm">Neat Touch Auto Spa</p>
              <p className="text-gray-500 text-xs mt-0.5">
                Mobile auto detailing experts serving the Chicago suburbs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
