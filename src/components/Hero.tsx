import { Fragment } from "react";
import { profile, ledgerStats } from "../data";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 md:px-10 overflow-hidden"
    >
      {/* Soft ambient glow — kept subtle and slow so it reads as depth, not decoration */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <div className="glow-blob absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full bg-ledger/20 blur-3xl" />
        <div
          className="glow-blob absolute top-24 right-0 w-80 h-80 rounded-full bg-amber/10 blur-3xl"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-14 items-end">
        <Reveal>
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-ledger mb-6">
              {profile.focus}
            </p>
            <h1
              className="font-display leading-[0.95] text-paper"
              style={{ fontSize: "clamp(2.75rem, 9vw, 4.5rem)" }}
            >
              {profile.name.split(" ")[0]}{" "}
              <span className="italic text-muted">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted leading-relaxed">
              {profile.summary}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="font-mono text-xs tracking-widest uppercase bg-ledger text-ink px-6 py-3 hover:bg-ledger-bright transition-colors"
              >
                View the systems →
              </a>
              <a
                href="#contact"
                className="font-mono text-xs tracking-widest uppercase border border-line px-6 py-3 text-paper hover:border-ledger hover:text-ledger-bright transition-colors"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Signature element: career ledger card */}
        <Reveal delay={150}>
          <div className="border border-line bg-surface">
            <div className="flex items-center justify-between px-5 py-3 border-b border-line">
              <span className="font-mono text-[11px] tracking-widest uppercase text-muted">
                Career Ledger
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-widest uppercase text-amber">
                <span className="w-1.5 h-1.5 rounded-full bg-amber" />
                FY 2023–2026
              </span>
            </div>
            <div className="grid grid-cols-[1fr_auto] text-sm">
              <div className="px-5 py-2 font-mono text-[11px] tracking-widest uppercase text-muted border-b border-line bg-surface-2">
                Subject
              </div>
              <div className="px-5 py-2 font-mono text-[11px] tracking-widest uppercase text-muted border-b border-line bg-surface-2 text-right">
                Value
              </div>
              {ledgerStats.map((s) => (
                <Fragment key={s.label}>
                  <div className="px-5 py-4 border-b border-line text-paper">
                    {s.label}
                  </div>
                  <div className="px-5 py-4 border-b border-line text-right font-mono text-ledger-bright">
                    {s.value}{" "}
                    <span className="text-muted text-xs">{s.unit}</span>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="px-5 py-4 flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-widest uppercase text-muted">
                Status
              </span>
              <span className="font-mono text-xs text-ledger-bright">
                Actively building →
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
