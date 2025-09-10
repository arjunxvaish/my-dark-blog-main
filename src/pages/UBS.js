// src/pages/UBS.js
export default function UBS() {
    return (
      <article className="prose prose-invert max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Global Investments Return Summary 2025
        </h1>
        <p className="text-neutral-400 text-sm mb-6">
          A free investor-friendly breakdown of the UBS Global Investment Returns Yearbook.
        </p>
  
        {/* Clickable image downloads the PDF */}
        <a
          href="/my-dark-blog-main/Global-Investments-Return-Summary-2025.pdf"
          download
          title="Download PDF"
        >
          <img
            src="/my-dark-blog-main/UBS.png"
            alt="French OAT-Bund Spread chart"
            className="rounded-xl shadow-md my-8 max-w-sm mx-auto"
          />
        </a>
  
        <p className="text-neutral-300">
          This has been taken from the dense 2025 UBS Global Investment Returns Yearbook and distilled it into
          a clear no-fluff PDF you can actually use. Inside you’ll see:
        </p>
  
        <ul className="text-neutral-300 list-disc pl-5">
          <li>How 125 years of data explain today’s markets</li>
          <li>Why equities dominated the long run and when they didn’t</li>
          <li>The reality of crashes recoveries and patience</li>
          <li>How diversification and inflation hedges really behaved</li>
          <li>The factors (styles) that worked and when they lagged</li>
        </ul>
  
        <p className="text-neutral-300 mt-4">
          It’s a quick-hit resource for traders and investors who want the “need-to-know” insights
          without wading through 200+ pages. Click the image above to download the free PDF.
        </p>
  
        {/* Secondary download button */}
        <p className="mt-6">
          <a
            className="inline-block px-4 py-2 rounded-lg bg-teal-500 text-black font-semibold hover:bg-teal-400"
            href="/my-dark-blog-main/Global-Investments-Return-Summary-2025.pdf"
            download
          >
            Download the PDF
          </a>
        </p>
      </article>
    );
  }
