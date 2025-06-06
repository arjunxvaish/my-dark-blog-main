export default function ServicesPMI() {
    const IMG = process.env.PUBLIC_URL;
  
    return (
      <div className="flex justify-center px-4">
        <article className="prose prose-invert max-w-2xl pt-12 prose-p:my-3">
          <h1>Services PMI Falls Below 50</h1>
  
          <img
            src={`${IMG}/services_pmi_decline.png`}
            alt="Services PMI Chart"
            className="rounded-xl shadow-md my-8"
            />
  
          <p>May printed <strong>49.9</strong>—first dip into contraction since June 2024. Doesn't scream recession, but this is where it always begins.</p>
  
          <p>New orders fell to <strong>46.4</strong>, backlogs crashed to <strong>43.4</strong>, and prices paid surged to <strong>68.7</strong>. Demand is weakening while input costs spike. Margins are getting crushed.</p>
  
          <p>Services = nearly 80% of U.S. GDP. If that breaks, markets won’t be able to ignore it—even with tech melting upward.</p>
  
          <p>Across sectors—construction, retail, tech—firms are freezing spend. Tariffs weren’t solved, just delayed. That’s killing forward visibility.</p>
  
          <p>Inventories are falling. But sentiment spiked to <strong>62.9</strong>. Translation: they’re overstocked and scared of what’s coming.</p>
  
          <p>Jobs came in barely positive at <strong>50.7</strong>. Companies are plugging holes, not scaling. That’s defense mode.</p>
  
          <p>This isn’t noise. It’s a real signal. Demand’s drying up, margins are squeezed, and confidence is gone. Labor always lags—but it’s coming.</p>
  
          <p>Markets expect a soft landing.</p>
          <p>The economy is whispering: <strong>not yet</strong>.</p>
        </article>
      </div>
    );
  }
  