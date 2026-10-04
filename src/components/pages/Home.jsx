import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../Button";
import HighlightCarousel from "../HighlightCarousel";
import NewsList from "../NewsList";
import { ProjectGrid, WaveCover } from "../ProjectCard";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { highlights } from "../../data/highlights";
import { projects } from "../../data/projects";
import { news } from "../../data/news";
import { software } from "../../data/software";
import publications from "../../data/publications.json";
import { site } from "../../data/site";
import { asset } from "../../utils/asset";
import "./Home.css";

// Research areas = the publication topics; each card links to a filtered list.
const TOPICS = [
  "Subsurface Imaging & Inversion",
  "Scientific Machine Learning & Data Science",
  "Clean Energy & Carbon Management",
  "Medical Imaging & Cancer Detection",
  "Earthquake Characterization & Detection",
  "Renewable Energy & Geothermal Exploration",
];

export default function Home() {
  useDocumentTitle(null);
  const topicCounts = TOPICS.map((t) => ({
    topic: t,
    count: publications.filter((p) => p.topic === t).length,
  }));

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="container home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">
              {site.school} · {site.affiliationShort}
            </span>
            <h1 className="visually-hidden">{site.name}</h1>
            <img
              className="home-hero-logo"
              src={asset("images/omniwave.png")}
              alt="OmniWave"
              width="1200"
              height="189"
            />
            <p className="home-hero-lead">Synergizing artificial intelligence with wave physics principles.</p>
            <p className="home-hero-text">
              Our lab tackles critical issues in energy, geoscience, medicine and biology, using advanced data analytics,
              wave physics, and wave imaging to develop innovative solutions for sustainability and health. We strive for
              breakthroughs that offer practical applications and enhance scientific understanding of wave phenomena
              through collaboration and public engagement.
            </p>
            <div className="btn-row">
              <Button to="/projects">
                Explore projects <FiArrowRight aria-hidden="true" />
              </Button>
              <Button to="/publications" variant="secondary">
                Publications
              </Button>
              <Button to="/hiring" variant="ghost">
                Join us
              </Button>
            </div>
          </div>
          <HighlightCarousel items={highlights} />
        </div>
      </section>

      {/* Software announcement */}
      <section className="container">
        <Link to="/software" className="omni-banner">
          <div className="omni-banner-art">
            <WaveCover />
          </div>
          <div className="omni-banner-text">
            <span className="badge badge--status">{software.status}</span>
            <h2>Introducing {software.name}</h2>
            <p>{software.tagline}</p>
          </div>
          <span className="omni-banner-cta">
            Learn more <FiArrowRight aria-hidden="true" />
          </span>
        </Link>
      </section>

      {/* News */}
      <section className="section">
        <div className="container container--narrow">
          <div className="section-head">
            <div>
              <span className="eyebrow">News</span>
              <h2>Latest updates</h2>
            </div>
            <Link to="/updates" className="link-arrow">
              All updates <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <NewsList items={news.slice(0, 4)} />
        </div>
      </section>

      {/* Research areas = publication topics */}
      <section className="section section--tight">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Research</span>
              <h2>Research areas</h2>
            </div>
            <Link to="/publications" className="link-arrow">
              All publications <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ul className="topic-grid" aria-label="Research areas">
            {topicCounts.map(({ topic, count }) => (
              <li key={topic}>
                <Link to={`/publications?topic=${encodeURIComponent(topic)}`} className="topic-card">
                  <span className="topic-name">{topic}</span>
                  <span className="topic-count">
                    {count} publications <FiArrowRight aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Projects</span>
              <h2>Featured projects</h2>
            </div>
            <Link to="/projects" className="link-arrow">
              All projects <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
          <ProjectGrid projects={projects.slice(0, 6)} />
        </div>
      </section>
    </>
  );
}
