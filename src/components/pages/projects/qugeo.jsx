import { Link } from "react-router";
import { FiArrowLeft } from "react-icons/fi";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import "../../Content.css";
import { asset } from "../../../utils/asset";

export default function QuGeo() {
  useDocumentTitle("QuGeo");
  return (
    <div className="content-container">
      <Link to="/projects" className="back-link">
        <FiArrowLeft aria-hidden="true" /> All projects
      </Link>
      <div className="content-heading-2">
        QuGeo: An End-to-end Quantum Learning Framework for Geoscience
      </div>

      <div className="content-title">Overview</div>
      <div className="content-text">
        QuGeo stands at the forefront of quantum learning in geoscience,
        particularly revolutionizing Full-Waveform Inversion (FWI). This
        framework merges variational quantum circuits with geophysical analysis,
        introducing a novel integration of quantum computing into geoscience. It
        addresses the crucial need for physics-guided data scaling in
        geoscientific research and highlights the significance of
        application-specific quantum circuit design, particularly for FWI. (Via
        collaboration with{" "}
        <a
          href="https://jqub.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Weiwen Jiang
        </a>
        .)
      </div>
      <div className="content-text">
        The full paper can be found on arxiv:
        <div>
          <a
            href="https://arxiv.org/abs/2311.12333"
            target="_blank"
            rel="noopener noreferrer"
          >
            QuGeo: An End-to-end Quantum Learning Framework for Geoscience -- A
            Case Study on Full-Waveform Inversion
          </a>
        </div>
      </div>

      <div className="content-image">
        <img
          src={asset("images/projects/qugeo.jpg")}
          alt="Models"
          className="content-image"
        />
      </div>
    </div>
  );
}
