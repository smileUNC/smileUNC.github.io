import NewsList from "../NewsList";
import { PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import { news } from "../../data/news";

// News & updates. Add new items at the top of src/data/news.js.
export default function Updates() {
  useDocumentTitle("Updates");
  const years = [...new Set(news.map((n) => n.year))];
  return (
    <>
      <PageHeader eyebrow="News" title="Updates">
        Lab news, paper announcements and OpenFWI release notes.
      </PageHeader>
      <section className="section section--tight">
        <div className="container container--narrow">
          {years.map((y) => (
            <section key={y} className="updates-year" aria-labelledby={`upd-${y}`}>
              <h2 id={`upd-${y}`} className="year-title">
                {y}
              </h2>
              <NewsList items={news.filter((n) => n.year === y)} />
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
