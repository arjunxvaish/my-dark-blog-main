export default function Energy() {
  return (
    <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
      {/* Title */}
          <h1 className="text-3xl font-bold tracking-tight mb-2">
              Energy: Cracks Beneath the Surface
      </h1>

      {/* Optional image slot (delete if not using) */}
      {/* Place a chart or sector image at /public/energy.png */}
      {/* <div className="my-6">
        <img
          src={`${process.env.PUBLIC_URL}/energy.png`}
          alt="Energy sector overview"
          className="rounded-xl shadow-md border border-neutral-800"
        />
        <p className="text-sm text-neutral-500 mt-2">Energy sector overview</p>
      </div> */}

      {/* Intro */}
      <p>
        The best trades happen when <strong>everything lines up: </strong> macro fundamentals
        price action option structure and a sensible catalyst.
      </p>
      <p>
        For most of 2025 energy sat comfortably near the top of sector rankings. Then the
        latest monthly data hit and momentum flipped into <strong>neutral</strong>. Pair that
        with softening international demand and cautious guidance from industry leaders and the
        wind has clearly shifted.
      </p>

      <h2 className="text-2xl font-bold">Weakening Structure</h2>
      <ul>
        <li><strong>Dividend sustainability in question:</strong> stretched payout ratios risk cuts if EPS slips.</li>
        <li><strong>Negative revisions:</strong> revenue and earnings guidance tilting lower across the board.</li>
        <li><strong>Technical softness:</strong> persistent underperformance even during broader market rebounds.</li>
      </ul>
      <p>This isn’t noise it’s a structural turn.</p>

      <h2 className="text-2xl font-bold">Trade Framework</h2>
      <h3 className="text-xl font-semibold">Thesis</h3>
      <ul>
        <li><strong>Macro tailwinds fading:</strong> momentum in the data has rolled over.</li>
        <li><strong>Global demand softening:</strong> weaker international activity and guidance.</li>
        <li><strong>Seasonality risk:</strong> September and October historically punish cyclicals.</li>
      </ul>

      <h3 className="text-xl font-semibold">Structure Example</h3>

<div className="my-6">
<img
  src={`${process.env.PUBLIC_URL}/structure.png`}
  alt="Energy Put Spread Structure"
  className="rounded-xl shadow-md border border-neutral-800"
/>
<div className="bg-neutral-900 p-4 rounded-lg mt-4 text-sm leading-relaxed">
<p><strong>Assuming a $100,000 Portfolio:</strong></p>

<p>Buy 20x Oct 17 $84.00 Strike Puts @ $2.44 = $4,880</p>
<p>Sell 20x Oct 17 $72.00 Strike Puts @ $0.05 = $100</p>
<p><strong>Net Spend (calculated) ≈ $4,780</strong></p>

<br />

<p><strong>Target Scenario:</strong> Underlying $72 at Oct Expiry</p>
<p>Total Profit = $28,700</p>
<p>Reward Risk = $28,700 / $4,900 = 5.85× (585%)</p>

<br />

<p className="text-neutral-400">
*PnL curve rounds to <strong>$4,900</strong> to account for slippage &amp; fees.
Calculated math = <strong>$4,780</strong> published spend = <strong>$4,900</strong>.
</p>

<p className="text-neutral-500">
Execution note: enter with a <strong>limit price ≈ $1.75</strong> net debit on the spread.
</p>
  <p className="text-teal-400 font-semibold">
    Net spend: $4,900  
    <br />
    If price is below 72 by Oct expiry → P&amp;L ≈ $28.7K
  </p>
</div>
</div>

      <h2 className="text-2xl font-bold">Macro Overlay</h2>
      <p>
        If crude weakens the entire sector gets dragged lower. Positioning from large
        speculators is already at the lower end of range funds are <strong>reducing exposure</strong> not adding.
      </p>
      <p>
        For broader expression and cleaner risk <strong>sector ETFs</strong> provide a simple way to
        implement the view without idiosyncratic single name risk.
      </p>

      <h2 className="text-2xl font-bold">Closing Thoughts</h2>
      <p>
        Energy led the tape for most of the year but leaders don’t stay leaders forever. With
        momentum rolling over demand softening abroad and seasonality stacked against it
        this is a sector where the <strong>tailwind just flipped into a headwind</strong>.
      </p>
      <p>Define risk. Ignore noise. Lean into the weakness.</p>
    </article>
  );
}
