// ---------------------------------------------------------------------------
// Software page (/software) — OmniWave Software, currently in early design.
//
// Edit `status`, the module lists, or add entries to `downloads` as demos become
// available — the page updates automatically.
//
// Adding a demo download:
//   1. Put the file in public/downloads/software/ (keep large files, e.g. > 50 MB,
//      on GitHub Releases, Hugging Face or Google Drive and use their URL instead).
//   2. Add an entry to `downloads`:
//      {
//        title: "Acoustic wave modeling demo",
//        description: "Jupyter notebook and a small velocity model.",
//        module: "Wave Modeling",                        // optional
//        version: "0.1",                                 // optional
//        date: "Oct 2026",                               // optional
//        size: "12 MB",                                  // optional
//        file: "downloads/software/acoustic-demo.zip",   // or href: "https://..."
//      },
// ---------------------------------------------------------------------------

export const software = {
  name: "OmniWave Software",
  status: "Early design",
  tagline: "An integrated platform for wave modeling, tomography and imaging, and wave data processing.",
  intro:
    "OmniWave Software is an integrated software platform under development at the OmniWave Lab. It will bring wave modeling, tomography and imaging, and wave data processing together in a single framework. The project is at an early design stage; this page reports its progress, and demonstration packages will be made available here as they are released.",

  modules: [
    {
      key: "modeling",
      title: "Wave Modeling",
      description: "Numerical simulation of wave propagation (forward modeling).",
      items: [],
    },
    {
      key: "imaging",
      title: "Tomography / Imaging",
      description: "Reconstruction of subsurface or tissue properties from recorded waveforms.",
      items: ["Physics-informed neural networks (PINNs)", "Foundation models"],
    },
    {
      key: "processing",
      title: "Processing",
      description: "Methods for the analysis and enhancement of recorded wave data.",
      items: ["Reverse time migration (RTM)", "Sparse data", "Beamforming"],
    },
  ],

  // Demo downloads (empty for now — see the instructions at the top of this file).
  downloads: [],
};
