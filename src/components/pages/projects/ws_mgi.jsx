import ProjectLayout, { FactRow, Figure } from "../../ProjectLayout";
import { CodeBlock } from "../../common";

const BIBTEX = `@article{feng2025weak,
  title   = {Weak Supervision Multigeophysical Inversion for {CO}$_2$ Saturation Imaging},
  author  = {Feng, Shihang and Jin, Peng and Chen, Yinpeng and Zhang, Xitong and Alumbaugh, David and Commer, Michael and Lin, Youzuo},
  journal = {IEEE Transactions on Geoscience and Remote Sensing},
  volume  = {63},
  pages   = {1--17},
  year    = {2025},
  doi     = {10.1109/TGRS.2025.3611918}
}`;

export default function WsMgi() {
  return (
    <ProjectLayout
      title="Weak Supervision Multigeophysical Inversion for CO₂ Saturation Imaging"
      pageTitle="WS-MGI"
      venue="IEEE TGRS 2025"
      authors="Shihang Feng, Peng Jin, Yinpeng Chen, Xitong Zhang, David Alumbaugh, Michael Commer, and Youzuo Lin"
      links={[
        { label: "Paper", href: "https://doi.org/10.1109/TGRS.2025.3611918", icon: "paper" },
        { label: "BibTeX", to: "#citation", icon: "bibtex" },
      ]}
    >
      <FactRow
        facts={[
          { label: "Inputs", value: "Seismic + EM data" },
          { label: "Output", value: "CO₂ saturation" },
          { label: "Labels needed", value: "2%" },
          { label: "Test case", value: "Kimberlina (synthetic)" },
        ]}
      />

      <Figure
        src="images/projects/ws-mgi/fig2.jpg"
        alt="Diagram: a regression between velocity and CO₂ saturation at two well logs turns the velocity model into a dense CO₂ saturation map, which is combined with the sparse well-log samples to form pseudo-labels."
        maxWidth={640}
        caption="Schematic illustration of building CO₂ saturation pseudo-labels from velocity models, where we use velocity model v and the well logs of the CO₂ saturation m to reconstruct the dense labels. The well logs are considered as sparse labels and, when combined with the dense labels, they result in the formation of pseudo-labels denoted as m̃. (Fig. 2 in the paper, © 2025 IEEE.)"
      />

      <h2>Abstract</h2>
      <p>
        In CO₂ sequestration projects, multiphysics inversion has been widely used to reconstruct various geophysical
        properties (such as velocity and conductivity). However, the saturation of CO₂ is not feasible through partial
        differential equations (PDEs), which poses a challenge to traditional multiphysics inversion techniques in
        directly inverting CO₂ saturation from geophysical measurements. Typically, a rock physics model is constructed to
        tackle this challenge. Nevertheless, the construction of such a model is intricate due to the inherent
        complexities and uncertainties within subsurface geology and geophysical data. Data-driven inversion methods
        present an alternative solution, as they can connect CO₂ saturation to geophysical measurements and directly learn
        their relationships from labeled data. Nonetheless, the efficacy of these methods hinges on extensive data
        labeling, incurring considerable costs. To address this challenge, we propose a novel data-driven technique for
        the inversion of multiphysics data called weakly supervised multigeophysical inversion (WS-MGI), which reduces the
        need for labeling and promises to be a more cost-effective solution. In particular, we focus on the multiphysics
        inversion problem from two geophysical data (electromagnetic (EM) and seismic) to CO₂ saturation. By learning the
        local relationship between velocity and CO₂ saturation at a few well logs, we construct the pseudo-labels for CO₂
        saturation, thus enabling the data-driven inversion with few labels. We verify our method using synthetic data
        based on the Kimberlina storage reservoir in California. Experiments show that compared to the supervised
        counterpart, our method can achieve similar inversion results with only 2% labels.
      </p>

      <h2>Method in brief</h2>
      <ul>
        <li>Learns the local relationship between velocity and CO₂ saturation at a few well logs.</li>
        <li>Uses that relationship to construct pseudo-labels for CO₂ saturation, so data-driven inversion needs only a few labels.</li>
        <li>Inverts two kinds of geophysical data — electromagnetic (EM) and seismic — directly to CO₂ saturation.</li>
      </ul>

      <h2 id="citation">Citation</h2>
      <CodeBlock code={BIBTEX} label="Copy BibTeX" />
    </ProjectLayout>
  );
}
