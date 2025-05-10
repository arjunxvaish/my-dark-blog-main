export default function GM() {
  return (
    <div className="flex justify-center px-4">
      <article className="prose prose-invert max-w-2xl pt-12 prose-p:my-2 prose-li:my-1 prose-h2:mb-3">

        <h1>Trouble on the Lot</h1>
        <p>I’m looking at GM and seeing a setup that lines up from multiple angles.</p>
        <p>Auto sales are slowing, and consumer behavior is shifting. Michigan sentiment keeps dropping, and the Fed can’t give a straight answer on anything.</p>
        <p>Now layer in GM’s exposure to tariffs. About 10% of their operation depends on global imports. If tariffs flare up, this becomes a margin risk. They don’t have pricing power here.</p>
        <p>The last earnings call was cautious. If they repeat that tone, it’s bearish — especially with weak conditions in Europe and China.</p>
        <p>So I sized in small and simple.</p>
        <p>Sold the $46 put, bought the $46.5 put for May 2 expiry. Two contracts. <strong>Filled for $0.21 net debit.</strong></p>
        <img src="/my-dark-blog-main/GM.png" alt="GM trade fill" className="rounded-xl shadow-md my-8" />
        <p><strong>Max risk:</strong> $42</p>
        <p><strong>Max reward:</strong> $58</p>
        <p><strong>Risk-reward:</strong> 1.38:1, or <strong>+138% return</strong> if GM closes below $46 by expiry.</p>
        <p>There’s no demand tailwind. There’s no macro bid. And if tariffs even get mentioned, this gets repriced fast.</p>
      </article>
    </div>
  );
}
