import { Link } from "react-router";
import ProjectLayout, { FactRow, Figure } from "../../ProjectLayout";
import DumbbellChart from "../../DumbbellChart";
import { CodeBlock, DataTable } from "../../common";
import { benchmarks } from "../../../data/openfwi";

// ---- Numbers are read from the OpenFWI benchmark tables (src/data/openfwi.js) ----
const LARGE_MODEL = "2D Benchmark by Large Model (with Latent GD)";
const firstValue = (cell) => parseFloat(String(cell).replace(/\$/g, "").split("\\backslash")[0]);
function maeByDataset(title) {
  const b = benchmarks.find((x) => x.title === title);
  const col = b.columns.indexOf("MAE");
  const out = {};
  b.rows.forEach((r) => {
    const cells = Array.isArray(r) ? r : r.cells;
    out[cells[0]] = firstValue(cells[col]);
  });
  return out;
}
const ours = maeByDataset(LARGE_MODEL);
const inversionNet = maeByDataset("2D Benchmark by InversionNet");
const velocityGAN = maeByDataset("2D Benchmark by VelocityGAN");
const upfwi = maeByDataset("2D Benchmark by UPFWI");
const datasets = Object.keys(ours).filter((d) => d !== "ALL Mean");
const fmt = (v) => v.toFixed(4);

const BIBTEX = `@article{feng2026improving,
  title   = {Improving Full Waveform Inversion in Large Model Era},
  author  = {Feng, Yinan and Jin, Peng and Guo, Yuzhe and Chen, Yinpeng and Lin, Youzuo},
  journal = {arXiv preprint arXiv:2603.00377},
  year    = {2026}
}`;

