export default function GM() {
  return (
    <div className="flex justify-center px-4">
      <article className="prose prose-lg prose-invert max-w-2xl pt-12">
        <h1>GM Short Thesis</h1>

        <p>I’m looking at GM and seeing a setup that lines up from multiple angles.</p>

        <p>
          Auto sales are slowing, and consumer behavior is shifting. People aren’t making high-ticket purchases right now. Michigan sentiment keeps printing lower, rates are stuck, and the Fed can’t give a straight answer on anything.
        </p>

        <p>
          Now layer in GM’s exposure to tariffs. About 10% of their operation depends on global imports. If auto tariffs flare up—even as a political bargaining chip—this turns into a margin risk. They don’t have pricing power here. If input costs go up, they either eat it or lose volume. Neither is good.
        </p>

        <p>
          Then there’s the guidance angle. The last print was cautious. If they keep that same tone this quarter—“watching consumer trends,” “monitoring geopolitical developments,” whatever soft-sell phrase they pick—it’s going to land bearish.
        </p>

        <p>So I sized in small and simple.</p>

        <p>
          Sold the $46 put, bought the $46.5 put on GM for the May 2 expiry. Two contracts, filled for <strong>$0.21 net debit</strong>.
        </p>

        <img src="/my-dark-blog-main/GM.png" alt="GM" />

        <p>
          Tight spread, cheap entry, short duration. I’m not asking for a collapse—just a soft guide, macro pressure, or another dip in demand to push this a little lower.
        </p>

        <p><strong>Max risk:</strong> $42</p>
        <p><strong>Max reward:</strong> $58</p>
        <p><strong>Risk-reward:</strong> 1.38:1, or <strong>+138% return</strong> if GM closes below $46 by expiry.</p>

        <p>There’s no demand tailwind. There’s no macro bid. And if tariffs even get mentioned, this gets repriced fast.</p>
      </article>
    </div>
  );
}
