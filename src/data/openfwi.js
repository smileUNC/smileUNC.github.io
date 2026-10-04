// ---------------------------------------------------------------------------
// OpenFWI content: datasets, benchmark tables and resources.
//
// Table cells are plain strings. Wrap LaTeX in $...$ to render it with KaTeX,
// e.g. "$\\ell_1 \\backslash \\ell_2$" (remember to double every backslash in JS).
//
// To add a benchmark, copy one of the objects in `benchmarks` and edit it.
// Optional fields: `reference` ({ text, title, href }) and `isNew`.
// A row can be { cells: [...], emphasis: true } to highlight it (e.g. a mean).
// ---------------------------------------------------------------------------

export const datasetLicense = {
  label: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License",
  href: "https://creativecommons.org/licenses/by-nc-sa/4.0",
};

export const datasetFamilies = [
  {
    family: "Vel Family",
    items: [
      { name: "FlatVel-A", href: "https://drive.google.com/drive/folders/1NIdjiYhjWSV9NHn7ZEFYTpJxzvzxqYRb?usp=sharing", size: "43GB", train: "24K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Simple situation with flat layers" },
      { name: "FlatVel-B", href: "https://drive.google.com/drive/folders/1XnQjke4vG8DpHvfpoCIKQaG0D7Jsi_8O?usp=sharing", size: "43GB", train: "24K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Difficult version of FlatVel-A" },
      { name: "CurveVel-A", href: "https://drive.google.com/drive/folders/1NGXnVG0gUFHfDcUvJxfozCgiI4WwquVk?usp=sharing", size: "43GB", train: "24K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Simple situation with curved layers" },
      { name: "CurveVel-B", href: "https://drive.google.com/drive/folders/1d1N6DIISC0fBMwPxnOYOhFP3p2ZtCPmf?usp=sharing", size: "43GB", train: "24K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Difficult version of CurveVel-A" },
    ],
  },
  {
    family: "Fault Family",
    items: [
      { name: "FlatFault-A", href: "https://drive.google.com/drive/folders/1jOB6R_zewuFj5wZam7nDP7GixQnbnRLR?usp=sharing", size: "77GB", train: "48K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Flat layers with one fault" },
      { name: "FlatFault-B", href: "https://drive.google.com/drive/folders/1mfu5DCMTiEzrYoXbMfq9ILAM0RJ2SqNX?usp=sharing", size: "77GB", train: "48K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Difficult version of FlatFault-A" },
      { name: "CurveFault-A", href: "https://drive.google.com/drive/folders/1vqUHJ-iRwp3ozL-e4HhKGpdO0e7NQZE1?usp=sharing", size: "77GB", train: "48K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Curve layers with one fault" },
      { name: "CurveFault-B", href: "https://drive.google.com/drive/folders/1QTDno4_qed94mqhxJRzqWC19iYfANRqD?usp=sharing", size: "77GB", train: "48K", val: "6K", input: "(5,1000,70)", output: "(1,70,70)", note: "Difficult version of CurveFault-A" },
    ],
  },
  {
    family: "Style Family",
    items: [
      { name: "Style-A", href: "https://drive.google.com/drive/folders/1CQceUL5ITTHV-PRqbIzkyZwCDdUk0XkU?usp=sharing", size: "95GB", train: "60K", val: "7K", input: "(5,1000,70)", output: "(1,70,70)", note: "Obtained via style transfer from natural images" },
      { name: "Style-B", href: "https://drive.google.com/drive/folders/1JbyhbEq8TIrJbH-FZJje9WOejktE0f0Y?usp=sharing", size: "95GB", train: "60K", val: "7K", input: "(5,1000,70)", output: "(1,70,70)", note: "Difficult version of Style-A" },
    ],
  },
  {
    family: "Kimberlina Family",
    items: [
      { name: "Kimberlina-CO2", href: "https://edx.netl.doe.gov/dataset/kimberlina-1-2-velocity-models", size: "96GB", train: "15K", val: "4430", input: "(9,1251,101)", output: "(1,401,141)", note: "Simulated from CO2 leakage reservoir" },
      { name: "3D Kimberlina-V1", href: "https://edx.netl.doe.gov/group/kimberlina-geophysical-data", size: "1.4TB", train: "1664", val: "163", input: "(25,5001,40,40)", output: "(1,350,400,400)", note: "3D data" },
    ],
  },
];

