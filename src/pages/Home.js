import { Link } from "react-router-dom";

export default function Home() {
  const IMG = process.env.PUBLIC_URL;

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* ------------ main content ------------ */}
      <main className="container mx-auto flex flex-col md:flex-row items-start gap-16 px-4 md:px-8 py-16">
        {/* intro column */}
        <section className="max-w-4xl sm:max-w-5xl text-balance">
          <h1 className="text-4xl font-bold tracking-tight">
            Trading Strategies &amp; Notes
          </h1>

          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            This site tracks <strong>back‑tested strategies</strong> I created using
            QuantConnect. Each card shows the equity curve, key stats, and lets
            you copy the full Python code.{" "}
            <Link to="/strategies" className="text-teal-400 hover:underline">
              View the strategies →
            </Link>
          </p>

          <p className="mt-6 text-lg text-neutral-400 leading-relaxed">
            I also post trading notes and my thoughts on the markets&nbsp;
            <Link to="/blog" className="text-teal-400 hover:underline">
              blog
            </Link>
            . For everything else, check my{" "}
            <a
              href="https://arjunxvaish.github.io/arjun-site/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              personal site
            </a>
            .
          </p>
        </section>

        {/* right column (placeholder) */}
        <aside className="flex-1 hidden md:flex items-center justify-center">
          {/* add a hero image, animation, or KPI cards here later */}
        </aside>
      </main>

      {/* ------------ footer ------------ */}
      <footer className="w-full pb-6">
        <div className="flex flex-col items-center gap-4">
          {/* contact row */}
          <div className="flex items-center gap-10">
            <a
              href="mailto:arjunvaish22@gmail.com"
              className="flex items-center gap-3 hover:text-teal-300"
            >
              <img src={`${IMG}/gmail.png`} alt="" className="h-6 w-6" />
              arjunvaish22@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/arjun-vaish"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-teal-300"
            >
              <img src={`${IMG}/linkedin.png`} alt="" className="h-6 w-6" />
              LinkedIn
            </a>
          </div>

          {/* copyright */}
          <p className="text-xs text-neutral-600">© 2025 Arjun Vaish</p>
        </div>
      </footer>
    </div>
  );
}
