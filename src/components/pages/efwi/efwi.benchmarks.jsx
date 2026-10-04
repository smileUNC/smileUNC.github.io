import { InlineMath } from "../../Math";
import { MathText } from "../../common";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import { efwiBenchmarks, efwiParams } from "../../../data/efwi";
import "../openfwi/openfwi.css";
import "./efwi.css";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const arrow = (metric) => (metric === "SSIM" ? "↑" : "↓");

// One benchmark: columns grouped by parameter, two rows (ℓ1 / ℓ2 loss) per dataset.
function BenchmarkTable({ metrics, rows }) {
  const valueCell = (v, i) => (
    <td key={i} className={i % metrics.length === 0 ? "efwi-sep" : undefined}>
      {v}
    </td>
  );
  return (
    <div className="table-scroll">
      <table className="data-table efwi-table">
        <thead>
          <tr>
            <th scope="col" rowSpan={2}>
              Dataset
            </th>
            <th scope="col" rowSpan={2}>
              Loss
            </th>
            {efwiParams.map((p) => (
              <th key={p} scope="colgroup" colSpan={metrics.length} className="efwi-sep efwi-group">
                <MathText>{p}</MathText>
              </th>
            ))}
          </tr>
          <tr>
            {efwiParams.flatMap((p) =>
              metrics.map((m, i) => (
                <th key={p + m} scope="col" className={i === 0 ? "efwi-sep" : undefined}>
                  {m} {arrow(m)}
                </th>
              ))
            )}
          </tr>
        </thead>
        <tbody>
          {rows.flatMap((r) => [
            <tr key={`${r.dataset}-l1`} className="efwi-l1">
              <th scope="rowgroup" rowSpan={2}>
                <InlineMath math={`\\mathbb{E}^{${r.dataset}}`} />
              </th>
              <td>
                <InlineMath math="\ell_1" />
              </td>
              {r.l1.map(valueCell)}
            </tr>,
            <tr key={`${r.dataset}-l2`}>
              <td>
                <InlineMath math="\ell_2" />
              </td>
              {r.l2.map(valueCell)}
            </tr>,
          ])}
        </tbody>
      </table>
    </div>
  );
}

// Benchmark tables come from src/data/efwi.js — edit the numbers there.
export default function EFWIBenchmarks() {
  useDocumentTitle("E^FWI Benchmarks");
  return (
    <div className="container openfwi-page">
      <h1 className="openfwi-title">
        <InlineMath math={"\\mathbb{E}^{FWI}"} /> Benchmarks
      </h1>
      <p className="openfwi-lead">
        Results of three baseline methods on the eight <InlineMath math={"\\mathbb{E}^{FWI}"} /> datasets, each trained
        with the <InlineMath math="\ell_1" /> or the <InlineMath math="\ell_2" /> loss. For each parameter — P-wave
        velocity (<InlineMath math="V_P" />), S-wave velocity (<InlineMath math="V_S" />) and Poisson’s ratio — lower MAE
        and RMSE and higher SSIM are better. For ElasticNet, only SSIM is listed.
      </p>

      <nav className="bench-toc" aria-label="Benchmarks on this page">
        {efwiBenchmarks.map((b) => (
          <a key={b.title} href={`#${slug(b.title)}`}>
            {b.title}
          </a>
        ))}
      </nav>

      {efwiBenchmarks.map((b) => (
        <section key={b.title} id={slug(b.title)} className="bench-section">
          <div className="bench-head">
            <h2>Benchmark by {b.title}</h2>
          </div>
          <BenchmarkTable metrics={b.metrics} rows={b.rows} />
        </section>
      ))}
    </div>
  );
}