export const benchmarks = [
  {
    title: "2D Benchmark by InversionNet",
    columns: ["Dataset", "Loss Function", "MAE", "RMSE", "SSIM"],
    rows: [
      ["FlatVel-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0131 \\backslash 0.0131$", "$0.0211 \\backslash 0.0180$", "$0.9895 \\backslash 0.9887$"],
      ["FlatVel-B", "$\\ell_1 \\backslash \\ell_2$", "$0.0351 \\backslash 0.0417$", "$0.0876 \\backslash 0.0909$", "$0.9461 \\backslash 0.9402$"],
      ["CurveVel-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0685 \\backslash 0.0690$", "$0.1273 \\backslash 0.1202$", "$0.8074 \\backslash 0.8223$"],
      ["CurveVel-B", "$\\ell_1 \\backslash \\ell_2$", "$0.1497 \\backslash 0.1624$", "$0.2891 \\backslash 0.2801$", "$0.6727 \\backslash 0.6661$"],
      ["FlatFault-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0172 \\backslash 0.0174$", "$0.0426 \\backslash 0.0362$", "$0.9766 \\backslash 0.9798$"],
      ["FlatFault-B", "$\\ell_1 \\backslash \\ell_2$", "$0.1055 \\backslash 0.1106$", "$0.1741 \\backslash 0.1723$", "$0.7208 \\backslash 0.7186$"],
      ["CurveFault-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0260 \\backslash 0.0280$", "$0.0650 \\backslash 0.0602$", "$0.9566 \\backslash 0.9592$"],
      ["CurveFault-B", "$\\ell_1 \\backslash \\ell_2$", "$0.1646 \\backslash 0.1669$", "$0.2477 \\backslash 0.2412$", "$0.6163 \\backslash 0.6053$"],
      ["Style-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0625 \\backslash 0.0610$", "$0.1024 \\backslash 0.0989$", "$0.8859 \\backslash 0.8910$"],
      ["Style-B", "$\\ell_1 \\backslash \\ell_2$", "$0.0689 \\backslash 0.0586$", "$0.1614 \\backslash 0.0893$", "$0.6314 \\backslash 0.7599$"],
    ],
  },
  {
    title: "2D Benchmark by VelocityGAN",
    columns: ["Dataset", "Loss Function", "MAE", "RMSE", "SSIM"],
    rows: [
      ["FlatVel-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0118 \\backslash 0.0605$", "$0.0178 \\backslash 0.0783$", "$0.9916 \\backslash 0.9453$"],
      ["FlatVel-B", "$\\ell_1 \\backslash \\ell_2$", "$0.0329 \\backslash 0.0328$", "$0.0807 \\backslash 0.0787$", "$0.9521 \\backslash 0.9556$"],
      ["CurveVel-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0482 \\backslash 0.0510$", "$0.1034 \\backslash 0.0976$", "$0.8624 \\backslash 0.8758$"],
      ["CurveVel-B", "$\\ell_1 \\backslash \\ell_2$", "$0.1268 \\backslash 0.1428$", "$0.2618 \\backslash 0.2611$", "$0.7111 \\backslash 0.6962$"],
      ["FlatFault-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0868 \\backslash 0.0319$", "$0.1485 \\backslash 0.0531$", "$0.9313 \\backslash 0.9798$"],
      ["FlatFault-B", "$\\ell_1 \\backslash \\ell_2$", "$0.0925 \\backslash 0.0946$", "$0.1600 \\backslash 0.1553$", "$0.7476 \\backslash 0.7552$"],
      ["CurveFault-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0258 \\backslash 0.0216$", "$0.0606 \\backslash 0.0505$", "$0.9613 \\backslash 0.9687$"],
      ["CurveFault-B", "$\\ell_1 \\backslash \\ell_2$", "$0.1571 \\backslash 0.1583$", "$0.2427 \\backslash 0.2336$", "$0.5996 \\backslash 0.6033$"],
      ["Style-A", "$\\ell_1 \\backslash \\ell_2$", "$0.0612 \\backslash 0.0645$", "$0.1000 \\backslash 0.1025$", "$0.8883 \\backslash 0.8882$"],
      ["Style-B", "$\\ell_1 \\backslash \\ell_2$", "$0.0697 \\backslash 0.0649$", "$0.1108 \\backslash 0.0979$", "$0.6953 \\backslash 0.7249$"],
      ["Kimberlina-CO2", "$\\ell_1 \\backslash \\ell_2$", "$0.0122 \\backslash 0.0119$", "$0.0574 \\backslash 0.0387$", "$0.9716 \\backslash 0.9527$"],
    ],
  },
  {
    title: "2D Benchmark by UPFWI",
    columns: ["Dataset", "Loss Function", "MAE", "RMSE", "SSIM"],
    rows: [
      ["FlatVel-A", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.0621", "0.1233", "0.9563"],
      ["FlatVel-B", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.0677", "0.1493", "0.8874"],
      ["CurveVel-A", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.0805", "0.1411", "0.8443"],
      ["CurveVel-B", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.1777", "0.3179", "0.6614"],
      ["FlatFault-A", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.0876", "0.2060", "0.9340"],
      ["FlatFault-B", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.1416", "0.2220", "0.6937"],
      ["CurveFault-A", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.0500", "0.0966", "0.9495"],
      ["CurveFault-B", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.3452", "0.5010", "0.3941"],
      ["Style-A", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.1429", "0.2342", "0.7846"],
      ["Style-B", "$\\ell_1 + \\ell_2 + \\ell_{perceptual}$", "0.1702", "0.2609", "0.6102"],
    ],
  },
  {
    title: "2D Benchmark by Large Model (with Latent GD)",
    isNew: true,
    reference: {
      text: "Y. Feng, P. Jin, Y. Guo, Y. Chen, and Y. Lin",
      title: "Improving Full Waveform Inversion in Large Model Era",
      venue: "arXiv:2603.00377, 2026",
      href: "https://arxiv.org/pdf/2603.00377",
      project: "/projects/fwi-large-model",
    },
    columns: ["Dataset", "Loss Function", "MAE"],
    rows: [
      ["FlatVel-A", "$\\mathrm{CE} + \\ell_1$", "0.0043"],
      ["FlatVel-B", "$\\mathrm{CE} + \\ell_1$", "0.0054"],
      ["CurveVel-A", "$\\mathrm{CE} + \\ell_1$", "0.0067"],
      ["CurveVel-B", "$\\mathrm{CE} + \\ell_1$", "0.0169"],
      ["FlatFault-A", "$\\mathrm{CE} + \\ell_1$", "0.0058"],
      ["FlatFault-B", "$\\mathrm{CE} + \\ell_1$", "0.0111"],
      ["CurveFault-A", "$\\mathrm{CE} + \\ell_1$", "0.0065"],
      ["CurveFault-B", "$\\mathrm{CE} + \\ell_1$", "0.0324"],
      ["Style-A", "$\\mathrm{CE} + \\ell_1$", "0.0157"],
      ["Style-B", "$\\mathrm{CE} + \\ell_1$", "0.0282"],
      { cells: ["ALL Mean", "$\\mathrm{CE} + \\ell_1$", "0.0136"], emphasis: true },
    ],
  },
  {
    title: "3D Benchmark by InversionNet3D",
    columns: ["Dataset", "Loss Function", "Selected Channels", "MAE", "RMSE", "SSIM"],
    rows: [
      ["3D Kimberlina-V1", "$\\ell_1 \\backslash \\ell_2$", "[1,2,14,15,16,20,23,24]", "$0.0111 \\backslash 0.0156$", "$0.0295 \\backslash 0.0311$", "$0.9773 \\backslash 0.9438$"],
      ["3D Kimberlina-V1", "$\\ell_1 \\backslash \\ell_2$", "[6,7,8,11,13,16,17,18]", "$0.0108 \\backslash 0.0153$", "$0.0285 \\backslash 0.0306$", "$0.9776 \\backslash 0.9420$"],
      ["3D Kimberlina-V1", "$\\ell_1 \\backslash \\ell_2$", "[0,2,4,10,14,20,22,24]", "$0.0161 \\backslash 0.0111$", "$0.0316 \\backslash 0.0290$", "$0.9356 \\backslash 0.9770$"],
    ],
  },
];

export const resources = [
  {
    title: "Source code",
    description: "Code for the OpenFWI baseline models, including InversionNet and VelocityGAN.",
    href: "https://github.com/lanl/OpenFWI",
    icon: "github",
  },
  {
    title: "Pre-trained models",
    description: "Released pre-trained models; the benchmark tables are consistent with their results.",
    href: "https://drive.google.com/drive/folders/1IzRHldsiiHIqTT9CwTXHBtONuIJiNbyJ",
    icon: "models",
  },
  {
    title: "Tutorial",
    description: "The OpenFWI tutorial site, updated as the datasets and code evolve.",
    href: "https://openfwi-lanl.github.io/tutorial/#/",
    icon: "book",
  },
  {
    title: "Colab notebook",
    description: "A hands-on tutorial with a toy dataset that runs in Google Colab.",
    href: "https://colab.research.google.com/drive/17s5JmVs9ABl8MpmFlhWMSslj9_d5Atfx",
    icon: "notebook",
  },
  {
    title: "Mailing list",
    description: "Sign up to hear about new datasets, benchmark updates and releases.",
    href: "https://groups.google.com/g/openfwi",
    icon: "mail",
  },
];

export const citation = {
  paper: "https://proceedings.neurips.cc/paper_files/paper/2022/hash/27d3ef263c7cb8d542c4f9815a49b69b-Abstract-Datasets_and_Benchmarks.html",
  bibtex: `@inproceedings{NEURIPS2022_27d3ef26,
  author    = {Deng, Chengyuan and Feng, Shihang and Wang, Hanchen and Zhang, Xitong and Jin, Peng and Feng, Yinan and Zeng, Qili and Chen, Yinpeng and Lin, Youzuo},
  booktitle = {Advances in Neural Information Processing Systems},
  editor    = {S. Koyejo and S. Mohamed and A. Agarwal and D. Belgrave and K. Cho and A. Oh},
  pages     = {6007--6020},
  publisher = {Curran Associates, Inc.},
  title     = {OpenFWI: Large-scale Multi-structural Benchmark Datasets for Full Waveform Inversion},
  url       = {https://proceedings.neurips.cc/paper_files/paper/2022/file/27d3ef263c7cb8d542c4f9815a49b69b-Paper-Datasets_and_Benchmarks.pdf},
  volume    = {35},
  year      = {2022}
}`,
};
