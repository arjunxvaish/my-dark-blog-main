import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";

const postSlugs = ["taiwan", "gm", "len"];

export default function BlogIndex() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Promise.all(
      postSlugs.map((slug) =>
        fetch(`${process.env.PUBLIC_URL}/posts/${slug}.md`).then((r) =>
          r.text()
        )
      )
    ).then((texts) => {
      const parsed = texts.map((t, i) => {
        const { data } = matter(t);
        return {
          ...data,
          slug: postSlugs[i],
        };
      });

      setPosts(parsed);
    });
  }, []);

  if (posts.length === 0) return <p className="p-8">Loading…</p>;

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-8">Blog</h1>

      <div className="flex flex-col gap-6">
        {posts.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="flex flex-col border-b border-neutral-800 pb-6 hover:bg-neutral-900/40 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <span className="mt-2 md:mt-0 text-sm text-neutral-500">
                {p.date}
              </span>
            </div>
            <p className="mt-2 text-neutral-400">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
