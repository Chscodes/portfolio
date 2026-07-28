import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-10 py-24 md:py-32 border-t border-line"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl text-paper">
            Work experience
          </h2>
          <span className="font-mono text-xs tracking-widest uppercase text-muted">
            2023 — Present
          </span>
        </div>

        <div className="space-y-0">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 100}>
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-14 py-10 border-t border-line first:border-t-0 md:first:border-t">
                <div>
                  <span className="font-mono text-xs text-ledger">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-paper mt-2">
                    {job.company}
                  </h3>
                  <p className="text-muted text-sm mt-1">{job.role}</p>
                  <p className="font-mono text-xs text-muted mt-3 uppercase tracking-widest">
                    {job.period}
                  </p>
                </div>

                <div>
                  <ul className="space-y-3">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-paper/90 leading-relaxed"
                      >
                        <span className="text-ledger mt-1.5 shrink-0">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  {job.awards && job.awards.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {job.awards.map((award) => (
                        <span
                          key={award.title}
                          className="inline-flex items-center gap-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-500"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                          {award.title}
                          <span className="text-yellow-500/60">
                            · {award.year}
                          </span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
