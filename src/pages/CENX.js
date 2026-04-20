export default function CENX() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          The CENX Aluminum Trade: Thesis Entry Math
        </h1>
  
        <p>
          Aluminum is the setup that's been sitting on the board for weeks. This post
          walks through the thesis the vehicle selection and the exact structure 
          nothing more nothing less.
        </p>
  
        <h2 className="text-2xl font-bold">The Thesis</h2>
        <p>
          Four independent signals all pointing the same direction.
        </p>
        <ul>
          <li><strong>PMI in expansion:</strong> manufacturing holding with new orders among the leading components.</li>
          <li><strong>Primary metals leadership:</strong> the subsector printed as a top PMI leader on new orders and production.</li>
          <li><strong>Sell-side revisions:</strong> analyst EPS and revenue estimates on aluminum names getting walked up not down.</li>
          <li><strong>Commodity backdrop:</strong> inflation sticky dollar soft industrial metals bid across the board.</li>
        </ul>
        <p>
          You don't need all four to be right. You need them aligned. On this setup they were.
        </p>
  
        <h2 className="text-2xl font-bold">Why CENX Not AA</h2>
        <p>
          The retail version of this is to buy Alcoa and wait. AA is fine diversified
          vertically integrated exposure to aluminum. But if the macro call is right and
          aluminum is going higher you want the highest beta clean exposure.
        </p>
        <p>
          Century Aluminum is <strong>pure play</strong> aluminum. Smaller cap higher
          leverage to the commodity price. A fixed cost smelter business means any move
          in aluminum drops to earnings at a multiple. That's operational leverage a
          small move in the underlying commodity becomes a much larger move in the
          equity.
        </p>
        <p>Same thesis. Different maths.</p>
  
        <h2 className="text-2xl font-bold">The Structure</h2>
  
        <h3 className="text-xl font-semibold">Thesis Stack</h3>
        <ul>
          <li><strong>Direction:</strong> aluminum higher on PMI strength and sticky inflation.</li>
          <li><strong>Vehicle:</strong> CENX for maximum operational leverage.</li>
          <li><strong>Structure:</strong> call spread defined risk capped reward.</li>
          <li><strong>Duration:</strong> enough DTE to let the thesis play out without getting squeezed by theta.</li>
        </ul>
  
        <h3 className="text-xl font-semibold">Why Not Naked Calls</h3>
        <p>
          On a move that already has momentum implied vol is rarely cheap. Buying naked
          upside calls means paying elevated premium and taking vega risk on top of
          direction. If the move slows or consolidates you lose on theta and vega even
          when the underlying goes nowhere against you.
        </p>
        <p>
          A vertical call spread fixes both problems. The short leg finances part of the
          long leg cutting the debit. Vega is largely neutralized because you're long
          and short roughly matched exposure. You give up unlimited upside in exchange
          for a known defined payout at expiry.
        </p>

  
        <div className="my-6">
          <img
            src={`${process.env.PUBLIC_URL}/CENXconf.png`}
            alt="CENX 65/70 call spread trade confirmation"
            className="rounded-xl shadow-md border border-neutral-800"
          />
        </div>

        <p>
          Defined risk defined reward clean math. Every outcome is bounded at entry
          no tail no surprises no gap risk beyond the debit.
        </p>
  
        <h2 className="text-2xl font-bold">Closing Thoughts</h2>
        <p>
          The whole exercise in trading a thesis is compressing it into a structure that
          pays you for being right without punishing you for being wrong beyond a known
          amount. PMI primary metals analyst revisions commodity backdrop
        </p>
        <p>That's the whole post. Thesis entry math.</p>
      </article>
    );
  }