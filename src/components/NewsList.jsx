import { FiArrowUpRight } from "react-icons/fi";
import SmartLink from "./SmartLink";
import { MathText } from "./common";
import { asset, isExternal } from "../utils/asset";
import "./NewsList.css";

const TAG_CLASS = {
  Paper: "",
  OpenFWI: "badge--muted",
  Software: "badge--new",
  Lab: "badge--muted",
  Award: "badge--new",
  Conference: "badge--new",
};

// One news link: an internal page (`to`), an external URL (`href`) or a file in public/ (`file`).
function NewsLink({ link }) {
  if (link.file) {
    return (
      <a href={asset(link.file)} target="_blank" rel="noopener noreferrer" className="news-link">
        <MathText>{link.label}</MathText>
        <FiArrowUpRight aria-hidden="true" />
      </a>
    );
  }
  return (
    <SmartLink to={link.to} href={link.href} className="news-link">
      <MathText>{link.label}</MathText>
      {isExternal(link.href || link.to) && <FiArrowUpRight aria-hidden="true" />}
    </SmartLink>
  );
}

export default function NewsList({ items }) {
  return (
    <ol className="news-list">
      {items.map((n, i) => (
        <li key={`${n.date}-${i}`} className="news-item">
          <time className="news-date">{n.date}</time>
          <div className="news-main">
            <div className="news-title-row">
              {n.tag && <span className={`badge ${TAG_CLASS[n.tag] ?? "badge--muted"}`}>{n.tag}</span>}
              <h3 className="news-title">
                <MathText>{n.title}</MathText>
              </h3>
            </div>
            {n.body && <p className="news-body">{n.body}</p>}
            {n.links && n.links.length > 0 && (
              <div className="news-links">
                {n.links.map((l) => (
                  <NewsLink key={l.label} link={l} />
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
