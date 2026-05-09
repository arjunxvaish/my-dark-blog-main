export default function Rally() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Rosy Tape, Hollow Engine
        </h1>
  
        {/* GodMode screener */}
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/godmode.png`}
            alt="GodMode dashboard showing GICS 11 sectors and commodities"
            className="rounded-xl shadow-md border border-neutral-800"
          />
        </div>
  
        {/* Intro */}
        <p>
          S&amp;P up <strong>8% on the year</strong>. Tech leading hard semis ripping the prints
          look clean. Most people couldn’t switch fast enough into the rotation and they’re still
          chasing it.
        </p>
        <p>
          The tape is rosy. Underneath the hood it’s a different conversation. This is how I read
          it in thirty seconds.
        </p>
  
        <h2 className="text-2xl font-bold">Where the Alpha Is</h2>
        <ul>
          <li><strong>Tech +23.5% on the month +15% vs SPY:</strong> that’s leadership not noise.</li>
          <li><strong>Cyclicals participating:</strong> Discretionary Real Estate Communications all positive on the month.</li>
          <li><strong>Defensives bleeding relative:</strong> Staples Utilities Health Care all double digits behind SPY.</li>
        </ul>
        <p>Textbook risk-on sector map. So far so good.</p>
  
        <h2 className="text-2xl font-bold">Where It Gets Fragile</h2>
        <p>
          Discretionary up <strong>6.6% on the month</strong> down 1.9% relative to SPY. On the
          surface it’s participating. The problem is what’s behind that number.
        </p>
  
        {/* Bloomberg earnings estimates rolling chart */}
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/sector_earnings.jpg`}
            alt="Bloomberg rolling earnings estimates by S&P sector"
            className="rounded-xl shadow-md border border-neutral-800"
          />
          <p className="text-sm text-neutral-500 mt-2">Bloomberg rolling 1Q earnings estimates by sector</p>
        </div>
  
        <ul>
          <li><strong>Tech (S5INFT):</strong> earnings line stepping higher price action supported.</li>
          <li><strong>Discretionary (S5COND):</strong> earnings flat since September rally on multiple expansion alone.</li>
          <li><strong>Staples:</strong> earnings drifting lower over six months.</li>
        </ul>
        <p>
          Translation: when you buy XLY or any discretionary name here you’re not buying earnings
          momentum. You’re buying a multiple expansion that depends on the macro continuing to
          behave. The second the tape rolls these are the names that get sold first because there’s
          nothing underneath them.
        </p>
  
        <h2 className="text-2xl font-bold">The Tail Setup</h2>
        <ul>
          <li><strong>Vol compressed across the curve:</strong> dealers comfortable SKEW not screaming.</li>
          <li><strong>Hot inflation still expected:</strong> the macro engine isn’t supporting the breadth.</li>
          <li><strong>Cost of insurance:</strong> sitting at levels that don’t reflect either of those facts.</li>
        </ul>
        <p>
          You don’t have to be bearish on the tape to recognize the asymmetry. Tail risk hedging is
          cheap right now and everyone is lulled.
        </p>
  
        <h2 className="text-2xl font-bold">Closing Thoughts</h2>
        <p>
          The tape says rosy. The screener says concentrated. The earnings chart says fragile. All
          three can be true at the same time and they are.
        </p>
        <p>
          <strong>Tech is real. Discretionary is borrowed. Hedges are on sale.</strong> Read the
          whole board not the headline.
        </p>
      </article>
    );
  }