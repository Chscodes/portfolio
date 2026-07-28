import { projects } from '../data'
import { images } from '../assets/images'

export default function Projects() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-16 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-5xl text-paper">Systems in production</h2>
          <span className="font-mono text-xs tracking-widest uppercase text-muted">Selected work</span>
        </div>

        <div className="space-y-28">
          {projects.map((project) => (
            <article key={project.code}>
              <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
                <div>
                  <span className="font-mono text-xs tracking-widest text-ledger">{project.code}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-paper mt-2">{project.name}</h3>
                  <p className="text-muted text-sm mt-1">{project.role}</p>
                  <p className="text-paper/90 leading-relaxed mt-6">{project.description}</p>
                  <ul className="space-y-3 mt-6">
                    {project.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-paper/80 leading-relaxed">
                        <span className="text-ledger mt-1 shrink-0">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  {project.screenshots.map((shot) => (
                    <figure key={shot.src} className="border border-line bg-surface">
                      <div className="overflow-hidden">
                        <img
                          src={images[shot.src]}
                          alt={shot.caption}
                          className="w-full h-auto block grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                      <figcaption className="px-4 py-3 border-t border-line font-mono text-[11px] tracking-wide text-muted">
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
