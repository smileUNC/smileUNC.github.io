import { Link } from "react-router";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Button } from "./Button";
import SmartLink from "./SmartLink";
import { footerColumns, site, social } from "../data/site";
import { asset } from "../utils/asset";
import "./Footer.css";

const ICONS = { github: FiGithub, linkedin: FiLinkedin, mail: FiMail };

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-cta" aria-label="Get in touch">
        <div className="container footer-cta-inner">
          <div>
            <h2>Interested in our work?</h2>
            <p>We are always happy to talk about collaborations — get in touch, or see our open positions.</p>
          </div>
          <div className="btn-row">
            <Button to="/contact-us" variant="light">
              Contact us
            </Button>
            <Button to="/hiring" className="btn--outline-light">
              Join us
            </Button>
          </div>
        </div>
      </section>

      <div className="container footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label={`${site.name} — home`}>
            <img src={asset("images/omniwave-emblem.png")} alt="" width="36" height="36" />
            <span>{site.name}</span>
          </Link>
          <p>{site.affiliation}</p>
          <ul className="footer-social">
            {social.map((s) => {
              const Icon = ICONS[s.icon] || FiMail;
              return (
                <li key={s.label}>
                  <SmartLink to={s.to} href={s.href} aria-label={s.label} title={s.label}>
                    <Icon aria-hidden="true" />
                  </SmartLink>
                </li>
              );
            })}
          </ul>
        </div>

        {footerColumns.map((col) => (
          <div className="footer-col" key={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <SmartLink to={l.to} href={l.href}>
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <span>
          © {YEAR} {site.name} · {site.affiliationShort}
        </span>
      </div>
    </footer>
  );
}
