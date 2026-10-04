import { useCallback, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SmartLink from "./SmartLink";
import { asset } from "../utils/asset";
import { OFFLINE } from "../utils/offline";
import "./HighlightCarousel.css";

// Muted, looping video that autoplays on every browser (React does not write the
// `muted` attribute, which iOS Safari needs before it allows autoplay).
function AutoplayVideo({ media, label }) {
  const ref = useCallback((el) => {
    if (!el) return;
    el.muted = true;
    el.setAttribute("muted", "");
    const p = el.play();
    if (p && p.catch) p.catch(() => {});
  }, []);
  return (
    <video
      ref={ref}
      poster={media.poster ? asset(media.poster) : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      {/* H.264 MP4 plays everywhere; the VP9 WebM is a fallback for browsers built without H.264
          (the offline single-file copy carries only the MP4). */}
      <source src={asset(media.src)} type='video/mp4; codecs="avc1.64001F"' />
      {media.webm && !OFFLINE && <source src={asset(media.webm)} type='video/webm; codecs="vp9"' />}
    </video>
  );
}

// Research highlights (data in src/data/highlights.js). Only the active slide
// is rendered, so videos/images load on demand instead of all at once.
export default function HighlightCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const go = useCallback((i) => setIndex(((i % count) + count) % count), [count]);
  const item = items[index];

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(index + 1);
    if (e.key === "ArrowLeft") go(index - 1);
  };

  return (
    <section
      className="highlight"
      aria-roledescription="carousel"
      aria-label="Research highlights"
      onKeyDown={onKeyDown}
    >
      <div className="highlight-media" aria-live="polite">
        {item.media.type === "video" ? (
          <AutoplayVideo key={item.media.src} media={item.media} label={item.title} />
        ) : (
          <img key={item.media.src} src={asset(item.media.src)} alt={item.title} />
        )}
      </div>

      <div className="highlight-body">
        <div className="highlight-top">
          <span className="eyebrow">Research highlight</span>
          <span className="highlight-count">
            {index + 1} / {count}
          </span>
        </div>
        <h2 className="highlight-title">{item.title}</h2>
        <p className="highlight-paper">
          {item.link ? <SmartLink to={item.link}>{item.paper}</SmartLink> : item.paper}
        </p>
        <p className="highlight-meta">
          {item.authors}
          <br />
          <em>{item.venue}</em>
        </p>

        <div className="highlight-controls">
          <button type="button" className="highlight-btn" onClick={() => go(index - 1)} aria-label="Previous highlight">
            <FiChevronLeft aria-hidden="true" />
          </button>
          <div className="highlight-dots" role="tablist" aria-label="Choose a highlight">
            {items.map((it, i) => (
              <button
                key={it.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`${i + 1}: ${it.title}`}
                className={`highlight-dot${i === index ? " is-active" : ""}`}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button type="button" className="highlight-btn" onClick={() => go(index + 1)} aria-label="Next highlight">
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
