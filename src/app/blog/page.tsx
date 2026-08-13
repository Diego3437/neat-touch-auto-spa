import Link from "next/link";
import { Calendar, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-posts";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Auto Detailing Blog | Tips & Advice | Neat Touch Auto Spa",
  description:
    "Car detailing tips, Chicago winter protection advice, pet hair removal guides, interior detailing comparisons and mobile auto detailing resources from Neat Touch Auto Spa.",
  path: "/blog",
  keywords: [
    "car detailing tips Chicago suburbs",
    "how often should you detail your car",
    "mobile auto detailing near me guide",
    "Chicago winter car protection",
  ],
});

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Auto Detailing Blog",
              description:
                "Educational auto detailing articles from Neat Touch Auto Spa for Chicago suburbs drivers.",
              path: "/blog",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
            ])
          ),
        }}
      />
      {/* Hero */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Knowledge Base
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair, serif)" }}
          >
            Detailing Tips & Advice
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expert advice on car care, detailing best practices, and how to protect your vehicle throughout the Chicago area&apos;s seasons.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-white section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="group border border-gray-200 hover:border-[#C9A84C] transition-colors duration-200"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-950 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#C9A84C] text-black text-xs font-semibold px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2
                    className="text-xl font-bold text-black mb-3 group-hover:text-[#C9A84C] transition-colors leading-tight"
                    style={{ fontFamily: "var(--font-playfair, serif)" }}
                  >
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#C9A84C] text-sm font-semibold hover:underline"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
