import BlogItem from "./BlogItem";
import { PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";

// Blog posts, newest first. `link` can be an internal page or an external URL.
const blogPosts = [
  {
    title: "OpenFWI",
    author: "OmniWave Lab",
    date: "21 Oct, 2023",
    summary:
      "We are thrilled to present OpenFWI, a collection of large-scale, multi-structural benchmark datasets for machine learning driven seismic FWI. We release twelve datasets synthesized from different priors, including one 3D dataset. We also provide baseline experimental results with four deep learning methods: InversionNet, VelocityGAN, UPFWI and InversionNet3D. OpenFWI is the first open-source platform to facilitate data-driven FWI research. It will be actively developed and the datasets are expected to evolve.",
    image: "images/openfwi.png",
    link: "/projects/openfwi",
  },
];

export default function Blog() {
  useDocumentTitle("Blog");
  return (
    <>
      <PageHeader eyebrow="Blog" title="Blog">
        Commentaries, news and updates on our research projects and progress in AI research.
      </PageHeader>
      <section className="section section--tight">
        <div className="container container--narrow">
          {blogPosts.map((post) => (
            <BlogItem key={post.title} {...post} />
          ))}
        </div>
      </section>
    </>
  );
}
