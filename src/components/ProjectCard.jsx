import SmartLink from "./SmartLink";
import { MathText } from "./common";
import { asset } from "../utils/asset";
import "./ProjectCard.css";

// Decorative cover used when a project has no thumbnail image.
export function WaveCover({ label, className = "" }) {
  const waves = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className={`wave-cover ${className}`} aria-hidden="true">
      <svg viewBox="0 0 400 240" preserveAspectRatio="none">
        {waves.map((i) => {
          const y = 40 + i * 28;
          const amp = 10 + i * 2.5;
          return (
            <path
              key={i}
              d={`M0 ${y} C 60 ${y - amp}, 120 ${y + amp}, 200 ${y} S 340 ${y - amp}, 400 ${y}`}
              fill="none"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth={i % 3 === 0 ? 2 : 1}
            />
          );
        })}
      </svg>
      {label && (
        <span className="wave-cover-label">
          <MathText>{label}</MathText>
        </span>
      )}
    </div>
  );
}

export default function ProjectCard({ project }) {
  const { title, short, venue, summary, image, fit = "cover", path, isNew } = project;
  return (
    <SmartLink to={path} className="project-card">
      <div className={`project-card-media${fit === "contain" ? " is-contain" : ""}`}>
        {image ? <img src={asset(image)} alt="" loading="lazy" /> : <WaveCover label={short || title} />}
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          {venue && <span className="badge">{venue}</span>}
          {isNew && <span className="badge badge--new">New</span>}
        </div>
        <h3>
          <MathText>{title}</MathText>
        </h3>
        {summary && <p>{summary}</p>}
      </div>
    </SmartLink>
  );
}

export function ProjectGrid({ projects }) {
  return (
    <div className="grid grid--3">
      {projects.map((p) => (
        <ProjectCard key={p.path} project={p} />
      ))}
    </div>
  );
}
