import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { InlineMath } from "./Math";
import { FiCheck, FiCopy } from "react-icons/fi";
import { labMemberNames } from "../data/team";

// Scroll to the top of the page on every route change (hash links excepted).
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

// Title band at the top of inner pages.
export function PageHeader({ eyebrow, title, children, actions }) {
  return (
    <div className="page-header">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {children && <p>{children}</p>}
        {actions && <div className="btn-row" style={{ marginTop: 20 }}>{actions}</div>}
      </div>
    </div>
  );
}

// Renders text where $...$ segments are LaTeX, e.g. "$\\mathbb{E}^{FWI}$ Datasets".
export function MathText({ children }) {
  if (typeof children !== "string" || !children.includes("$")) return children ?? null;
  const parts = children.split(/(\$[^$]+\$)/g).filter(Boolean);
  return parts.map((p, i) => {
    if (!(p.length > 2 && p.startsWith("$") && p.endsWith("$"))) return <React.Fragment key={i}>{p}</React.Fragment>;
    const math = p.slice(1, -1).trim();
    // Pure numbers like "0.0131 \\backslash 0.0180" render as text so they match other numeric cells.
    const pair = math.match(/^([\d.]+)\s*\\backslash\s*([\d.]+)$/);
    if (pair) {
      return (
        <span key={i} className="num-pair">
          {pair[1]}
          <span className="num-sep">\</span>
          {pair[2]}
        </span>
      );
    }
    return <InlineMath key={i} math={math} />;
  });
}

// Author list with current members and alumni in bold.
export function AuthorList({ authors }) {
  if (!authors) return null;
  // Split on commas and a final "and", keeping the separators.
  const tokens = authors.split(/(,\s*(?:and\s+)?|\s+and\s+)/);
  return tokens.map((t, i) => {
    const name = t.trim();
    if (i % 2 === 1 || !labMemberNames.has(name)) return <React.Fragment key={i}>{t}</React.Fragment>;
    return (
      <strong key={i} className="author-member">
        {t}
      </strong>
    );
  });
}

// A copyable code block (used for BibTeX).
export function CodeBlock({ code, label = "Copy" }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };
  return (
    <div className="code-block">
      <pre>
        <code>{code}</code>
      </pre>
      <button type="button" className="btn btn--secondary btn--sm copy-btn" onClick={copy}>
        {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
        {copied ? "Copied" : label}
      </button>
    </div>
  );
}

// Generic table. Cells are strings ($...$ = LaTeX) or { text, href }.
// Rows are arrays, or { cells: [...], emphasis: true } for a highlighted row.
export function DataTable({ columns, rows, caption, wrapColumns = [] }) {
  return (
    <div className="table-scroll">
      <table className="data-table">
        {caption && <caption>{caption}</caption>}
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c} scope="col">
                <MathText>{c}</MathText>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const cells = Array.isArray(row) ? row : row.cells;
            return (
              <tr key={i} className={row.emphasis ? "is-emphasis" : undefined}>
                {cells.map((cell, j) => {
                  const content = React.isValidElement(cell) ? (
                    cell
                  ) : cell && typeof cell === "object" ? (
                      <a href={cell.href} target="_blank" rel="noopener noreferrer">
                        <MathText>{cell.text}</MathText>
                      </a>
                    ) : (
                      <MathText>{cell}</MathText>
                    );
                  const cls = wrapColumns.includes(j) ? "is-wrap" : undefined;
                  return j === 0 ? (
                    <th key={j} scope="row" className={cls}>
                      {content}
                    </th>
                  ) : (
                    <td key={j} className={cls}>
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
