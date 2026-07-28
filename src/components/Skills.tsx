import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl text-paper">Technical stack</h2>
          <span className="font-mono text-xs tracking-widest uppercase text-muted">Core skills</span>
        </div>

        <div className="border border-line">
          <div className="grid grid-cols-[1fr_2fr] bg-surface-2 font-mono text-[11px] tracking-widest uppercase text-muted">
            <div className="px-5 py-3 border-b border-r border-line">Subject 1</div>
            <div className="px-5 py-3 border-b border-line">Subject 2</div>
          </div>
          {skills.map((s, i) => (
            <div
              key={s.group}
              className={`grid grid-cols-[1fr_2fr] ${i !== skills.length - 1 ? 'border-b border-line' : ''}`}
            >
              <div className="px-5 py-5 border-r border-line font-display text-lg text-paper">
                {s.group}
              </div>
              <div className="px-5 py-5 flex flex-wrap gap-2 items-start content-start">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 border border-line text-ledger-bright"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
