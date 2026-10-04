import ProjectLayout, { FactRow, Figure } from "../../ProjectLayout";
import { CodeBlock, DataTable } from "../../common";

// Content summarized from the paper and the official project site (https://open-pros.github.io/).
const BIBTEX = `@inproceedings{wang2026openpros,
  title     = {OpenPros: A Large-Scale Dataset for Limited View Prostate Ultrasound Computed Tomography},
  author    = {Wang, Hanchen and Wu, Yixuan and Feng, Yinan and Jin, Peng and Zhang, Luoyuan and Feng, Shihang and Wiskin, James and Turkbey, Baris and Pinto, Peter A. and Wood, Bradford J. and Luo, Songting and Chen, Yinpeng and Boctor, Emad and Lin, Youzuo},
  booktitle = {International Conference on Learning Representations (ICLR)},
  year      = {2026}
}`;

export default function OpenPros() {
  return (
    <ProjectLayout
      title="OpenPros: A Large-Scale Dataset for Limited View Prostate Ultrasound Computed Tomography"
      pageTitle="OpenPros"
      venue="ICLR 2026"
      isNew
      authors="Hanchen Wang, Yixuan Wu, Yinan Feng, Peng Jin, Luoyuan Zhang, Shihang Feng, James Wiskin, Baris Turkbey, Peter A. Pinto, Bradford J. Wood, Songting Luo, Yinpeng Chen, Emad Boctor, and Youzuo Lin"
      links={[
        {
          label: "Paper",
          href: "https://proceedings.iclr.cc/paper_files/paper/2026/file/b8d1d741f137d9b6ac4f3c1683791e4a-Paper-Conference.pdf",
          icon: "paper",
        },
        { label: "arXiv", href: "https://arxiv.org/abs/2505.12261", icon: "arxiv" },
        { label: "Dataset", href: "https://huggingface.co/datasets/ashynf/OpenPros", icon: "dataset" },
        { label: "Code", href: "https://github.com/hanchenwang/OpenPros", icon: "code" },
        { label: "Project site", href: "https://open-pros.github.io/", icon: "website" },
        { label: "BibTeX", to: "#citation", icon: "bibtex" },
      ]}
    >
      <FactRow
        facts={[
          { label: "Paired samples", value: "280K+" },
          { label: "Dataset size", value: "6.8 TB" },
          { label: "Train / val / test", value: "224K / 28K / 28K" },
          { label: "Source anatomy", value: "4 MRI/CT + 62 ex vivo" },
        ]}
      />

      <Figure src="images/projects/openpros/pipeline.jpg" alt="OpenPros data pipeline" caption="OpenPros end-to-end pipeline." />

      <h2>Abstract</h2>
      <p>
        Prostate cancer is one of the most prevalent and deadly cancers among men, motivating the development of accurate
        and accessible imaging technologies for early detection. Ultrasound computed tomography (USCT) reconstructs
        quantitative tissue parameters such as speed-of-sound (SOS) and is a promising low-cost alternative to existing
        modalities. However, prostate USCT remains challenging due to limited-angle acquisition, strong tissue
        heterogeneity, bone-induced wave distortion, and the lack of large-scale, anatomically realistic datasets for
        method development and evaluation. We introduce OpenPros, the first large-scale benchmark dataset for
        limited-angle prostate USCT, designed to systematically evaluate machine learning methods for quantitative
        inverse problems. OpenPros contains over 280,000 paired samples of realistic 2D SOS maps and corresponding
        ultrasound full-waveform data, generated from anatomically accurate 3D digital prostate models derived from 4
        clinical MRI/CT scans and 62 ex vivo prostate specimens with experimental ultrasound measurements. Wave
        propagation is simulated under clinically realistic configurations using open-source finite-difference
        time-domain and Runge-Kutta solvers. We provide standardized training, in-distribution, and out-of-distribution
        benchmarks and evaluate representative deep learning baselines. While learning-based methods substantially
        improve inference speed and reconstruction accuracy over physics-based approaches, results highlight persistent
        challenges in robustness, generalization, and high-resolution reconstruction quality. By publicly releasing
        OpenPros, we establish a rigorous benchmark to support research in inverse problems, physics-guided learning, and
        operator learning, and to bridge the gap between machine learning research and practical USCT deployment.
      </p>

      <h2>The dataset</h2>
      <ul>
        <li>
          <strong>SOS map shape:</strong> (1140 × 1 × 401 × 161); <strong>ultrasound waveform shape:</strong> (1140 × 40
          × 1000 × 161)
        </li>
        <li>
          <strong>Acquisition:</strong> simulated with an FDTD solver under clinical probe placement (abdominal and
          transrectal)
        </li>
        <li>
          <strong>Annotations:</strong> anatomically accurate organ labels derived from expert-segmented CT/MRI and ex
          vivo scans
        </li>
        <li>
          <strong>Format:</strong> NumPy (.npy) — download from{" "}
          <a href="https://huggingface.co/datasets/ashynf/OpenPros" target="_blank" rel="noopener noreferrer">
            Hugging Face
          </a>
        </li>
      </ul>

      <h2>Benchmarks</h2>
      <p>
        Five representative inversion methods are evaluated, covering physics-based pipelines (beamforming and a
        multi-frequency physics-based FWI) and deep learning models (InversionNet, VelocityGAN and ViT-Inversion). Deep
        learning approaches consistently outperform the physics-based methods in accuracy and efficiency under
        limited-angle conditions, and ViT-Inversion performs best across all reported metrics.
      </p>
      <DataTable
        columns={["Method", "MAE ↓", "RMSE ↓", "SSIM ↑", "PCC ↑"]}
        rows={[
          ["InversionNet", "0.0073", "0.0297", "0.9876", "0.9850"],
          ["VelocityGAN", "0.0605", "0.1210", "0.9624", "0.9113"],
          { cells: ["ViT-Inversion", "0.0067", "0.0268", "0.9908", "0.9892"], emphasis: true },
        ]}
        caption="Deep learning baselines on OpenPros, as reported in the paper and on the project site."
      />

      <h2 id="citation">Citation</h2>
      <CodeBlock code={BIBTEX} label="Copy BibTeX" />
    </ProjectLayout>
  );
}
