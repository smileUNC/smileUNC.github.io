import ProjectLayout, { FactRow, Figure } from "../../ProjectLayout";
import { CodeBlock } from "../../common";

const BIBTEX = `@article{wang2025default,
  title   = {{DeFault}: {DEep}-Learning-Based {FAULT} Delineation Using the {IBDP} Passive Seismic Data at the {Decatur} {CO}$_2$ Storage Site},
  author  = {Wang, Hanchen and Chen, Yinpeng and Alkhalifah, Tariq and Chen, Ting and Lin, Youzuo and Alumbaugh, David},
  journal = {Earth and Space Science},
  volume  = {12},
  number  = {6},
  pages   = {e2023EA003422},
  year    = {2025},
  doi     = {10.1029/2023EA003422}
}`;

export default function DeFault() {
  return (
    <ProjectLayout
      title="DeFault: DEep-Learning-Based FAULT Delineation Using the IBDP Passive Seismic Data at the Decatur CO₂ Storage Site"
      pageTitle="DeFault"
      venue="Earth Space Sci. 2025"
      authors="Hanchen Wang, Yinpeng Chen, Tariq Alkhalifah, Ting Chen, Youzuo Lin, and David Alumbaugh"
      links={[
        { label: "Paper (open access)", href: "https://doi.org/10.1029/2023EA003422", icon: "paper" },
        { label: "arXiv", href: "https://arxiv.org/abs/2311.04361", icon: "arxiv" },
        { label: "Code", href: "https://github.com/hanchenwang/DeFault", icon: "code" },
        { label: "Data (NETL EDX)", href: "https://doi.org/10.18141/1854142", icon: "data" },
        { label: "BibTeX", to: "#citation", icon: "bibtex" },
      ]}
    >
      <FactRow
        facts={[
          { label: "Field site", value: "Decatur, Illinois (IBDP)" },
          { label: "Training data", value: "Labeled synthetic data" },
          { label: "Key idea", value: "Domain adaptation" },
          { label: "Tasks", value: "Event relocation, fault delineation" },
        ]}
      />

      <Figure
        src="images/projects/default/fig2.jpg"
        alt="DeFault workflow: data domain adaptation between synthetic and real seismic data, CNN heat-map relocation of events, fault delineation from the relocated events, and network and location uncertainty estimated with dropout."
        caption="Scratch workflow of the DeFault algorithm (Figure 2 in the paper)."
      />

      <h2>Abstract</h2>
      <p>
        The carbon capture, utilization, and storage (CCUS) framework is an essential component in reducing greenhouse
        gas emissions, with its success hinging on the comprehensive knowledge of subsurface geology and geomechanics.
        Passive seismic event relocation and fault detection offer vital insights into subsurface structures and the
        ability to monitor fluid migration pathways. Accurate identification and localization of seismic events, however,
        face significant challenges, including the necessity for high-quality seismic data and advanced computational
        methods. To address these challenges, we introduce a novel deep learning method, DeFault, specifically designed for
        passive seismic source relocation and fault delineating for passive seismic monitoring projects. By leveraging data
        domain-adaptation, DeFault allows us to train a neural network with labeled synthetic data and apply it directly to
        field data. Using DeFault, the passive seismic sources are automatically clustered based on their recording time
        and spatial locations, and subsequently, faults and fractures are delineated accordingly. We demonstrate the
        efficacy of DeFault on a field case study involving CO₂ injection related microseismic data from Decatur,
        Illinois area. Our approach accurately and efficiently relocated passive seismic events, identified faults and
        could aid in potential damage induced by seismicity. Our results highlight the potential of DeFault as a valuable
        tool for passive seismic monitoring, emphasizing its role in ensuring CCUS project safety. This research bolsters
        the understanding of subsurface characterization in CCUS, illustrating machine learning’s capacity to refine
        these methods. Ultimately, our work has significant implications for CCUS technology deployment, an essential
        strategy in combating climate change.
      </p>

      <h2>Method in brief</h2>
      <ul>
        <li>Trains a neural network on labeled synthetic data and, through data domain adaptation, applies it directly to field data.</li>
        <li>Relocates passive seismic sources and clusters them automatically by recording time and spatial location.</li>
        <li>
          Delineates faults and fractures from the clustered events, demonstrated on microseismic data from CO₂ injection
          at the Illinois Basin – Decatur Project (IBDP).
        </li>
      </ul>

      <h2>Data and code</h2>
      <p>
        The IBDP data used in this study are available on NETL’s Energy Data eXchange (
        <a href="https://doi.org/10.18141/1854142" target="_blank" rel="noopener noreferrer">
          doi:10.18141/1854142
        </a>
        ), and the DeFault code is on{" "}
        <a href="https://github.com/hanchenwang/DeFault" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        .
      </p>

      <h2 id="citation">Citation</h2>
      <CodeBlock code={BIBTEX} label="Copy BibTeX" />
    </ProjectLayout>
  );
}
