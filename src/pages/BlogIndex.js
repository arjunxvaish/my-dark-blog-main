import { Link } from "react-router-dom";

const blogPosts = [
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
    date: "Mar 21, 2025",
  },
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-10">Blog</h1>
        <div className="flex flex-col gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="border-b border-neutral-800 pb-6 group-hover:bg-neutral-900/40 px-4 py-2 rounded-lg transition duration-200">
                <h2 className="text-xl font-semibold group-hover:text-white mb-1">
                  {post.title}
                </h2>
                <p className="text-neutral-400 text-sm mb-2">
                  {post.excerpt}
                </p>
                <p className="text-neutral-600 text-xs">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
