import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ---------- sample equity points ---------- */
const equitySeries = [
  { date: "2005 Jan", equity: 1_000_000 },
  { date: "2007 Jan", equity: 1_000_000 },
  { date: "2009 Jan", equity: 1_000_000 },
  { date: "2011 Jan", equity: 3_024_420 },
  { date: "2013 Jan", equity: 3_743_287 },
  { date: "2015 Jan", equity: 8_739_756 },
  { date: "2017 Jan", equity: 12_431_849 },
  { date: "2019 Jan", equity: 18_133_002 },
  { date: "2021 Jan", equity: 42_303_359 },
  { date: "2023 Jan", equity: 52_924_417 },
  { date: "2025 Jan", equity: 77_998_895 },
];

export default function Strategies() {
  return (
    <main className="container mx-auto p-8 space-y-10">
      <h1 className="text-2xl font-semibold tracking-tight">Strategies</h1>

      <StrategyCard
        title="Mean Reversion – SPXL"
        backtest={{ from: "2005-01-01", to: "2025-01-31" }}
        equity={equitySeries}
        metrics={{
          "Start Capital": "$1 M",
          "Net Profit": "$79 M",
          "Total Return": "7956 %",
          CAGR: "24 %",
          Sharpe: "0.68",
        }}
        aboutText={`This strategy fades short‑term dips in SPXL when the broader market trend is up. Entry triggers when price sits below the 10‑day SMA but above the 150‑day SMA **and** the MACD histogram is rising while still negative (momentum turning). It exits after a quick $10 pop or a $50 stop‑loss. Position sizing is all‑in to keep the back‑test simple.`}
        code={STRATEGY_CODE}
      />
    </main>
  );
}

/* ------------------- component ------------------- */
function StrategyCard({ title, backtest, equity, metrics, aboutText, code }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <section className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/30 relative">
      {/* header */}
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm text-neutral-500">
            {backtest.from} → {backtest.to}
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowAbout(true)}
            className="rounded-md border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-800"
          >
            About
          </button>
          <button
            onClick={() => setShowCode((p) => !p)}
            className="rounded-md border border-neutral-700 px-3 py-1 text-sm hover:bg-neutral-800"
          >
            {showCode ? "Hide Code" : "View Code"}
          </button>
        </div>
      </header>

      {/* collapsible code */}
      {showCode && (
        <div className="relative mt-4">
          <pre className="max-h-64 overflow-auto rounded-lg bg-black/60 p-4 text-xs text-neutral-100">
            <code>{code}</code>
          </pre>
          <button
            onClick={copyCode}
            className="absolute top-2 right-2 rounded-md border border-neutral-700 bg-neutral-800/70 px-3 py-1 text-xs hover:bg-neutral-800"
          >
            {copied ? "Copied!" : "Copy Code"}
          </button>
        </div>
      )}

      {/* equity curve */}
      <div className="mt-6 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={equity}>
            <XAxis
              dataKey="date"
              tickFormatter={(d) => d.slice(0, 4)}
              stroke="#6b7280"
              interval="preserveStartEnd"
            />
            <YAxis hide domain={["auto", "auto"]} />
            <Tooltip
              labelFormatter={(d) => `Date: ${d}`}
              formatter={(v) =>
                v.toLocaleString("en-US", { maximumFractionDigits: 0 })
              }
              contentStyle={{ background: "#111827", border: "none" }}
            />
            <Line
              type="monotone"
              dataKey="equity"
              stroke="#22c55e"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* metrics — now flexbox */}
      <dl className="mt-6 flex flex-wrap justify-between gap-y-4 text-sm">
        {Object.entries(metrics).map(([k, v]) => (
          <div key={k} className="min-w-[120px]">
            <dt className="text-neutral-500">{k}</dt>
            <dd className="font-medium text-neutral-200">{v}</dd>
          </div>
        ))}
      </dl>

      {/* about modal */}
      {showAbout && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAbout(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="max-w-md rounded-xl bg-neutral-900 p-6 border border-neutral-700 shadow-lg">
              <button
                onClick={() => setShowAbout(false)}
                className="float-right mb-4 rounded-md border border-neutral-600 px-2 text-sm hover:bg-neutral-800"
              >
                ×
              </button>
              <h3 className="text-lg font-semibold mb-4">About this strategy</h3>
              <p className="text-sm leading-relaxed text-neutral-300">
                {aboutText}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

/* ---------------- strategy code string ---------------- */
const STRATEGY_CODE = `
from AlgorithmImports import *

class MacdReversionStrategy(QCAlgorithm):
    def Initialize(self):
        self.SetStartDate(2005, 1, 1)
        self.SetEndDate(2025, 1, 31)
        self.SetCash(1000000)
        self.spxl = self.AddEquity("SPXL", Resolution.Daily).Symbol

        self.fast_period = 12
        self.slow_period = 26
        self.signal_period = 9

        self.macd = self.MACD(
            self.spxl, self.fast_period, self.slow_period, self.signal_period,
            MovingAverageType.Wilders, Resolution.Daily, Field.Close
        )
        self.sma150 = self.SMA(self.spxl, 150, Resolution.Daily)
        self.sma10  = self.SMA(self.spxl, 10,  Resolution.Daily)

        self.previous_histogram = None
        self.entry_price = None
        self.stop_loss = 50
        self.SetWarmUp(150)

    def OnData(self, data):
        if self.IsWarmingUp: return
        if not (self.macd.IsReady and self.sma150.IsReady and self.sma10.IsReady):
            return

        price = self.Securities[self.spxl].Close
        hist  = self.macd.Current.Value - self.macd.Signal.Current.Value
        above150 = price > self.sma150.Current.Value
        below10  = price < self.sma10.Current.Value

        if above150 and below10 and self.previous_histogram is not None:
            if hist > self.previous_histogram and hist < 0:
                self.SetHoldings(self.spxl, 1)
                self.entry_price = price

        self.previous_histogram = hist

        if self.Portfolio[self.spxl].Invested and self.entry_price is not None:
            if price >= self.entry_price + 10 or price <= self.entry_price - self.stop_loss:
                self.Liquidate(self.spxl)
`.trim();
