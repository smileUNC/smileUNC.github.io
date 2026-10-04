// ---------------------------------------------------------------------------
// Data page (/data): the lab's open datasets, in this order. Each one points to
// its project page, which has the downloads, benchmark tables and citation.
//
//   name     Title ($...$ for math, e.g. "$\\mathbb{E}^{FWI}$")
//   venue    Where the dataset paper was published
//   area     Short label for the field
//   summary  One or two sentences
//   image    Picture in public/images/, shown whole in a wide frame
//   path     The project page (the title, picture and "Project page" button go here)
//   facts    Up to four { label, value } pairs
//   links    Extra buttons: { label, to } for pages on this site, { label, href } for other sites
// ---------------------------------------------------------------------------

export const datasets = [
  {
    key: "openfwi",
    name: "OpenFWI",
    venue: "NeurIPS 2022",
    area: "Seismic imaging · acoustic FWI",
    summary:
      "Large-scale, multi-structural benchmark datasets for machine-learning-driven seismic full waveform inversion: twelve datasets synthesized from different geological priors, including one 3D dataset, with baseline results from InversionNet, VelocityGAN, UPFWI and InversionNet3D.",
    image: "images/data/openfwi-gallery.jpg",
    path: "/projects/openfwi",
    facts: [
      { label: "Datasets", value: "12 (11 in 2D, 1 in 3D)" },
      { label: "Task", value: "Seismic data → velocity map" },
      { label: "Size", value: "43 GB – 1.4 TB per dataset" },
      { label: "License", value: "CC BY-NC-SA 4.0" },
    ],
    links: [
      { label: "Datasets", to: "/projects/openfwi/datasets" },
      { label: "Benchmarks", to: "/projects/openfwi/benchmarks" },
      { label: "GitHub", href: "https://github.com/lanl/OpenFWI" },
    ],
  },
  {
    key: "efwi",
    name: "$\\mathbb{E}^{FWI}$",
    venue: "NeurIPS 2023",
    area: "Seismic imaging · elastic FWI",
    summary:
      "Multi-parameter benchmark datasets for elastic full waveform inversion. Built on OpenFWI, its eight datasets pair elastic seismic data with P- and S-wave velocity maps across flat, curved and faulted structures, with baseline results from InversionNet, VelocityGAN and SimFWI.",
    image: "images/all_B_models.png",
    path: "/projects/efwi",
    facts: [
      { label: "Datasets", value: "8 (Vel and Fault families)" },
      { label: "Task", value: "Seismic data → Vp and Vs" },
      { label: "Size", value: "123–222 GB per dataset" },
      { label: "Seismic data", value: "Vertical + horizontal components" },
    ],
    links: [
      { label: "Datasets", to: "/projects/efwi/datasets" },
      { label: "Benchmarks", to: "/projects/efwi/benchmarks" },
      { label: "Paper", href: "https://arxiv.org/abs/2306.12386" },
    ],
  },
  {
    key: "openpros",
    name: "OpenPros",
    venue: "ICLR 2026",
    area: "Medical imaging · ultrasound CT",
    summary:
      "The first large-scale benchmark dataset for limited-view prostate ultrasound computed tomography: over 280,000 paired speed-of-sound maps and ultrasound full-waveform data, simulated from anatomically realistic prostate models built from clinical MRI/CT scans and ex vivo specimens.",
    image: "images/projects/openpros/card.jpg",
    path: "/projects/openpros",
    facts: [
      { label: "Paired samples", value: "280K+" },
      { label: "Task", value: "Ultrasound data → speed of sound" },
      { label: "Size", value: "6.8 TB" },
      { label: "Train / val / test", value: "224K / 28K / 28K" },
    ],
    links: [
      { label: "Dataset", href: "https://huggingface.co/datasets/ashynf/OpenPros" },
      { label: "Code", href: "https://github.com/hanchenwang/OpenPros" },
      { label: "Project site", href: "https://open-pros.github.io/" },
    ],
  },
];
