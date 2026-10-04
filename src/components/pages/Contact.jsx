import { PageHeader } from "../common";
import { useDocumentTitle } from "../../utils/useDocumentTitle";
import "./contact.css";

// The contact form is a Google Form; change the URL below to use another form.
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf9DzgCvgsIrSvSB8_koDwB5YO_FA7ULf6xsTJRLEDoMuDalw/viewform?embedded=true";

export default function Contact() {
  useDocumentTitle("Contact us");
  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact us">
        Interested in our work or in collaborating with us? Send us a message using the form below.
      </PageHeader>
      <section className="section section--tight">
        <div className="container container--narrow">
          <div className="contact-frame card">
            <iframe src={FORM_URL} title="Contact form" loading="lazy">
              Loading…
            </iframe>
          </div>
          <p className="contact-fallback">
            Form not loading?{" "}
            <a href={FORM_URL.replace("?embedded=true", "")} target="_blank" rel="noopener noreferrer">
              Open it in a new tab
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
