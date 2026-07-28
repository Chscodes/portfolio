import { education } from "../data";

export default function EducationAwards() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase text-muted">
            Education
          </span>
          <h3 className="font-display text-2xl md:text-3xl text-paper mt-4">
            {education.school}
          </h3>
          <p className="text-paper/80 mt-2">{education.degree}</p>
          <p className="font-mono text-xs text-muted mt-3 uppercase tracking-widest">
            {education.period}
          </p>
        </div>
        {/* <div>
          <span className="font-mono text-xs tracking-widest uppercase text-muted">Recognition</span>
          <div className="mt-4 space-y-4">
            {awards.map((a) => (
              <div key={a.title} className="flex items-center justify-between border-b border-line pb-4">
                <span className="text-paper/90">{a.title}</span>
                <span className="font-mono text-xs text-ledger">{a.year}</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
