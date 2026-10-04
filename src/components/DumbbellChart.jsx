import { useEffect, useRef, useState } from "react";
import "./DumbbellChart.css";

// Before → after comparison per row (emphasis form: baseline in gray, highlight in brand blue).
//   rows: [{ label, base, value }]   base = baseline value, value = highlighted value
// Every value is also listed in the accompanying table, so the tooltip only enhances.
export default function DumbbellChart({
  rows,
  baseLabel,
  valueLabel,
  max,
  ticks,
  format = (v) => v.toFixed(4),
  title,
  description,
}) {
  const [active, setActive] = useState(null);
  // Draw at the real on-screen width so text stays the same size on phones and desktops.
  const plotRef = useRef(null);
  const [W, setW] = useState(720);
  useEffect(() => {
    const el = plotRef.current;
    if (!el) return undefined;
    const update = () => setW(Math.max(300, Math.round(el.clientWidth)));
    update();
    if (typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const left = W < 480 ? 96 : 118;
  const right = W < 480 ? 14 : 24;
  const top = 34;
  const rowH = 32;
  const H = top + rows.length * rowH + 30;
  const x = (v) => left + (v / max) * (W - left - right);

  const activeRow = active == null ? null : rows[active];

  return (
    <figure className="dumbbell">
      {title && <figcaption className="dumbbell-title">{title}</figcaption>}
      <div className="dumbbell-legend" aria-hidden="true">
        <span>
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="4.5" className="dumbbell-base" />
          </svg>
          {baseLabel}
        </span>
        <span>
          <svg width="14" height="14">
            <circle cx="7" cy="7" r="5" className="dumbbell-value" />
          </svg>
          {valueLabel}
        </span>
      </div>
      <div className="dumbbell-plot" ref={plotRef}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={description}>
          {/* gridlines + axis labels */}
          {ticks.map((t) => (
            <g key={t}>
              <line x1={x(t)} x2={x(t)} y1={top - 10} y2={H - 26} className="dumbbell-grid" />
              <text x={x(t)} y={H - 8} textAnchor="middle" className="dumbbell-tick">
                {t === 0 ? "0" : t.toFixed(2)}
              </text>
            </g>
          ))}
          <text x={W - right} y={top - 16} textAnchor="end" className="dumbbell-axis-label">
            {W < 480 ? "MAE →" : "MAE (lower is better) →"}
          </text>

          {rows.map((r, i) => {
            const cy = top + i * rowH + rowH / 2;
            const isActive = active === i;
            return (
              <g
                key={r.label}
                className={`dumbbell-row${isActive ? " is-active" : ""}`}
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                aria-label={`${r.label}: ${baseLabel} ${format(r.base)}, ${valueLabel} ${format(r.value)}`}
              >
                <rect x={0} y={cy - rowH / 2} width={W} height={rowH} className="dumbbell-hit" />
                <text x={left - 14} y={cy} dy="0.35em" textAnchor="end" className="dumbbell-label">
                  {r.label}
                </text>
                <line x1={x(r.value)} x2={x(r.base)} y1={cy} y2={cy} className="dumbbell-link" />
                <circle cx={x(r.base)} cy={cy} r={5} className="dumbbell-base" />
                <circle cx={x(r.value)} cy={cy} r={5.5} className="dumbbell-value" />
              </g>
            );
          })}
        </svg>

        {activeRow && (
          <div
            className="dumbbell-tip"
            style={{
              left: `${Math.min(80, Math.max(20, ((x(activeRow.base) + x(activeRow.value)) / 2 / W) * 100))}%`,
              top: `${((top + (active + 1) * rowH) / H) * 100}%`,
            }}
            role="status"
          >
            <div className="dumbbell-tip-title">{activeRow.label}</div>
            <div>
              <strong>{format(activeRow.value)}</strong> {valueLabel}
            </div>
            <div>
              <strong>{format(activeRow.base)}</strong> {baseLabel}
            </div>
            <div className="dumbbell-tip-delta">
              {Math.round((1 - activeRow.value / activeRow.base) * 100)}% lower MAE
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}
