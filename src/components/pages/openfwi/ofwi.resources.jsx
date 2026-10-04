import { FiArrowUpRight, FiBookOpen, FiBox, FiCode, FiGithub, FiMail } from "react-icons/fi";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import { resources } from "../../../data/openfwi";
import "./openfwi.css";

const ICONS = { github: FiGithub, models: FiBox, book: FiBookOpen, notebook: FiCode, mail: FiMail };

export default function OpenFWIResources() {
  useDocumentTitle("OpenFWI Resources");
  return (
    <div className="container openfwi-page">
      <h1 className="openfwi-title">OpenFWI Resources</h1>
      <p className="openfwi-lead">Code, pre-trained models and tutorials for working with OpenFWI.</p>
      <div className="resource-grid">
        {resources.map((r) => {
          const Icon = ICONS[r.icon] || FiBookOpen;
          return (
            <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className="resource-card">
              <span className="resource-icon" aria-hidden="true">
                <Icon />
              </span>
              <span className="resource-text">
                <span className="resource-title">
                  {r.title} <FiArrowUpRight aria-hidden="true" />
                </span>
                <span className="resource-desc">{r.description}</span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
