import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Services Slowdown: Beneath the Surface",
    slug: "services",
    excerpt: "New orders fell, prices surged, and inventories misaligned—beneath the surface, services are breaking down.",
    date: "Jun 6, 2025",
  },
  {
    title: "PMI Breaks Below 50",
    slug: "pmi",
    excerpt: "ISM shows contraction in services. Watch new orders, sticky prices, and what this means for NVDA and CAT.",
    date: "Jun 5, 2025",
  },
  {
    title: "Recession Risk: Delayed, Not Gone",
    slug: "recession",
    excerpt: "Markets rallied, tariffs paused—but under the surface, consumers, bonds, and delinquencies tell a darker story.",
    date: "May 17, 2025",
  },
  {
    title: "Taiwan's FX Time Bomb",
    slug: "taiwan",
    excerpt: "A surging TWD, $1.7T in USD exposure, and global flow reversals spell trouble for dollar dominance.",
    date: "May 10, 2025",
  },
  {
    title: "Trouble on the Lot",
    slug: "gm",
    excerpt: "Auto tariffs, weak sentiment, and global risk stack up. Short-duration put spread for May.",
    date: "Apr 28, 2025",
  },
  {
    title: "Uncertainty Hits Home",
    slug: "len",
    excerpt: "Housing doesn’t need to crash. It just has to guide soft. Playing it with a tight earnings put spread.",
    date: "Mar 12, 2025",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-12 font-sans">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Blog</h1>
        </div>

        <div className="flex flex-col divide-y divide-neutral-800">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="py-6 group hover:opacity-90 transition duration-200"
            >
              <div className="pb-1">
                <h2 className="text-xl font-semibold group-hover:text-white">
                  {post.title}
                </h2>
                <p className="text-neutral-400 text-sm mt-1">{post.excerpt}</p>
                <p className="text-neutral-600 text-xs mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
