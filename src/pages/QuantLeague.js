export default function QuantLeague() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight mb-2">
                First Place in QuantConnect Quant League (Q2 2025)
        </h1>
  
        {/* Intro */}
        <p className="text-neutral-300">
          In Q2 2025, our team set out to build a systematic trading strategy
          designed not just to perform, but to compete on an international stage.
          The result speaks for itself:{" "}
          <strong>+32% net return</strong> in a single quarter,{" "}
          <strong>Sharpe ratio of 1.7</strong>, and{" "}
          <strong>1st Place</strong> in the QuantConnect Quant League.
        </p>
        <p>
          This was an international competition with publicly verifiable results.
          You can view the official leaderboard here:{" "}
          <a
            href="https://www.quantconnect.com/league/2025-q2/" // replace with the actual results link
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            QuantConnect Quant League Results
          </a>
          .
        </p>
  
        {/* Image Slot */}
        <div className="my-8">
        <img
    src={`${process.env.PUBLIC_URL}/QC.png`}
    alt="QuantConnect Quant League Results"
    className="rounded-xl shadow-md border border-neutral-800"
  />
          <p className="text-sm text-neutral-500 mt-2">
            Official Q2 2025 Quant League Results
          </p>
        </div>
  
        {/* Competition */}
        <h2 className="text-2xl font-bold">The Competition</h2>
        <p>
          The Quant League isn’t a casual contest. It brings together teams from
          the top global universities and finance programs, including:
        </p>
        <ul>
          <li>
            <strong>Cornell University</strong> (Ivy League)
          </li>
          <li>
            <strong>NYU Quantitative Finance Society</strong>
          </li>
          <li>
            <strong>Imperial College London</strong>
          </li>
          <li>
            <strong>University of Texas</strong> (McCombs School of Business)
          </li>
          <li>
            University of Melbourne
          </li>
          <li>
            Chinese University of Hong Kong (<strong>CUHK</strong>)
          </li>
          <li>
            Hong Kong University of Science &amp; Technology (<strong>HKUST</strong>)
          </li>
        </ul>
        <p>
          To place <strong>first</strong> against this field validates not only
          our strategy, but also our execution.
        </p>
  
        {/* Results */}
        <h2 className="text-2xl font-bold">Results & Proof</h2>
        <p>
          <strong>1st Place – University of Washington, Q2 2025 QuantConnect Quant League</strong>
          <br />
          +32% net return | Sharpe ratio &gt; 1.7
        </p>
        <p>
          Public results available here:{" "}
          <a
            href="https://www.quantconnect.com/league/2025-q2/" // replace with correct link
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            Official Leaderboard
          </a>
        </p>
        <p>
          This was a team effort, but I am proud to have led the design,
          framework, and execution of our approach.
        </p>
  
        {/* Closing */}
        <h2 className="text-2xl font-bold">Closing Thoughts</h2>
        <p>
          This competition was more than just a leaderboard. It was proof that{" "}
          <strong>systematic, disciplined portfolio construction</strong>{" "}
          outperforms speculation and noise.
        </p>
        <p>
          The win demonstrates what’s possible when{" "}
          <strong>rigorous strategy</strong>,{" "}
          <strong>data-driven decision-making</strong>, and{" "}
          <strong>disciplined risk management</strong> come together on the
          international stage.
        </p>
      </article>
    );
  }
  