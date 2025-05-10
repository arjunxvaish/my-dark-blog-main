import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    fetch(`./posts/${slug.toLowerCase()}.md`)
      .then((r) => {
        if (!r.ok) throw new Error("Post not found");
        return r.text();
      })
      .then((txt) => {
        const { content, data } = matter(txt);
        setContent(content);
        setMeta(data);
      })
      .catch(() => {
        setContent("error");
      });
  }, [slug]);

  if (content === "error") {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-2xl">Post not found</h1>
      </div>
    );
  }

  if (!content || !meta) return <p className="p-8">Loading…</p>;

  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2">{meta.title}</h1>

      <div className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
        <span className="text-neutral-300 font-medium">Arjun Vaish</span>
        <span>·</span>
        <span>{meta.date}</span>
      </div>

      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
