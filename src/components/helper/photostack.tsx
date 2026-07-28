import { useState } from "react";

type Shot = { src: string; caption: string };

export default function PhotoStack({ shots }: { shots: Shot[] }) {
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const go = (newDir: "next" | "prev") => {
    if (exiting || shots.length <= 1) return;
    setDir(newDir);
    setExiting(true);
    window.setTimeout(() => {
      setActive((prev) => {
        const len = shots.length;
        return newDir === "next" ? (prev + 1) % len : (prev - 1 + len) % len;
      });
      setExiting(false);
    }, 420);
  };

  return (
    <div className="select-none">
      <div className="relative">
        {shots.map((shot, i) => {
          // How far this photo sits behind the top of the stack (0 = on top)
          const offset = (i - active + shots.length) % shots.length;
          if (offset > 2) return null; // only render the top few for performance

          const isTop = offset === 0;
          const restRotate = offset === 0 ? 0 : offset === 1 ? -4 : 3;
          const restShift = offset * 10;
          const restScale = 1 - offset * 0.035;

          const exitTransform =
            isTop && exiting
              ? dir === "next"
                ? "translateX(115%) rotate(12deg)"
                : "translateX(-115%) rotate(-12deg)"
              : `translate(${restShift}px, ${restShift}px) rotate(${restRotate}deg) scale(${restScale})`;

          return (
            <figure
              key={shot.src}
              className="border border-line bg-surface shadow-xl shadow-black/40"
              style={{
                position: isTop ? "relative" : "absolute",
                inset: isTop ? undefined : 0,
                zIndex: shots.length - offset,
                transform: exitTransform,
                transition:
                  "transform 0.42s cubic-bezier(.22,.61,.36,1), opacity 0.42s ease",
                opacity: isTop && exiting ? 0 : 1,
                pointerEvents: isTop ? "auto" : "none",
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-auto block hover-desaturate"
                  loading="lazy"
                />
              </div>
              {isTop && (
                <figcaption className="px-4 py-3 border-t border-line font-mono text-[11px] tracking-wide text-muted">
                  {shot.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {shots.length > 1 && (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => go("prev")}
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-ledger-bright transition-colors"
          >
            ← Prev
          </button>
          <div className="flex gap-1.5">
            {shots.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === active ? "bg-ledger-bright" : "bg-line"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go("next")}
            className="font-mono text-xs tracking-widest uppercase text-muted hover:text-ledger-bright transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
