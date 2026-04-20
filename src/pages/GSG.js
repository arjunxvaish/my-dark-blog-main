export default function GSG() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Thesis Right Tape Wrong: The GSG Commodity Trade
        </h1>
  
        <p>
          Inflation running hot. Commodities in a regime. The obvious macro trade on the
          board. This one is a process breakdown of a commodity structure I put on in
          early April — and a reminder that a good setup and a good fill don't guarantee
          a good outcome. What they guarantee is that when it doesn't work you survive
          to trade the next one.
        </p>
  
        {/* Chart: setup context */}
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/GSGchart.png`}
            alt="GSG daily chart showing the run from $24 to $34 and pullback"
            className="rounded-xl shadow-md border border-neutral-800"
          />
          <p className="text-sm text-neutral-500 mt-2">
            GSG daily. $24 → $34 rally then pullback to $30.35. Strikes sit at $34 / $35.
          </p>
        </div>
  
        <h2 className="text-2xl font-bold">The Thesis</h2>
        <p>
          Inflation prints came in hot. Commodities had been ripping for weeks —{" "}
          <strong>GSG</strong> (the iShares S&amp;P GSCI Commodity ETF) ran from $24 to
          $34 in a straight line. Broad commodity basket energy-heavy with metals and
          ags. The cleanest way to express inflation without single-name exposure.
        </p>
        <ul>
          <li><strong>Hot CPI:</strong> real assets bid as a hedge.</li>
          <li><strong>Energy leadership:</strong> crude and products pulling the index.</li>
          <li><strong>Dollar soft:</strong> commodities priced in DXY get a tailwind.</li>
          <li><strong>Technical regime:</strong> GSG in a clean uptrend higher lows higher highs.</li>
        </ul>
        <p>
          Thesis was right. The harder question is always <strong>how</strong> to enter.
        </p>
  
        <h2 className="text-2xl font-bold">Don't Chase the Top</h2>
        <p>
          The retail instinct when you see a chart like this is to buy the breakout at
          $34. That is chasing. You pay the highest premium for the least room to be
          wrong and the first pullback takes you out.
        </p>
        <p>
          The disciplined version is to wait. If the regime is real pullbacks are buying
          opportunities not regime changes. So I sat on my hands through the run and
          waited for the tape to offer something cleaner.
        </p>
  
        <h2 className="text-2xl font-bold">The Structure</h2>
  
        <h3 className="text-xl font-semibold">Thesis Stack</h3>
        <ul>
          <li><strong>Direction:</strong> commodities higher on sticky inflation and dollar weakness.</li>
          <li><strong>Entry:</strong> buy the pullback not the breakout.</li>
          <li><strong>Vehicle:</strong> GSG for broad commodity exposure no single-name headline risk.</li>
          <li><strong>Structure:</strong> defined-risk call spread so the max loss is known at entry.</li>
        </ul>
  
        <h3 className="text-xl font-semibold">The Fill</h3>
        <p>
          Entered 4/7/2026 on the May 15 expiry. Bought the 34 call sold the 35 call.
          Roughly 38 DTE a $1 wide structure above spot.
        </p>
  
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/GSGconf.png`}
            alt="GSG 34/35 May 15 call spread trade confirmation"
            className="rounded-xl shadow-md border border-neutral-800"
          />
          <p className="text-sm text-neutral-500 mt-2">
            Trade confirmation. Long 34C short 35C May 15 expiry.
          </p>
        </div>
  
        <p>
          Max loss is the debit paid. Max payout is the $1 spread width if GSG closes
          above $35 at expiry. Clean math defined risk.
        </p>
  
        <h2 className="text-2xl font-bold">Then the Headlines Hit</h2>
        <p>
          Risk-off tape. Commodities sold into the pullback rather than holding. GSG
          printed $30.35 a -3.74% day on volume. The strikes that were a few points out
          of the money when I entered are now a multi-dollar round trip away.
        </p>
        <p>
          Nothing in the thesis changed. Inflation is still sticky the dollar still soft
          commodities still structurally bid. But the tape doesn't care about your
          thesis on any given day. Headlines compress timelines and sometimes they
          compress them past your expiry.
        </p>
  
        <h2 className="text-2xl font-bold">The Lessons</h2>
        <p>Three things worth writing down:</p>
        <ul>
          <li>
            <strong>Don't chase strength.</strong> Waiting for the pullback was correct.
            You never know if a pullback goes further than you expected but at least
            you're not entering at the worst possible level.
          </li>
          <li>
            <strong>Defined risk is the whole game.</strong> A $1 wide call spread caps
            the loss at the debit. No slippage no overnight gaps wiping out the book. A
            loss on a structured trade is a line item not an event.
          </li>
          <li>
            <strong>Headlines can override technicals.</strong> Clean setup disciplined
            entry right vehicle — and the tape still does what it wants. Size for that
            reality. A single trade should never hurt enough to change behavior.
          </li>
        </ul>
  
        <h2 className="text-2xl font-bold">Process vs Outcome</h2>
        <p>
          This is the distinction that matters. <strong>Process</strong> is everything
          you control — thesis entry structure sizing risk. <strong>Outcome</strong> is
          what the market hands you.
        </p>
        <p>
          Process was clean. Thesis was defensible. Entry was disciplined. Structure was
          defined-risk. That's a process win.
        </p>
        <p>
          The outcome is whatever the outcome is. You log it learn what there is to
          learn and move to the next setup. If you only grade yourself on P&amp;L you'll
          start breaking your own rules the first time a good trade goes red. That's
          how traders blow up.
        </p>
  
        <h2 className="text-2xl font-bold">Closing Thoughts</h2>
        <p>
          The trades that make you money are easy to write about. The ones that teach
          you something usually aren't the winners. A good setup that gets run over by a
          headline is the price of playing the game. A good setup that gets run over
          with <strong>undefined risk</strong> is how you stop playing the game.
        </p>
        <p>
          Keep the thesis. Keep the structure. Let the outcome be the outcome.
        </p>
      </article>
    );
  }