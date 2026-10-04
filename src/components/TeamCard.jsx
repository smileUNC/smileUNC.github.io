import { FiExternalLink, FiGlobe, FiLinkedin } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import { asset } from "../utils/asset";
import "./TeamCard.css";

function initialsOf(name) {
  return name
    .replace(/\(.*?\)/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .filter((c, i, arr) => i === 0 || i === arr.length - 1)
    .join("");
}

const PROFILE_LINKS = [
  { key: "website", label: "Website", Icon: FiGlobe },
  { key: "linkedin", label: "LinkedIn", Icon: FiLinkedin },
  { key: "scholar", label: "Google Scholar", Icon: SiGooglescholar },
];

// One person. When `link` is set the whole card opens it (the name is the real
// link, stretched over the card); `website`, `linkedin` and `scholar` add small
// icon links under the text.
export default function TeamCard({ member, compact = false }) {
  const { name, role, affiliation, period, photo, link } = member;
  const LinkIcon = !link
    ? null
    : link.includes("linkedin.com")
      ? FiLinkedin
      : link.includes("scholar.google")
        ? SiGooglescholar
        : link === member.website
          ? FiGlobe
          : FiExternalLink;
  const profiles = PROFILE_LINKS.filter((p) => member[p.key]);
  const cls = `team-card${compact ? " team-card--compact" : ""}${link ? " team-card--link" : ""}`;

  return (
    <article className={cls}>
      <div className="team-photo">
        {photo ? (
          <img src={asset(photo)} alt={`Portrait of ${name}`} loading="lazy" />
        ) : (
          <span className="team-initials" aria-hidden="true">
            {initialsOf(name)}
          </span>
        )}
        {LinkIcon && (
          <span className="team-link-icon" aria-hidden="true">
            <LinkIcon />
          </span>
        )}
      </div>
      <div className="team-info">
        <h3>
          {link ? (
            <a className="team-card-link" href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        {role && <p className="team-role">{role}</p>}
        {affiliation && <p className="team-aff">{affiliation}</p>}
        {period && <p className="team-period">{period}</p>}
        {profiles.length > 0 && (
          <ul className="team-links">
            {profiles.map(({ key, label, Icon }) => (
              <li key={key}>
                <a
                  href={member[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} — ${label}`}
                  title={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
