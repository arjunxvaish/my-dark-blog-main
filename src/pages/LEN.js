export default function LEN() {
  return (
    <div className="flex justify-center px-4">
      <article className="prose prose-invert max-w-2xl pt-12 prose-p:my-2 prose-li:my-1 prose-h2:mb-3">

        <h1>Uncertainty Hits Home</h1>
        <p>I’ve been watching Lennar for a minute, and this setup heading into earnings looked too clean to ignore.</p>
        <p>No need to go deep into macro—everyone knows the environment’s noisy. Rates are stuck, affordability’s wrecked, and sentiment’s weak.</p>
        <p>Lennar targets the ~$400K range. These buyers are rate-sensitive. A small shake hits volumes.</p>
        <p>Margins are getting crushed by free upgrades and discount financing. Add labor slowdowns and it’s a mess.</p>
        <p>Florida exposure makes it worse. Hurricane insurance, more listings — tough sell conditions.</p>
        <p>So I kept it simple.</p>
        <p>Sold the $118 put, bought the $119 put for Mar 21 expiry. <strong>Filled for $0.47.</strong></p>
        <img src="/my-dark-blog-main/LEN.png" alt="LEN chart" className="rounded-xl shadow-md my-8" />
        <p><strong>Max risk:</strong> $47</p>
        <p><strong>Max reward:</strong> $53</p>
        <p><strong>Risk-reward:</strong> 1.13:1, or <strong>+113% return</strong> if LEN closes below $118 by expiry.</p>
        <p>It doesn’t need to collapse — just look a little worse than expected.</p>
      </article>
    </div>
  );
}
