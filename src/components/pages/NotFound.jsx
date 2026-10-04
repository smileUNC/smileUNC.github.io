import { Button } from "../Button";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("Page not found");
  return (
    <section className="section">
      <div className="container container--narrow" style={{ textAlign: "center" }}>
        <span className="eyebrow">404</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}>We couldn’t find that page</h1>
        <p style={{ margin: "14px auto 26px", maxWidth: 520, color: "var(--muted)" }}>
          The page may have moved. Try one of these instead:
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Button to="/">Home</Button>
          <Button to="/projects" variant="secondary">
            Projects
          </Button>
          <Button to="/publications" variant="secondary">
            Publications
          </Button>
        </div>
      </div>
    </section>
  );
}
