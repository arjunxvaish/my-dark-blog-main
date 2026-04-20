export default function VIX() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Long Vol Into the Stack: Why the VIX Trade Is the Cleanest EV on the Board
        </h1>
  
        <p>
          Every few months the tape hands you a setup where you don't need to be right
          on direction. You just need to be right that the market is underpricing the
          density of catalysts in front of it. This is one of those windows. Three live
          events inside four weeks and a vol curve that got mechanically purged on a
          headline. The trade writes itself once you see it.
        </p>
  
        {/* Chart: VIX compression + early expansion */}
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/VIXy.png`}
            alt="VIX daily chart showing March spike to 33 post-compression to 17 and early expansion back to 19.57"
            className="rounded-xl shadow-md border border-neutral-800"
          />
          <p className="text-sm text-neutral-500 mt-2">
            VIX daily. March high at 33 on Iran escalation then purged to 17 on ceasefire. Breaking back up from compression today at 19.57.
          </p>
        </div>
  
        <h2 className="text-2xl font-bold">The Tape Right Now</h2>
        <p>
          The S&amp;P has put in a $1.5 trillion relief rally off the April 7 ceasefire
          announcement. Crude dumped from $117 to $95 in a session as the Hormuz premium
          came out of the market. VIX got mechanically crushed from the mid-20s back
          toward pre-war levels in the 17-18 range. On the surface everything is fine.
        </p>
        <p>Underneath the hood it's a different story.</p>
        <ul>
          <li><strong>The rally is concentrated in the most-shorted names.</strong> IGV up 14% on the week with a still-negative 20DMA slope. That's a squeeze signature not a trend repair.</li>
          <li><strong>Airlines ripping on fuel cost relief.</strong> JETS +7.84% WoW is a crude unwind trade not a demand story.</li>
          <li><strong>Defensives not catching a bid.</strong> XLV XLP XLU all flat to down with negative slopes. The market isn't playing defense which is why a straight SPX short is the wrong instrument.</li>
          <li><strong>Positioning round-tripped.</strong> AAII bear-bull was -21.6 on March 18 at capitulation. It's -11.1 now. NAAIM rebounded from 60 to 79 with a TRIM signal. The easy bounce is done.</li>
        </ul>
        <p>
          The rally is mechanically supported. It is not fundamentally driven. That's
          the first leg of the thesis.
        </p>
  
        <h2 className="text-2xl font-bold">The Catalyst Stack</h2>
        <p>
          Three live events in a four-week window. Any one of them can repriced the
          tape. The vol market is not pricing that density.
        </p>
        <ul>
          <li><strong>Ceasefire expiry ~April 21-22.</strong> The Iran ceasefire was explicitly two weeks. Either it gets extended (further compression) or it breaks (crude rips SPX drops VIX explodes). Binary and near-term.</li>
          <li><strong>FOMC April 29.</strong> Powell walks in with hot inflation soft NFP and a boxed-in Fed. Hold is 99% priced on Kalshi. The risk is the statement and the presser. Any lean dovish or hawkish repositions the entire curve.</li>
          <li><strong>May CPI May 12.</strong> First full read on post-ceasefire inflation dynamics. Core matters more than headline given crude noise. Distribution on Kalshi is wide which tells you even the market isn't confident.</li>
        </ul>
        <p>
          Stack the probabilities. The base rate for at least one of these producing a
          real vol move is high. Somewhere in the 70-75% range if you're honest.
          Hawkish FOMC sells equities. Dovish FOMC breaks the dollar and rips
          commodities. Ceasefire break sends everything risk-off. Only a perfectly
          neutral path across all three keeps vol pinned. That's a narrow scenario.
        </p>
  
        <h2 className="text-2xl font-bold">Why VIX Not SPX Puts</h2>
        <p>
          The retail version of this thesis is to short SPX or buy SPY puts. Wrong
          instrument. You're fighting positive dealer gamma favorable seasonality and a
          ceasefire that hasn't broken yet. Carry is brutal. You can be right on thesis
          and get stopped out on timing.
        </p>
        <p>
          VIX decouples you from direction. You don't need the tape to roll. You need
          vol to expand. Every path in the catalyst stack produces vol expansion
          regardless of direction. A hawkish FOMC crushes equities and pops vol. A
          dovish FOMC breaks the dollar rips commodities and pops vol on the
          repositioning. A ceasefire break sends crude to $120 and vol to 30+. The only
          path that hurts you is clean neutrality across all three events. And Powell
          has almost no path to land neutral given the data he's walking in with.
        </p>
        <p>Same setup. Different instrument. The right one.</p>
  
        <h2 className="text-2xl font-bold">The Structure</h2>
  
        <h3 className="text-xl font-semibold">Thesis Stack</h3>
        <ul>
          <li><strong>Direction:</strong> vol higher on catalyst density and underpriced term structure.</li>
          <li><strong>Structure:</strong> calendar-stacked calls across the two relevant expiries.</li>
          <li><strong>Duration:</strong> short enough to avoid unnecessary theta long enough to cover the full catalyst stack.</li>
        </ul>  
  
        <h2 className="text-2xl font-bold">What the Tape Is Already Telling You</h2>
        <p>
          VIX closed at 17.94 on April 17. It's printing 19.57 as I write this up 12%
          on the day. The market is already starting to reprice. The 19 level held as
          support on the way down and we're breaking back up from compression. That's
          early confirmation that the term structure is sniffing the catalyst stack.
        </p>
        <p>
          You're not late to this. You're early on the expansion but with confirmation
          the direction is right. That's the asymmetry you pay for.
        </p>
  
        <h2 className="text-2xl font-bold">Trade the EV Not the Narrative</h2>
        <p>
          This is where most traders get this kind of setup wrong. They build a view on
          direction. Market goes down. Market goes up. Market does something. Then they
          hunt for the instrument that expresses the view. That's backwards.
        </p>
        <p>
          The correct frame is: where is the market mispricing something you can
          measure? VIX at 17-19 with three catalysts stacked into four weeks is a
          measurable mispricing. You don't need a direction call. You need vol to do
          what vol does when catalysts fire. That's a structural read not a directional
          one. Structural reads are where edge lives because they don't require you to
          be smarter than the market on direction. They require you to notice when the
          market is wrong about probability.
        </p>
        <p>
          The vol market is pricing "risk resolved" on a two-week ceasefire. The actual
          situation is "risk paused for 14 days with three live catalysts behind it."
          The gap between those two states is the trade.
        </p>
  
        <h2 className="text-2xl font-bold">Closing Thoughts</h2>
        <p>
          Professional traders carry convexity at all times. Not because they know
          what's coming but because they don't. When everyone else is pricing
          certainty and the calendar says otherwise you want something in the book
          that pays multiples when the certainty breaks.
        </p>
        <p>
          Ceasefire expiry. FOMC. CPI. Four weeks. Compressed vol. The setup doesn't
          require a macro thesis more sophisticated than three catalysts compressed
          vol something moves. That's the whole trade.
        </p>
        <p>
          Thesis vehicle structure sizing. Define the loss. Cap the cost. Leave the
          upside open. Stand where the domino falls.
        </p>
      </article>
    );
  }