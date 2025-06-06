export default function PMI() {
    return (
      <div className="flex justify-center px-4">
        <article className="prose prose-invert max-w-2xl pt-12 prose-p:my-2 prose-li:my-1 prose-h2:mb-3">
  
          <h1>PMI Breaks Below 50</h1>
          <p>The May <strong>ISM Manufacturing PMI</strong> came in at <strong>48.5</strong>, its third straight month of contraction. New orders registered <strong>47.6</strong>, production stayed low at <strong>45.4</strong>, and employment continues to weaken at <strong>46.8</strong>.</p>
  
          <p>Meanwhile, prices paid remain elevated at <strong>69.4</strong>. That’s not deflation. That’s a stagflation setup—rising input costs with slowing output and collapsing demand.</p>
  
          <h2>Why It Matters</h2>
          <p>This isn’t a soft patch—it’s a signal. Inventory levels are dropping, export demand is fading (<strong>New Export Orders: 40.1</strong>), and imports cratered to <strong>39.9</strong>. These are forward indicators, and they’re all red.</p>
  
          <p>If manufacturing was recovering, you’d see it in new orders and trade flows. But this PMI says the opposite: industrial demand is stalling hard.</p>
  
          <h2>The Trade: Long NVDA, Short CAT</h2>
          <p>This is about structure, not direction. Take advantage of market skew.</p>
  
          <p><strong>NVDA:</strong> Still leading on AI narrative. Use a <strong>30 DTE call vertical</strong> with tight caps and long 20–30 delta calls. Keeps risk defined while capturing upside momentum.</p>
  
          <img
            src={`${process.env.PUBLIC_URL}/NVDA_OPTION.png`}
            alt="NVDA Option Structure"
            className="rounded-xl shadow-md my-8"
          />
  
          <p>Sentiment is hot, but momentum hasn’t rolled. Stay long with structure—not leverage.</p>
  
          <p><strong>CAT:</strong> Industrials don’t like this PMI. Demand, capex, exports—all fading. CAT is tied to the macro and late-cycle heavy machinery. When growth fades, this gets hit.</p>  
        </article>
      </div>
    );
  }
  