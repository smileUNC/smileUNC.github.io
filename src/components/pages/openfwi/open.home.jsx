import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "../../Button";
import { useDocumentTitle } from "../../../utils/useDocumentTitle";
import { Figure } from "../../ProjectLayout";

export default function OpenFWIHome() {
  useDocumentTitle("OpenFWI");
  return (
    <div className="container container--narrow openfwi-page prose">
      <span className="eyebrow">NeurIPS 2022 · Datasets and Benchmarks</span>
      <h1 className="openfwi-title">OpenFWI</h1>
      <p>
        OpenFWI is a collection of large-scale, multi-structural benchmark datasets for machine learning driven seismic
        full waveform inversion (FWI). We release twelve datasets synthesized from different priors, including one 3D
        dataset. We also provide baseline experimental results with four deep learning methods: InversionNet,
        VelocityGAN, UPFWI and InversionNet3D. OpenFWI is the first open-source platform to facilitate data-driven FWI
        research. It will be actively developed and the datasets are expected to evolve.
      </p>
      <div className="callout">
        <strong>New:</strong> benchmark results from a large model with latent gradient descent (Latent GD) have been
        added to the <Link to="/projects/openfwi/benchmarks">benchmark tables</Link>.
      </div>
      <div className="btn-row" style={{ marginTop: 24 }}>
        <Button to="/projects/openfwi/datasets">
          Browse datasets <FiArrowRight aria-hidden="true" />
        </Button>
        <Button to="/projects/openfwi/benchmarks" variant="secondary">
          Benchmarks
        </Button>
        <Button href="https://github.com/lanl/OpenFWI" variant="secondary">
          GitHub
        </Button>
      </div>
      <Figure src="images/gallery.jpg" alt="Examples of velocity maps from the OpenFWI datasets" />
    </div>
  );
}
