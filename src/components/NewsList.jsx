import { FiArrowUpRight } from "react-icons/fi";
import SmartLink from "./SmartLink";
import { MathText } from "./common";
import { isExternal } from "../utils/asset";
import "./NewsList.css";

const TAG_CLASS = { Paper: "", OpenFWI: "badge--muted", Software: "badge--new", Lab: "badge--muted", Award: "badge--new" };

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
                  <SmartLink key={l.label} to={l.to} href={l.href} className="news-link">
                    <MathText>{l.label}</MathText>
                    {isExternal(l.href || l.to) && <FiArrowUpRight aria-hidden="true" />}
                  </SmartLink>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
