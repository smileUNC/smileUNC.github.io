import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../Button";
import "./HiringItem.css";

// Text followed by its links: "Complete the form: Pre-application form ↗".
function Item({ item }) {
  if (typeof item === "string") return item;
  return (
    <>
      {item.text}{" "}
      {item.links?.map((l, i) => (
        <span key={l.href}>
          {i > 0 && " · "}
          {l.href.startsWith("mailto:") ? (
            <a href={l.href}>{l.label}</a>
          ) : (
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label}
            </a>
          )}
        </span>
      ))}
    </>
  );
}

// One open position (data in src/data/openings.js).
export default function HiringItem({ title, status, about, sections = [], links = [] }) {
  return (
    <article className="job card">
      {status && <span className="badge badge--status job-status">{status}</span>}
      <h2 className="job-title">{title}</h2>
      <p className="job-about">{about}</p>
      {sections.map((s) => {
        const List = s.ordered ? "ol" : "ul";
        return (
          <section key={s.heading}>
            <h3 className="job-subtitle">{s.heading}</h3>
            <List className="job-requirements">
              {s.items.map((item, i) => (
                <li key={i}>
                  <Item item={item} />
                </li>
              ))}
            </List>
          </section>
        );
      })}
      {links.length > 0 && (
        <div className="btn-row">
          {links.map((l, i) => (
            <Button key={l.href} href={l.href} variant={i === 0 ? "primary" : "secondary"}>
              {l.label} <FiArrowUpRight aria-hidden="true" />
            </Button>
          ))}
        </div>
      )}
    </article>
  );
}
