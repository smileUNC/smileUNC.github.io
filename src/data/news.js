// ---------------------------------------------------------------------------
// News & updates, newest first. The home page shows the first four; /updates
// shows everything, grouped by year.
//
//   date   Display date, e.g. "Sep 2026" or "Jun 22, 2023"
//   year   Used for grouping on /updates
//   tag    "Paper" | "OpenFWI" | "Software" | "Lab" | "Award" | ... (any short label works)
//   title  One line ($...$ for math, e.g. "$\\mathbb{E}^{FWI}$")
//   body   Optional sentence(s)
//   links  Optional [{ label, to }] for internal pages or [{ label, href }] for external URLs
// ---------------------------------------------------------------------------

export const news = [
  {
    date: "Sep 2026",
    year: 2026,
    tag: "Software",
    title: "Introducing OmniWave Software",
    body:
      "OmniWave Software, our platform for wave modeling, tomography and imaging, and wave data processing, is in early design. Demonstration packages will be posted as they become available.",
    links: [{ label: "About the software", to: "/software" }],
  },
  {
    date: "Apr 2026",
    year: 2026,
    tag: "Paper",
    title: "Our review paper on computational wave imaging was accepted to the Proceedings of the IEEE",
    links: [{ label: "Paper", href: "https://ieeexplore.ieee.org/document/11494326" }],
  },
  {
    date: "Mar 2026",
    year: 2026,
    tag: "OpenFWI",
    title: "New OpenFWI benchmark: 2D results from a large model (with Latent GD)",
    body: "MAE on all ten 2D OpenFWI datasets from our large-model FWI paper has been added to the benchmark tables.",
    links: [{ label: "See the benchmark", to: "/projects/openfwi/benchmarks" }],
  },
  {
    date: "Mar 2026",
    year: 2026,
    tag: "Paper",
    title: "“Improving Full Waveform Inversion in Large Model Era” is on arXiv",
    links: [
      { label: "Project page", to: "/projects/fwi-large-model" },
      { label: "arXiv", href: "https://arxiv.org/abs/2603.00377" },
    ],
  },
  {
    date: "Jan 2026",
    year: 2026,
    tag: "Paper",
    title: "“OpenPros: A Large-Scale Dataset for Limited View Prostate Ultrasound Computed Tomography” accepted at ICLR 2026",
    links: [
      { label: "Project page", to: "/projects/openpros" },
      { label: "arXiv", href: "https://arxiv.org/abs/2505.12261" },
    ],
  },
  {
    date: "Oct 2025",
    year: 2025,
    tag: "Dataset",
    title: "NVIDIA featured our $\\mathbb{E}^{FWI}$ dataset in a PhysicsNeMo demo",
    links: [
      {
        label: "NVIDIA PhysicsNeMo example",
        href: "https://docs.nvidia.com/physicsnemo/latest/physicsnemo/examples/geophysics/diffusion_fwi/README.html",
      },
      { label: "$\\mathbb{E}^{FWI}$ datasets", to: "/projects/efwi/datasets" },
    ],
  },
  {
    date: "Sep 2025",
    year: 2025,
    tag: "Award",
    title: "New NVIDIA Academic Grant awarded",
  },
  {
    date: "Aug 2025",
    year: 2025,
    tag: "Award",
    title: "New NSF project funded: “Advancing Scientific Machine Learning for Wave Imaging”",
    links: [{ label: "NSF award", href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2504439" }],
  },
  {
    date: "Jul 2025",
    year: 2025,
    tag: "Award",
    title: "New NSF project funded: “Quantum Cyberinfrastructure for Geoscience”",
    links: [{ label: "NSF award", href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=2513431" }],
  },
  {
    date: "Jul 2025",
    year: 2025,
    tag: "Paper",
    title: "“Exploring Invariance in Images through One-way Wave Equations” at ICML 2025",
    links: [{ label: "Paper", href: "https://icml.cc/virtual/2025/poster/45773" }],
  },
  {
    date: "Apr 2025",
    year: 2025,
    tag: "Community",
    title: "The Kaggle competition on geophysical waveform inversion is live",
    links: [{ label: "Kaggle", href: "https://www.kaggle.com/competitions/waveform-inversion" }],
  },
  {
    date: "Feb 2025",
    year: 2025,
    tag: "Service",
    title: "Youzuo Lin joined the editorial board of the IEEE Open Journal of Signal Processing",
    links: [{ label: "Journal", href: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782710" }],
  },
  {
    date: "Jan 2025",
    year: 2025,
    tag: "Paper",
    title: "Papers accepted by The Leading Edge and ICLR 2025",
    links: [
      {
        label: "The Leading Edge paper",
        href: "https://pubs.geoscienceworld.org/seg/tle/article/44/2/133/651622/Integrating-machine-learning-with-simultaneous",
      },
      { label: "ICLR 2025 paper", href: "https://arxiv.org/abs/2410.11247" },
    ],
  },
  {
    date: "2025",
    year: 2025,
    tag: "Paper",
    title:
      "“Weak Supervision Multigeophysical Inversion for CO₂ Saturation Imaging” published in IEEE Transactions on Geoscience and Remote Sensing",
    links: [
      { label: "Project page", to: "/projects/ws-mgi" },
      { label: "Paper", href: "https://doi.org/10.1109/TGRS.2025.3611918" },
    ],
  },
  {
    date: "2025",
    year: 2025,
    tag: "Paper",
    title:
      "“DeFault: DEep-Learning-Based FAULT Delineation Using the IBDP Passive Seismic Data at the Decatur CO₂ Storage Site” published in Earth and Space Science",
    links: [
      { label: "Project page", to: "/projects/default" },
      { label: "Paper", href: "https://doi.org/10.1029/2023EA003422" },
    ],
  },
  {
    date: "Dec 2024",
    year: 2024,
    tag: "Paper",
    title: "Paper accepted by AAAI 2025",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2501.00941" }],
  },
  {
    date: "Sep 2024",
    year: 2024,
    tag: "Award",
    title: "Our proposal was funded by the DOE Office of Advanced Scientific Computing Research (ASCR)",
  },
  {
    date: "Jul 2024",
    year: 2024,
    tag: "Paper",
    title: "“Auto-Linear Phenomenon in Subsurface Imaging” at ICML 2024",
    links: [{ label: "Project page", to: "/projects/auto-linear" }],
  },
  {
    date: "2024",
    year: 2024,
    tag: "Paper",
    title: "“An Empirical Study of Large-Scale Data-Driven Full Waveform Inversion” published in Scientific Reports",
    links: [{ label: "Paper", href: "https://www.nature.com/articles/s41598-024-68573-7" }],
  },

  // ----- OpenFWI release history -----
  {
    date: "Jun 22, 2023",
    year: 2023,
    tag: "OpenFWI",
    title: "Kimberlina 3D-V1 released",
    body: "The Kimberlina 3D-V1 data is available on NETL's Energy Data eXchange (EDX); details are in our Geoscience Data Journal paper.",
    links: [
      { label: "EDX", href: "https://edx.netl.doe.gov/group/kimberlina-geophysical-data" },
      { label: "Paper", href: "https://rmets.onlinelibrary.wiley.com/doi/full/10.1002/gdj3.191" },
    ],
  },
  {
    date: "Nov 16, 2022",
    year: 2022,
    tag: "OpenFWI",
    title: "Benchmark update",
    body: "Some errors in the benchmarks were fixed; the benchmarks are now consistent with the results of the released pre-trained models.",
  },
  {
    date: "Nov 3, 2022",
    year: 2022,
    tag: "OpenFWI",
    title: "OpenFWI tutorial released on Google Colab",
    body: "A hands-on tutorial with a toy dataset.",
    links: [{ label: "Open in Colab", href: "https://colab.research.google.com/drive/17s5JmVs9ABl8MpmFlhWMSslj9_d5Atfx" }],
  },
  {
    date: "Sep 17, 2022",
    year: 2022,
    tag: "OpenFWI",
    title: "OpenFWI accepted at NeurIPS 2022",
    body: "Presented as a spotlight in the NeurIPS 2022 Datasets and Benchmarks track.",
    links: [{ label: "OpenReview", href: "https://openreview.net/forum?id=7w-a8PYPlP" }],
  },
  {
    date: "Aug 17, 2022",
    year: 2022,
    tag: "OpenFWI",
    title: "OpenFWI tutorial updated",
    body: "The tutorial evolves with OpenFWI and improves based on feedback from the community.",
    links: [{ label: "Tutorial", href: "https://openfwi-lanl.github.io/tutorial/#/" }],
  },
  {
    date: "Aug 15, 2022",
    year: 2022,
    tag: "OpenFWI",
    title: "OpenFWI code and pre-trained models released",
    body: "Code for InversionNet and VelocityGAN is available on GitHub.",
    links: [{ label: "GitHub", href: "https://github.com/lanl/OpenFWI" }],
  },
  {
    date: "Jun 17, 2022",
    year: 2022,
    tag: "OpenFWI",
    title: "OpenFWI paper on arXiv",
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2111.02926" }],
  },
  {
    date: "Jun 13, 2022",
    year: 2022,
    tag: "OpenFWI",
    title: "First official release of OpenFWI",
    body: "Eleven 2D datasets and their benchmark results are available for download.",
    links: [{ label: "Datasets", to: "/projects/openfwi/datasets" }],
  },
];
