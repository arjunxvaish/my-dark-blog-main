export default function Tape() {
    return (
      <div className="flex justify-center px-4">
        <article className="prose prose-invert max-w-2xl pt-12 prose-p:my-2 prose-li:my-1 prose-h2:mb-3">
          <h1>The Market That Won't Break</h1>
          <p>CPI came in hot across the board today. Core MoM at <strong>0.4%</strong> vs 0.3% expected. Core YoY at <strong>2.8%</strong> vs 2.7%. Headline at <strong>3.8%</strong> vs 3.7%. Every number beat. The trend is moving the wrong direction.</p>
          <p>That's a higher for longer print. The bond market heard it.</p>
  
          <h2>Rates</h2>
          <p>2s and 10s both sold off hard. The curve flattened that's the rates market pricing out Fed cuts in real time. Higher for longer is no longer a prediction, it's what's being priced.</p>
          <img src="/my-dark-blog-main/US10Y.png" alt="US 10Y Yield" className="rounded-xl shadow-md my-8" />
  
          <h2>Credit</h2>
          <p>HYG dumped. Credit leads, rates confirm, equity reprices last. Two of three are already talking and they're saying the same thing.</p>
          <img src="/my-dark-blog-main/HYG.png" alt="HYG daily" className="rounded-xl shadow-md my-8" />
  
          <h2>Equity</h2>
          <p>SPX closed at <strong>7,401</strong>. Bullish wick on the day. Dip buyers showed up. The market had every reason to sell and didn't.</p>
          <img src="/my-dark-blog-main/SPX.png" alt="SPX daily" className="rounded-xl shadow-md my-8" />
          <p>That divergence is the whole story. Bonds and credit are warning. Equity is holding. These two don't coexist forever watch HYG over the next 3 to 5 sessions. That's historically when equity stops being able to ignore what credit is saying.</p>
        </article>
      </div>
    );
  }