import HiringItem from "./HiringItem";
import { PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { openings } from "../../data/openings";

// Open positions — edit them in src/data/openings.js.
export default function Hiring() {
  useDocumentTitle("Join us");
  return (
    <>
      <PageHeader eyebrow="Careers" title="Join us">
        We are always looking for motivated people who want to work at the intersection of machine learning, physics and
        imaging.
      </PageHeader>
      <section className="section section--tight">
        <div className="container container--narrow">
          {openings.map((job) => (
            <HiringItem key={job.title} {...job} />
          ))}
        </div>
      </section>
    </>
  );
}
