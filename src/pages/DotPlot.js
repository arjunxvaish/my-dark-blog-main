// src/pages/DotPlot.jsx
export default function DotPlot() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight mb-2">
        The Dot Plot Divergence: Why the Front End Isn't Buying the Cuts
      </h1>

      <p>
        June FOMC gave us a hawkish hold under a new chair. The statement was
        rewritten the easing bias got stripped out and the dots moved. But the
        chart that matters isn't the dots by themselves. It's the dots against
        what the futures curve is actually pricing.
      </p>

      <h2 className="text-2xl font-bold">The Thesis</h2>
      <p>Four things lining up on the same read.</p>
      <ul>
        <li><strong>Statement rewrite:</strong> easing-bias language removed entirely, replaced with a direct commitment the Committee will deliver price stability.</li>
        <li><strong>Dot plot shift:</strong> nine of eighteen participants now pencil in at least one hike in 2026, versus zero in March. Median 2026 projection up to 3.8% from 3.4%.</li>
        <li><strong>Curve versus dots:</strong> Fed funds futures are pricing a flatter, higher path than the Fed's own median across every horizon on the board — 2026, 2027, 2028, even longer run.</li>
        <li><strong>New chair, old tell:</strong> Warsh skipped submitting his own dot and called the internal debate a family fight. Minutes confirmed the split. Nobody's pretending this is consensus.</li>
      </ul>
      <p>You don't need every signal to be decisive. You need them agreeing on direction. Right now they are.</p>

      <h2 className="text-2xl font-bold">Dots vs. Market: The Real Signal</h2>
      <p>
        The retail read on this meeting stops at "nine hikes projected, hawkish
        surprise." That's the headline. The actual tell is the gap between the
        blue line and the red line.
      </p>
      <p>
        The Fed's median (blue) drifts down from 3.75% in 2026 to about 3.1% by
        longer run — their own committee still sees a glide path lower over
        time. The market (red) doesn't buy it. Futures stay pinned near 4%
        through 2026 and 2027, and actually <strong>rise</strong> into 2028
        before the two lines even begin to converge at the long run. The
        market is telling the Fed it doesn't believe the cutting cycle
        resumes on schedule — if anything, positioning says the front end
        holds here or gets pushed higher before it comes down.
      </p>
      <p>That's the trade. Not the headline, the spread.</p>

      <h2 className="text-2xl font-bold">What This Means for Positioning</h2>
      <h3 className="text-xl font-semibold">Read</h3>
      <ul>
        <li><strong>Direction:</strong> rates higher-for-longer at the front end, market pricing more hawkish than the Fed's own dots.</li>
        <li><strong>Driver:</strong> inflation print sticky enough (headline PCE revised to 3.6% for 2026) that price stability language isn't just optics.</li>
        <li><strong>Confirmation:</strong> 2yr yield moved ~11bp on the day, 10yr only ~4bp — the front end is doing the repricing, not the belly or long end.</li>
        <li><strong>Risk:</strong> minutes already show the committee split. A weak jobs print or a dovish reversal collapses this fast — this is a data-dependent read, not a locked regime.</li>
      </ul>

      <div className="my-6">
        <img
          src={`${process.env.PUBLIC_URL}/DOTPLOT.png`}
          alt="FOMC dot plot vs implied Fed Funds futures, June 2026"
          className="rounded-xl shadow-md border border-neutral-800"
        />
      </div>

      <p>
        Blue line drifting down, red line staying flat to rising through 2028.
        That gap is the whole post.
      </p>

      <h2 className="text-2xl font-bold">Closing Thoughts</h2>
      <p>
        The Fed thinks it's still on a path lower. The market's telling it
        otherwise, and it's telling you at the front end first. Price
        stability language, hawkish dots, a committee that's split and a
        curve that isn't buying the median. Watch the front end, not the
        headline hike count.
      </p>
      <p>That's the whole post. Dots vs. market.</p>
    </article>
  );
}