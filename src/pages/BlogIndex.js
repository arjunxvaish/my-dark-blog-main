import { Link } from "react-router-dom";

const blogPosts = [

  {
    title: "Long Vol Into the Stack: Why the VIX Trade Is the Cleanest EV on the Board",
    slug: "vix",
    excerpt:
      "Three catalysts in four weeks. Compressed vol. Calendar-stacked naked calls not spreads not ETFs. A structural read not a directional one.",
    date: "Apr 20, 2026",
  },

  {
    title: "Thesis Right Tape Wrong: The GSG Commodity Trade",
    slug: "gsg",
    excerpt:
      "Hot inflation commodities ripping. Waited for the pullback bought a defined-risk call spread. Then headlines hit. A process-over-outcome post.",
    date: "Apr 14, 2026",
  },

  {
    title: "One Headline One Payoff: The NEM Gold Trade",
    slug: "nem",
    excerpt:
      "Powell goes dovish NEM runs 16% in 20 sessions. A 104/107 May call spread paid roughly 7 to 1 on the debit.",
    date: "Apr 13, 2026",
  },

  {
    title: "The CENX Aluminum Trade: Thesis Entry Math",
    slug: "cenx",
    excerpt:
      "PMI strong primary metals leading analyst revisions up. A $5 wide call spread on the highest-beta pure-play aluminum name. Setup vehicle and structure.",
    date: "Apr 01, 2026",
  },

  {
    title: "Europe’s Debt Squeeze: Why France Matters",
    slug: "europe",
    excerpt:
      "Slow growth high debt and rising borrowing costs are creating a new flashpoint in Europe France is at the center.",
    date: "Sep 10, 2025",
  },

  {
    title: "Global Investments Return Summary 2025",
    slug: "ubs",
    excerpt: "UBS Yearbook 2025 in plain English: 125 years of returns diversification inflation factors and why the long run is really long.",
    date: "Sep 7, 2025",
  },
  {
    title: "Energy: Cracks Beneath the Surface",
    slug: "energy",
    excerpt:
      "Momentum flipped to neutral demand is softening and seasonality bites energy’s tailwind just turned into a headwind.",
    date: "Aug 16, 2025",
  },
  {
    title: "July Macro Check: PMI Strength New Orders And An Uncertain Tape",
    slug: "julymacro",
    excerpt:
      "PMI held firm new orders led tariffs sparked a relief rally and earnings risk stayed elevated. Neutral stance into reports.",
    date: "Jul 14, 2025",
  },
  {
    title: "First Place in QuantConnect Quant League",
    slug: "quant-league",
    excerpt: "How I built a systematic model that secured first place in QuantConnect's global competition.",
    date: "Jul 4, 2025",
  },  
  {
    title: "Services Slowdown: Beneath the Surface",
    slug: "services",
    excerpt: "New orders fell prices surged and inventories misaligned beneath the surface services are breaking down.",
    date: "Jun 6, 2025",
  },
  {
    title: "PMI Breaks Below 50",
    slug: "pmi",
    excerpt: "ISM shows contraction in services. Watch new orders sticky prices and what this means for NVDA and CAT.",
    date: "Jun 5, 2025",
  },
  {
    title: "Recession Risk: Delayed Not Gone",
    slug: "recession",
    excerpt: "Markets rallied tariffs paused but under the surface consumers bonds and delinquencies tell a darker story.",
    date: "May 17, 2025",
  },
  {
    title: "Taiwan's FX Time Bomb",
    slug: "taiwan",
    excerpt: "A surging TWD $1.7T in USD exposure and global flow reversals spell trouble for dollar dominance.",
    date: "May 10, 2025",
  },
  {
    title: "Trouble on the Lot",
    slug: "gm",
    excerpt: "Auto tariffs weak sentiment and global risk stack up. Short duration put spread for May.",
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
