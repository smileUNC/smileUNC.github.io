import { useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { FiArrowUpRight, FiGithub, FiLayers, FiSearch, FiStar, FiX } from "react-icons/fi";
import publications from "../../data/publications.json";
import { AuthorList, MathText, PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import "./Publications.css";

// Publications live in src/data/publications.json (one object per paper):
//   { "title", "authors", "venue", "year", "type", "topic", "selected", "url", "project"?, "code"? }
// Filters are stored in the URL (?topic=...&type=...&year=...&q=...&view=selected),
// so a filtered list can be linked to directly.

const TYPE_ORDER = ["Journal", "Conference", "Book Chapter", "Preprint"];
const byYearDesc = (a, b) => b.year - a.year;

function unique(values) {
  return [...new Set(values)];
}

export default function Publications() {
  useDocumentTitle("Publications");
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const type = params.get("type") || "";
  const topic = params.get("topic") || "";
  const year = params.get("year") || "";
  const view = params.get("view") === "selected" ? "selected" : "all";

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next, { replace: true });
  };
  const reset = () => setParams(new URLSearchParams(), { replace: true });

  const types = useMemo(
    () => unique(publications.map((p) => p.type)).sort((a, b) => TYPE_ORDER.indexOf(a) - TYPE_ORDER.indexOf(b)),
    []
  );
  const topics = useMemo(() => unique(publications.map((p) => p.topic)).sort(), []);
  const years = useMemo(() => unique(publications.map((p) => p.year)).sort((a, b) => b - a), []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return publications
      .filter(
        (p) =>
          (view === "all" || p.selected) &&
          (!type || p.type === type) &&
          (!topic || p.topic === topic) &&
          (!year || String(p.year) === year) &&
          (!needle || `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(needle))
      )
      .sort(byYearDesc);
  }, [q, type, topic, year, view]);

  const groups = useMemo(() => {
    const map = new Map();
    filtered.forEach((p) => {
      if (!map.has(p.year)) map.set(p.year, []);
      map.get(p.year).push(p);
    });
    return [...map.entries()];
  }, [filtered]);

  const anyFilter = q || type || topic || year || view === "selected";

  return (
    <>
      <PageHeader eyebrow="Research output" title="Publications">
        Journal articles, conference papers and preprints from the lab and its collaborators.
      </PageHeader>

      <section className="section section--tight">
        <div className="container">
          <div className="pub-toolbar" role="search">
            <div className="segmented" role="group" aria-label="Show">
              <button
                type="button"
                className={view === "all" ? "is-active" : ""}
                aria-pressed={view === "all"}
                onClick={() => setParam("view", "")}
              >
                All
              </button>
              <button
                type="button"
                className={view === "selected" ? "is-active" : ""}
                aria-pressed={view === "selected"}
                onClick={() => setParam("view", "selected")}
              >
                <FiStar aria-hidden="true" /> Selected
              </button>
            </div>

            <label className="pub-search">
              <FiSearch aria-hidden="true" />
              <span className="visually-hidden">Search publications</span>
              <input
                type="search"
                placeholder="Search title, author or venue"
                value={q}
                onChange={(e) => setParam("q", e.target.value)}
              />
            </label>

            <label className="pub-select">
              <span className="visually-hidden">Type</span>
              <select value={type} onChange={(e) => setParam("type", e.target.value)}>
                <option value="">All types</option>
                {types.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="pub-select pub-select--wide">
              <span className="visually-hidden">Topic</span>
              <select value={topic} onChange={(e) => setParam("topic", e.target.value)}>
                <option value="">All topics</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label className="pub-select">
              <span className="visually-hidden">Year</span>
              <select value={year} onChange={(e) => setParam("year", e.target.value)}>
                <option value="">All years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="pub-summary" aria-live="polite">
            <span>
              Showing <strong>{filtered.length}</strong> of {publications.length} publications
            </span>
            {anyFilter && (
              <button type="button" className="btn btn--ghost btn--sm" onClick={reset}>
                <FiX aria-hidden="true" /> Clear filters
              </button>
            )}
          </div>

          {groups.length === 0 && <p className="pub-empty">No publications match these filters.</p>}

          {groups.map(([yr, items]) => (
            <section key={yr} className="pub-year" aria-labelledby={`year-${yr}`}>
              <h2 id={`year-${yr}`} className="year-title">
                {yr} <span>{items.length}</span>
              </h2>
              <ol className="pub-list">
                {items.map((p) => (
                  <li key={`${p.title}-${p.venue}`} className="pub">
                    <div className="pub-title">
                      {p.url ? (
                        <a href={p.url} target="_blank" rel="noopener noreferrer">
                          <MathText>{p.title}</MathText>
                        </a>
                      ) : (
                        <MathText>{p.title}</MathText>
                      )}
                      {p.selected && (
                        <FiStar className="pub-star" aria-label="Selected publication" role="img" />
                      )}
                    </div>
                    <div className="pub-authors">
                      <AuthorList authors={p.authors} />
                    </div>
                    <div className="pub-venue">{p.venue}</div>
                    <div className="pub-links">
                      <span className="badge badge--muted">{p.type}</span>
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="pub-link">
                          Paper <FiArrowUpRight aria-hidden="true" />
                        </a>
                      )}
                      {p.project && (
                        <Link to={p.project} className="pub-link">
                          <FiLayers aria-hidden="true" /> Project page
                        </Link>
                      )}
                      {p.code && (
                        <a href={p.code} target="_blank" rel="noopener noreferrer" className="pub-link">
                          <FiGithub aria-hidden="true" /> Code
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
