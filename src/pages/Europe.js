// src/pages/Europe.js
export default function Europe() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Europes Debt Crisis and Bond Market Breakdown 2025 Update
        </h1>
  
        <p className="text-neutral-300">
          Europe is once again showing the warning signs that spooked the world during the 2010 2012 sovereign debt crisis.
          Back then five countries Portugal Ireland Italy Greece and Spain borrowed heavily when credit was cheap under the new euro.
          When the 2008 global crisis hit the leverage turned into a nightmare: real estate bubbles burst unemployment soared and governments could not roll over their debts without bailouts from the European Central Bank (ECB) and the IMF.
          Debt to GDP ratios exploded bond yields spiked and investor confidence collapsed.
        </p>
  
        <p className="text-neutral-300">
          More than a decade later many of those numbers have improved but remain high.
          Unemployment is down from crisis peaks but still elevated.
          Debt ratios in Italy Spain and Greece are still large.
          In other words the underlying vulnerabilities never completely disappeared they were just stabilized by ECB intervention and reforms.
        </p>
  
        {/* Insert the chart image here */}
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          France: The New Flashpoint
        </h2>
  
        <p className="text-neutral-300">
          France the euro areas second largest economy is now flashing the same warning lights.
          Key metrics as of 2025:
        </p>
  
        <ul className="text-neutral-300 list-disc ml-6">
          <li>Debt to GDP: ~115% today projected 120% by 2027.</li>
          <li>GDP growth: ~1% trending lower.</li>
          <li>Unemployment: 7.5 8%.</li>
          <li>Consumer confidence: high 80s/low 90s vs a 100 long term average.</li>
          <li>Fiscal deficit: €160 B (~5.5 6% of GDP vs the EUs 3% guideline).</li>
          <li>Annual bond issuance: €420 460 B of which ~€300 B rolls over old debt and €120 160 B funds the current deficit.</li>
        </ul>
  
        <p className="text-neutral-300">
          In plain English: Frances tax intake is weak because growth is low and unemployment is high; welfare spending is large; debt is already high; yet deficits force it to borrow even more.
          Almost all new borrowing goes to refinancing past obligations or plugging todays budget hole.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Rising Yields and Spreads
            </h2>
            
            <img src="/my-dark-blog-main/thepic.png" alt="French OAT-Bund Spread chart" className="rounded-xl shadow-md my-8" />
  
        <p className="text-neutral-300">
          Frances bond yields and crucially the spread versus German Bund yields have surged from a long term 30 50 bps to ~80 85 bps in 2024.
          For a sovereign issuing hundreds of billions every basis point means billions more in annual interest cost.
          Rising yields create a vicious circle: more debt → more supply of bonds → higher yields → higher interest bill.
          Add pressure from NATO and the US to boost defense spending and fiscal space tightens further.
        </p>
  
        <p className="text-neutral-300">
          Unlike the US which enjoys reserve currency status euro countries cannot infinitely issue debt without spooking investors.
          Over issuance directly impacts creditworthiness and the euros value.
          Thats why higher yields and wider spreads in France are a serious warning sign: they show investors are demanding more compensation for lending exactly what triggered the last crisis.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Contagion Risk
        </h2>
  
        <p className="text-neutral-300">
          French banks hold €1 1.5 trillion of French sovereign debt.
          A bond sell off hits their balance sheets constrains lending and slows the economy further.
          Investor fear then spills into Italy Spain Belgium and even Germany; the euro weakens imported inflation rises and the UK tightly linked to French banks and trade also feels the shock.
        </p>
  
        <p className="text-neutral-300">
          The UK itself is hardly robust: debt ~100% of GDP deficit 4 5% growth &lt;1% gilts mid 4% sticky inflation.
          The BoE can cushion with QE but regional stress still bites.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Policy Options and Outlook
        </h2>
  
        <p className="text-neutral-300">
          The policy options for France are ugly: raise taxes (hard with weak growth) cut spending (politically brutal with social outlays &gt;30% of GDP) or borrow more (risks further yield spikes).
          In past crises the ECB acted as firewall buying bonds offering liquidity and conditioning support on reforms.
          Portugal Ireland and Greece accepted bailouts and undertook fiscal consolidation labor market changes and bank recapitalizations.
          France may yet need some version of that playbook but as the euro areas #2 economy its far harder to restructure than a small peripheral country.
        </p>
  
        <p className="text-neutral-300">
          Bottom line: the eurozones most powerful central bank has kept the system together for 15 years but Frances numbers show how quickly confidence can erode when high debt slow growth and rising yields collide.
          If investors lose faith in Frances ability to roll over its debt on reasonable terms the ripple effects could dwarf the 2010 2012 scare.
        </p>
  
        <p className="text-sm mt-6 italic">
          Sources: ECB IMF national statistics.
        </p>
      </article>
    );
  }
