import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { asset } from "../../utils/asset";
import { gallery } from "../../data/gallery";
import "./Gallery.css";

// Gallery page. Photos and captions live in src/data/gallery.js.
export default function Gallery() {
  useDocumentTitle("Gallery");
  const [open, setOpen] = useState(null); // index of the photo shown full size, or null
  const trigger = useRef(null);

  const show = (i, el) => {
    trigger.current = el;
    setOpen(i);
  };
  const close = () => {
    setOpen(null);
    trigger.current?.focus();
  };
  const step = (d) => setOpen((i) => (i + d + gallery.length) % gallery.length);

  return (
    <>
      <PageHeader eyebrow="Lab life" title="Gallery">
        Snapshots from the OmniWave Lab: conferences, lab tours and time together.
      </PageHeader>

      <section className="section">
        <div className="container">
          <ul className="gallery-grid">
            {gallery.map((p, i) => (
              <li key={p.src} className={`gallery-item${p.featured ? " gallery-item--featured" : ""}`}>
                <figure>
                  <button
                    type="button"
                    className="gallery-thumb"
                    onClick={(e) => show(i, e.currentTarget)}
                    aria-label={`View larger: ${p.caption}`}
                  >
                    <img
                      src={asset(p.src)}
                      alt={p.alt}
                      loading={p.featured ? "eager" : "lazy"}
                      style={p.position ? { objectPosition: p.position } : undefined}
                    />
                  </button>
                  <figcaption>
                    <span className="gallery-caption">{p.caption}</span>
                    {p.date && <span className="gallery-date">{p.date}</span>}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {open !== null && (
        <Lightbox photo={gallery[open]} index={open} total={gallery.length} onClose={close} onStep={step} />
      )}
    </>
  );
}

// Full-size view in a modal <dialog>: Esc, the close button or a click outside the photo closes it;
// arrow keys, the side buttons or a swipe move between photos.
function Lightbox({ photo, index, total, onClose, onStep }) {
  const ref = useRef(null);
  const touchX = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog.open) dialog.showModal();
    const root = document.documentElement;
    const overflow = root.style.overflow;
    root.style.overflow = "hidden"; // keep the page behind from scrolling
    return () => {
      root.style.overflow = overflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  const requestClose = () => ref.current?.close(); // fires the dialog's "close" event → onClose

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && requestClose()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") onStep(1);
        if (e.key === "ArrowLeft") onStep(-1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) onStep(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
    >
      <figure className="lightbox-figure">
        <img key={photo.src} src={asset(photo.src)} alt={photo.alt} />
        <figcaption>
          <span>{photo.caption}</span>
          <span className="lightbox-meta">{[photo.date, `${index + 1} / ${total}`].filter(Boolean).join(" · ")}</span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox-btn lightbox-close" onClick={requestClose} aria-label="Close">
        <FiX aria-hidden="true" />
      </button>
      {total > 1 && (
        <>
          <button type="button" className="lightbox-btn lightbox-prev" onClick={() => onStep(-1)} aria-label="Previous photo">
            <FiChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className="lightbox-btn lightbox-next" onClick={() => onStep(1)} aria-label="Next photo">
            <FiChevronRight aria-hidden="true" />
          </button>
        </>
      )}
    </dialog>
  );
}
