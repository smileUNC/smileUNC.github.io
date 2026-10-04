import { Link } from "react-router";
import { DataTable, MathText } from "../../common";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import { benchmarks } from "../../../data/openfwi";
import "./openfwi.css";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Benchmark tables come from src/data/openfwi.js — add new ones there.
export default function OpenFWIBenchmarks() {
  useDocumentTitle("OpenFWI Benchmarks");
  return (
    <div className="container openfwi-page">
      <h1 className="openfwi-title">OpenFWI Benchmarks</h1>
      <p className="openfwi-lead">
        Results of baseline methods on the OpenFWI datasets. Lower MAE / RMSE and higher SSIM are better. Where a cell
        shows two values (<MathText>{"$a \\backslash b$"}</MathText>), they correspond to training with the{" "}
        <MathText>{"$\\ell_1$"}</MathText> and <MathText>{"$\\ell_2$"}</MathText> loss, respectively.
      </p>

      <nav className="bench-toc" aria-label="Benchmarks on this page">
        {benchmarks.map((b) => (
          <a key={b.title} href={`#${slug(b.title)}`}>
            {b.title}
            {b.isNew && <span className="badge badge--new">New</span>}
          </a>
        ))}
      </nav>

      {benchmarks.map((b) => (
        <section key={b.title} id={slug(b.title)} className="bench-section">
          <div className="bench-head">
            <h2>{b.title}</h2>
            {b.isNew && <span className="badge badge--new">New</span>}
          </div>
          {b.reference && (
            <p className="bench-ref">
              Reference: {b.reference.text},{" "}
              <a href={b.reference.href} target="_blank" rel="noopener noreferrer">
                <em>{b.reference.title}</em>
              </a>
              , {b.reference.venue}.
              {b.reference.project && (
                <>
                  {" "}
                  <Link to={b.reference.project}>Project page</Link>
                </>
              )}
            </p>
          )}
          <DataTable columns={b.columns} rows={b.rows} />
        </section>
      ))}
    </div>
  );
}