export default function FwiLargeModel() {
  return (
    <ProjectLayout
      title="Improving Full Waveform Inversion in Large Model Era"
      pageTitle="FWI in the Large Model Era"
      venue="arXiv 2026"
      isNew
      authors="Yinan Feng, Peng Jin, Yuzhe Guo, Yinpeng Chen, and Youzuo Lin"
      links={[
        { label: "arXiv", href: "https://arxiv.org/abs/2603.00377", icon: "arxiv" },
        { label: "PDF", href: "https://arxiv.org/pdf/2603.00377", icon: "pdf" },
        {
          label: "OpenFWI benchmark",
          to: "/projects/openfwi/benchmarks#2d-benchmark-by-large-model-with-latent-gd",
          icon: "benchmark",
        },
        { label: "BibTeX", to: "#citation", icon: "bibtex" },
      ]}
    >
      <FactRow
        facts={[
          { label: "Model size", value: "~1B parameters" },
          { label: "Training pairs", value: "5M+" },
          { label: "OpenFWI mean MAE", value: fmt(ours["ALL Mean"]) },
          { label: "Zero-shot SSIM", value: "0.5844 → 0.7669" },
        ]}
      />

      <h2>Abstract</h2>
      <p>
        Full Waveform Inversion (FWI) is a highly nonlinear and ill-posed problem that aims to recover subsurface velocity
        maps from surface-recorded seismic waveforms data. Existing data-driven FWI typically uses small models, as
        available datasets have limited volume, geological diversity, and spatial extent, leading to substantial concerns
        about overfitting. Although they perform well on synthetic datasets, current methods fail to generalize to more
        realistic geological structures. In this work, we show that a model trained entirely on simulated and relatively
        simple data can generalize remarkably well to challenging and unseen geological benchmarks. We provide a working
        recipe that tames a billion-parameter model for FWI through coordinated scaling across three axes: model
        capacity, data diversity, and training strategy. Our model achieves state-of-the-art performance on OpenFWI and
        significantly narrows the generalization gap in data-driven FWI. Across six challenging geophysical benchmarks,
        including Marmousi, 2D SEG/EAGE Salt and Overthrust, 2004 BP, Sigsbee, and SEAM Phase I, it infers complex
        structures absent from the training set and delivers significant performance improvements (SSIM from 0.5844 to
        0.7669). Overall, our results demonstrate that with an appropriate scaling strategy, large models trained on
        simple synthetic data can achieve substantial generalization to more complex and realistic geological structures.
      </p>

      <h2>The recipe</h2>
      <ol className="step-list">
        <li>
          <strong>Model capacity</strong>A billion-parameter non-causal transformer that decodes velocity tokens in
          parallel rather than one token at a time, paired with a ViT-VQGAN tokenizer with an expanded bottleneck to
          preserve fine geological detail.
        </li>
        <li>
          <strong>Data diversity</strong>A latent diffusion model trained on OpenFWI synthesizes additional velocity
          maps; with simulated seismic data, this expands the training corpus from 408k to over five million
          velocity–seismic pairs.
        </li>
        <li>
          <strong>Training strategy</strong>Pre-training followed by an RL-based post-training stage that further
          improves the robustness of the model.
        </li>
        <li>
          <strong>Physics-guided refinement (Latent GD)</strong>Gradient descent on the latent representation reduces
          the mismatch between forward-modeled and observed seismic data, keeping the prediction consistent with the
          wave equation.
        </li>
      </ol>

      <h2>Results on OpenFWI</h2>
      <p>
        On the ten 2D OpenFWI datasets, the model reaches a mean MAE of {fmt(ours["ALL Mean"])} and has the lowest MAE of
        the methods listed in the <Link to="/projects/openfwi/benchmarks">OpenFWI benchmark tables</Link> on every
        dataset.
      </p>
      <DumbbellChart
        title="MAE per OpenFWI dataset: InversionNet baseline vs. large model"
        description={`Dumbbell chart comparing MAE of InversionNet and the large model on ten OpenFWI datasets. The large model is lower on every dataset.`}
        baseLabel="InversionNet (ℓ1 loss)"
        valueLabel="Large model (Latent GD)"
        rows={datasets.map((d) => ({ label: d, base: inversionNet[d], value: ours[d] }))}
        max={0.18}
        ticks={[0, 0.05, 0.1, 0.15]}
      />
      <DataTable
        columns={["Dataset", "InversionNet ($\\ell_1$)", "VelocityGAN ($\\ell_1$)", "UPFWI", "Large model (Latent GD)"]}
        rows={datasets.map((d) => [
          d,
          fmt(inversionNet[d]),
          fmt(velocityGAN[d]),
          fmt(upfwi[d]),
          <strong key={d}>{fmt(ours[d])}</strong>,
        ])}
        caption="MAE on the 2D OpenFWI datasets (lower is better). Baselines are taken from the OpenFWI benchmark tables; InversionNet and VelocityGAN numbers are for ℓ1-loss training."
      />

      <h2>Zero-shot generalization to realistic geology</h2>
      <p>
        The model is trained only on simulated OpenFWI data and then applied, without any fine-tuning, to six widely used
        geophysical benchmark families — Marmousi, 2D SEG/EAGE Salt and Overthrust, 2004 BP, Sigsbee and SEAM Phase I
        (26 velocity maps in total). It recovers interfaces and high-contrast bodies that are absent from the training
        set, whereas the BigFWI baselines tend toward oversmoothed, mean-shaped solutions.
      </p>
      <Figure
        src="images/projects/fwi-large-model/zero-shot.png"
        alt="Velocity maps for eight benchmark examples (2004 BP, Marmousi, SEAM Phase I, two Overthrust, two Salt and Sigsbee), comparing the ground truth with reconstructions by BigFWI-M, BigFWI-L and the large model."
        maxWidth={680}
        caption="Zero-shot reconstructions on unseen benchmark models (Figure 4 in the paper). From left: ground truth, BigFWI-M, BigFWI-L and our model. Our method produces sharper and finer structures."
      />
      <DataTable
        columns={["Model", "MAE ↓", "RMSE ↓", "SSIM ↑"]}
        rows={[
          ["BigFWI-M", "199.20", "312.15", "0.5844"],
          ["BigFWI-L", "210.99", "327.79", "0.5579"],
          { cells: ["Ours (with Latent GD)", "139.81", "241.78", "0.7669"], emphasis: true },
        ]}
        caption="Zero-shot results over all 26 benchmark velocity maps (Table 2 in the paper). BigFWI reaches a lower MAE in a few individual cases, such as SEAM Phase I and Salt, but its reconstructions are strongly oversmoothed."
      />

      <h2 id="citation">Citation</h2>
      <CodeBlock code={BIBTEX} label="Copy BibTeX" />
    </ProjectLayout>
  );
}
