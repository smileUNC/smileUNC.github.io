import { FiArrowRight } from "react-icons/fi";
import { Button } from "../Button";
import TeamCard from "../TeamCard";
import { PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { alumni, currentMembers } from "../../data/team";

// Team page. Edit members in src/data/team.js.
export default function Team() {
  useDocumentTitle("Team");
  return (
    <>
      <PageHeader eyebrow="People" title="Team">
        The people behind the OmniWave Lab’s research in scientific machine learning and computational wave imaging.
      </PageHeader>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Current members</h2>
          </div>
          <div className="team-grid">
            {currentMembers.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-head">
            <h2>Alumni</h2>
          </div>
          <div className="team-grid team-grid--compact">
            {alumni.map((m) => (
              <TeamCard key={m.name} member={m} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container container--narrow" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem" }}>Want to join us?</h2>
          <p style={{ margin: "10px auto 20px", color: "var(--muted)", maxWidth: 560 }}>
            We are looking for motivated researchers interested in machine learning, computational imaging and physics.
          </p>
          <Button to="/hiring">
            Open positions <FiArrowRight aria-hidden="true" />
          </Button>
        </div>
      </section>
    </>
  );
}
