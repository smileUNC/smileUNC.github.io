import { FiActivity, FiArrowRight, FiDownload, FiLayers, FiSliders } from "react-icons/fi";
import { Button } from "../Button";
import { WaveCover } from "../ProjectCard";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { software } from "../../data/software";
import { asset, isExternal } from "../../utils/asset";
import "./Software.css";

const MODULE_ICONS = { modeling: FiActivity, imaging: FiLayers, processing: FiSliders };

// Software page (OmniWave Software). All content lives in src/data/software.js.
export default function Software() {
  useDocumentTitle("Software");
  const { name, status, tagline, intro, modules, downloads } = software;

  return (
    <>
      <section className="omni-hero">
        <WaveCover className="omni-hero-bg" />
        <div className="container omni-hero-inner">
          <span className="badge badge--status omni-status">{status}</span>
          <h1>{name}</h1>
          <p className="omni-tagline">{tagline}</p>
          <p className="omni-intro">{intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Planned modules</span>
              <h2>Software components</h2>
            </div>
          </div>
          <div className="omni-modules">
            {modules.map((m, i) => {
              const Icon = MODULE_ICONS[m.key] || FiLayers;
              return (
                <article key={m.key} className="omni-module">
                  <div className="omni-module-head">
                    <span className="omni-module-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="omni-module-step">0{i + 1}</span>
                  </div>
                  <h3>{m.title}</h3>
                  <p>{m.description}</p>
                  {m.items.length > 0 && (
                    <ul className="omni-chips">
                      {m.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="downloads">
        <div className="container container--narrow">
          <div className="section-head">
            <div>
              <span className="eyebrow">Downloads</span>
              <h2>Demonstrations and downloads</h2>
            </div>
          </div>

          {downloads.length === 0 ? (
            <div className="omni-empty">
              <FiDownload aria-hidden="true" />
              <div>
                <h3>No downloads available yet</h3>
                <p>Demonstration packages will be posted here once they are released.</p>
              </div>
            </div>
          ) : (
            <ul className="omni-downloads">
              {downloads.map((d) => {
                const href = d.href || asset(d.file);
                const external = isExternal(d.href);
                return (
                  <li key={d.title} className="omni-download">
                    <div>
                      <h3>{d.title}</h3>
                      {d.description && <p>{d.description}</p>}
                      <div className="omni-download-meta">
                        {[d.module, d.version && `v${d.version}`, d.date, d.size].filter(Boolean).join(" · ")}
                      </div>
                    </div>
                    <Button
                      href={href}
                      variant="secondary"
                      size="sm"
                      {...(external ? {} : { download: "" })}
                    >
                      <FiDownload aria-hidden="true" /> Download
                    </Button>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="omni-contact">
            <p>For early access to demonstrations or to discuss a collaboration, please contact us.</p>
            <Button to="/contact-us">
              Contact us <FiArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
