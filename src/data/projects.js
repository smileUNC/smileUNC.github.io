// ---------------------------------------------------------------------------
// Project cards shown on the home page and on /projects (in this order).
//
//   title    Card title
//   venue    Small tag on the card (venue + year)
//   summary  One sentence
//   image    Optional thumbnail in public/images/. Without one, the card shows
//            a generated "wave" cover with the `short` label.
//   fit      "cover" (fill/crop, default) or "contain" (show the whole figure)
//   path     Internal page ("/projects/...") or external URL
//   isNew    Shows a "New" badge
//
// To add a project page: create a component in src/components/pages/projects/,
// register its route in src/components/pages/Projects.js, then add a card here.
// ---------------------------------------------------------------------------

export const projects = [
  {
    title: "Improving Full Waveform Inversion in Large Model Era",
    short: "FWI × Large Models",
    venue: "arXiv 2026",
    summary:
      "A working recipe that scales data-driven FWI to a billion-parameter model that generalizes to complex, unseen geology.",
    image: "images/projects/fwi-large-model/card.png",
    fit: "contain",
    path: "/projects/fwi-large-model",
    isNew: true,
  },
  {
    title: "OpenPros",
    venue: "ICLR 2026",
    summary:
      "The first large-scale benchmark dataset for limited-view prostate ultrasound computed tomography, with over 280,000 paired samples.",
    image: "images/projects/openpros/card.jpg",
    fit: "contain",
    path: "/projects/openpros",
    isNew: true,
  },
  {
    title: "Weak Supervision Multigeophysical Inversion for CO₂ Saturation Imaging",
    short: "WS-MGI",
    venue: "IEEE TGRS 2025",
    summary:
      "Inverts seismic and electromagnetic data directly to CO₂ saturation, using pseudo-labels from a few well logs to match a supervised model with only 2% of the labels.",
    image: "images/projects/ws-mgi/fig2.jpg",
    fit: "contain",
    path: "/projects/ws-mgi",
  },
  {
    title: "DeFault: Deep-Learning-Based Fault Delineation at the Decatur CO₂ Storage Site",
    short: "DeFault",
    venue: "Earth Space Sci. 2025",
    summary:
      "Relocates passive seismic events and delineates faults in field data from a CO₂ storage site, with a network trained on labeled synthetic data through domain adaptation.",
    image: "images/projects/default/card.jpg",
    fit: "contain",
    path: "/projects/default",
  },
  {
    title: "Auto-Linear Phenomenon in Subsurface Imaging",
    venue: "ICML 2024",
    summary:
      "Self-supervised encoders and decoders of seismic data and velocity maps turn out to be linearly correlated, so only a linear map needs paired data.",
    image: "images/projects/auto-linear/overview.png",
    fit: "contain",
    path: "/projects/auto-linear",
  },
  {
    title: "OpenFWI",
    venue: "NeurIPS 2022",
    summary:
      "Large-scale, multi-structural benchmark datasets and baselines for machine-learning-driven seismic full waveform inversion.",
    image: "images/openfwi.png",
    fit: "contain",
    path: "/projects/openfwi",
  },
  {
    title: "$\\mathbb{E}^{FWI}$: Elastic FWI Benchmarks",
    venue: "NeurIPS 2023",
    summary:
      "Multi-parameter benchmark datasets for elastic full waveform inversion of P- and S-wave velocities.",
    image: "images/efwi.png",
    fit: "contain",
    path: "/projects/efwi",
  },
  {
    title: "InvLINT: An Intriguing Property of Geophysics Inversion",
    venue: "ICML 2022",
    summary:
      "After integral transforms, seismic data and velocity are nearly linearly related, enabling a very lightweight inversion network.",
    image: "images/invlint/invlint0.jpg",
    fit: "contain",
    path: "/projects/invlint",
  },
  {
    title: "UPFWI: Unsupervised Learning of FWI",
    venue: "ICLR 2022",
    summary:
      "Connects a CNN and a differentiable wave-equation forward operator in a loop, so training needs seismic data only.",
    image: "images/upfwi/upfwi0.jpg",
    fit: "contain",
    path: "/projects/upfwi",
  },
  {
    title: "Task-Informed Learned FWI for Ultrasound CT",
    venue: "IEEE TCI 2024",
    summary:
      "A learned FWI method for ultrasound computed tomography trained with a task-informed loss for breast lesion detection.",
    image: "images/usct/usct.jpg",
    fit: "contain",
    path: "/projects/tasked_usct",
  },
  {
    title: "QuGeo",
    venue: "DAC 2024",
    summary: "An end-to-end quantum learning framework for geoscience, with full waveform inversion as a case study.",
    image: "images/projects/qugeo.jpg",
    fit: "contain",
    path: "/projects/qugeo",
  },
  {
    title: "Edge-InversionNet",
    venue: "arXiv 2023",
    summary: "A pruned, lightweight InversionNet for efficient inference on edge devices such as a Raspberry Pi.",
    image: "images/projects/edge.jpg",
    path: "/projects/edge_inversionnet",
  },
  {
    title: "InversionNet",
    venue: "IEEE TCI 2019",
    summary: "An encoder–decoder CNN that maps seismic data directly to subsurface velocity maps.",
    image: "images/inversion/inver.png",
    fit: "contain",
    path: "/projects/inversion_net",
  },
  {
    title: "VelocityGAN",
    venue: "WACV 2019",
    summary: "Data-driven full waveform inversion as image-to-image translation with conditional adversarial networks.",
    image: "images/gan/gan.png",
    fit: "contain",
    path: "/projects/velocity_gan",
  },
];
