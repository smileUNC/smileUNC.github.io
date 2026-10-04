import { Link } from "react-router";
import {
  FiArrowLeft,
  FiBarChart2,
  FiBookmark,
  FiDatabase,
  FiFileText,
  FiGithub,
  FiGlobe,
} from "react-icons/fi";
import { Button } from "./Button";
import { AuthorList, MathText } from "./common";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import { asset } from "../utils/asset";
import "./ProjectLayout.css";

const LINK_ICONS = {
  paper: FiFileText,
  arxiv: FiFileText,
  pdf: FiFileText,
  code: FiGithub,
  dataset: FiDatabase,
  data: FiDatabase,
  website: FiGlobe,
  benchmark: FiBarChart2,
  bibtex: FiBookmark,
};

// Shared layout for project pages: header (venue, title, authors, links) + body.
//   links: [{ label: "Paper", href: "...", icon: "paper" }, { label: "BibTeX", to: "#citation", icon: "bibtex" }]
export default function ProjectLayout({ title, pageTitle, venue, isNew, authors, links = [], children }) {
  useDocumentTitle(pageTitle || title);
  return (
    <article className="project-page">
      <header className="project-hero">
        <div className="container container--narrow">
          <Link to="/projects" className="back-link">
            <FiArrowLeft aria-hidden="true" /> All projects
          </Link>
          <div className="project-hero-meta">
            {venue && <span className="badge">{venue}</span>}
            {isNew && <span className="badge badge--new">New</span>}
          </div>
          <h1>
            <MathText>{title}</MathText>
          </h1>
          {authors && (
            <p className="project-authors">
              <AuthorList authors={authors} />
            </p>
          )}
          {links.length > 0 && (
            <div className="btn-row project-links">
              {links.map((l, i) => {
                const Icon = LINK_ICONS[l.icon] || FiFileText;
                const anchor = l.to && l.to.startsWith("#");
                return (
                  <Button
                    key={l.label}
                    to={anchor ? undefined : l.to}
                    href={anchor ? l.to : l.href}
                    variant={i === 0 ? "primary" : "secondary"}
                    size="sm"
                  >
                    <Icon aria-hidden="true" /> {l.label}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </header>
      <div className="container container--narrow project-body prose">{children}</div>
    </article>
  );
}

// A figure with an optional caption.
export function Figure({ src, alt, caption, maxWidth }) {
  return (
    <figure className="figure">
      <img
        src={asset(src)}
        alt={alt || ""}
        loading="lazy"
        style={maxWidth ? { maxWidth: `min(100%, ${maxWidth}px)` } : undefined}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

// A row of key facts (e.g. "280K+ samples").
export function FactRow({ facts }) {
  return (
    <dl className="fact-row">
      {facts.map((f) => (
        <div key={f.label} className="fact">
          <dt>{f.label}</dt>
          <dd>{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}
