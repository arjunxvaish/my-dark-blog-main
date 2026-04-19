export default function NEM() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          One Headline One Payoff: The NEM Gold Trade
        </h1>
  
        <p>
          MAG7 bag holders have been getting smashed. Tesla Bitcoin the whole long-duration
          crowd. This is a breakdown of a <strong>tail risk hedge</strong> I had on into the
          end of March that ran in my favor on a single Fed headline.
        </p>
        <p>One catalyst. One structure. One payoff.</p>
  
        {/* Chart: setup context */}
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/NEMchart.png`}
            alt="NEM daily chart showing the post-entry rally"
            className="rounded-xl shadow-md border border-neutral-800"
          />
          <p className="text-sm text-neutral-500 mt-2">
            NEM daily. Entry on 3/30 — the stock ran ~16% over the following 20 sessions.
          </p>
        </div>
  
        <h2 className="text-2xl font-bold">The Setup</h2>
        <p>
          Powell gave a speech at Harvard and essentially signaled he's willing to look
          through the oil-driven inflation shock. Dovish. That same week we got a soft
          jobs print. Two dovish prints in the same tape is the cocktail.
        </p>
        <ul>
          <li><strong>Dovish Fed:</strong> real yields roll over.</li>
          <li><strong>Weak jobs:</strong> growth slowing adds to the cut case.</li>
          <li><strong>Dollar softening:</strong> DXY already on the back foot.</li>
          <li><strong>Geopolitical noise:</strong> Trump headlines keeping a bid under gold.</li>
        </ul>
        <p>
          Real yields down dollar down Fed backing off. That's what gold rallies look like
          before they rally.
        </p>
  
        <h2 className="text-2xl font-bold">Why NEM and Not GLD</h2>
        <p>
          The retail version of this trade is to buy GLD or spot gold and hope. Right
          thesis wrong vehicle. If you're right you make maybe 15 to 20 percent on a
          multi-week move. Fine.
        </p>
        <p>
          The professional version adds <strong>operational leverage</strong>. Gold miners
          trade as a levered beta to the gold price a fixed cost base means a small move
          in gold translates into a much larger move in earnings. Newmont is the top
          weight in GDX and carries clean beta to the move on this catalyst.
        </p>
        <p>Same thesis. Different maths.</p>
  
        <h2 className="text-2xl font-bold">The Structure</h2>
  
        <h3 className="text-xl font-semibold">Thesis Stack</h3>
        <ul>
          <li><strong>Direction:</strong> gold higher on dovish Fed and dollar weakness.</li>
          <li><strong>Vol regime:</strong> IV elevated but catalyst-loaded. Vega tailwind if it moves quickly.</li>
          <li><strong>Vehicle:</strong> NEM for beta to the underlying plus operational leverage.</li>
        </ul>
  
        <h3 className="text-xl font-semibold">Why Not Naked Calls</h3>
        <p>
          With gold vol already bid buying short-dated naked calls is a fast way to
          donate premium. Theta eats you alive and if the move is slower than expected
          you lose on vega when IV compresses post-event. Two ways to lose while being
          right on direction.
        </p>
        <p>
          The answer is a <strong>vertical call spread</strong>. You cap the upside but
          you slash the premium spend and neutralize most of the vega and gamma risk.
          Defined loss defined reward.
        </p>
  
        <h3 className="text-xl font-semibold">The Fill</h3>
        <p>
          Entered 3/30/2026 on the May 1 expiry. Bought the 104 call sold the 107 call.
          Roughly 32 DTE a $3 wide structure.
        </p>
  
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/NEMconf.png`}
            alt="NEM 104/107 May 1 call spread trade confirmation"
            className="rounded-xl shadow-md border border-neutral-800"
          />
          <p className="text-sm text-neutral-500 mt-2">
            Trade confirmation. Long 104C short 107C May 1 expiry.
          </p>
        </div>
  
        <p>
          Defined risk is the net debit paid. Max payout is the $3 spread width. On the
          move that followed the structure paid roughly <strong>7 to 1</strong> on the
          debit.
        </p>
  
        <h2 className="text-2xl font-bold">Standing Where the Domino Falls</h2>
        <p>
          You don't need to know what Trump will tweet. You need to stand where the
          domino falls.
        </p>
        <ul>
          <li>Powell speaks at Harvard → 2Y yield collapses.</li>
          <li>Real yields compress → dollar sells off.</li>
          <li>Gold spot pops → NEM moves higher beta.</li>
          <li>IV expands → OTM calls go in the money → vega kicks in.</li>
          <li>Position prints multiples.</li>
        </ul>
        <p>Every step was predictable once the first domino fell. The structure did the rest.</p>
  
        <h2 className="text-2xl font-bold">Buy and Hold vs Structure</h2>
        <p>
          Buy and hold pays you in a straight line. A structured trade pays you in an
          exponent.
        </p>
        <p>
          Wrong on buy and hold you lose 10%. Right you make 10 maybe 30 on a great
          move. Wrong on a defined-risk call spread you lose 100% of a small premium.
          Right you make 7 to 1 or better.
        </p>
        <p>
          The bag holder problem isn't bad picks. It's no defined risk no convexity and
          an identity attached to the thesis. Diamond hands is not a strategy.
        </p>
  
        <h2 className="text-2xl font-bold">Closing Thoughts</h2>
        <p>The game in three steps:</p>
        <ul>
          <li><strong>Read the setup.</strong> What did the Fed actually signal? What are real yields doing? Where is the dollar?</li>
          <li><strong>Find the asymmetry.</strong> Where is IV cheap relative to the catalyst?</li>
          <li><strong>Structure the convexity.</strong> Define the loss. Cap the cost. Leave the upside open.</li>
        </ul>
        <p>
          Professional traders carry a tail risk hedge at all times. In a week where S&amp;P
          shorts get squeezed and the tape runs against positioning you want something in
          the book that pays multiples. That's what this was.
        </p>
        <p>Powell handed the market a setup. The market handed me a payoff.</p>
      </article>
    );
  }