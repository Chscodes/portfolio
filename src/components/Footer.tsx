import { profile } from '../data'

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase text-ledger mb-6">Let's talk</p>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-paper max-w-3xl leading-[1.05]">
          Building software you can{' '}
          <span className="italic text-muted">close the books</span> on.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-xl">
          <a href={`mailto:${profile.email}`} className="group">
            <span className="font-mono text-[11px] tracking-widest uppercase text-muted">Email</span>
            <p className="text-lg text-paper mt-2 group-hover:text-ledger-bright transition-colors">
              {profile.email}
            </p>
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="group">
            <span className="font-mono text-[11px] tracking-widest uppercase text-muted">Phone</span>
            <p className="text-lg text-paper mt-2 group-hover:text-ledger-bright transition-colors">
              {profile.phone}
            </p>
          </a>
        </div>

        <div className="mt-24 flex flex-col sm:flex-row justify-between gap-4 border-t border-line pt-8">
          <span className="font-mono text-xs text-muted">© {new Date().getFullYear()} {profile.name}</span>
          <span className="font-mono text-xs text-muted">Built with React · TypeScript · Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
