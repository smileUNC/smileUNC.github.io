// ---------------------------------------------------------------------------
// Research highlights carousel on the home page.
//
//   media  { type: "image", src } or { type: "video", src (MP4), webm (optional), poster }
//          Files live in public/media/highlights/. Prefer MP4 over GIF
//          (a 40 MB GIF is typically < 2 MB as MP4:
//           ffmpeg -i in.gif -movflags +faststart -pix_fmt yuv420p \
//                  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -crf 26 out.mp4)
//   link   Optional internal page or external URL
// ---------------------------------------------------------------------------

export const highlights = [
  {
    title: "Full Waveform Inversion with Large Models",
    authors: "Yinan Feng, Peng Jin, Yuzhe Guo, Yinpeng Chen, and Youzuo Lin",
    paper: "Improving Full Waveform Inversion in Large Model Era",
    venue: "arXiv:2603.00377, 2026",
    media: { type: "image", src: "images/projects/fwi-large-model/card.png" },
    link: "/projects/fwi-large-model",
  },
  {
    title: "OpenPros: Limited-View Prostate Ultrasound CT",
    authors: "Hanchen Wang, Yixuan Wu, Yinan Feng, Peng Jin, …, Emad Boctor, and Youzuo Lin",
    paper: "OpenPros: A Large-Scale Dataset for Limited View Prostate Ultrasound Computed Tomography",
    venue: "International Conference on Learning Representations (ICLR), 2026",
    media: { type: "image", src: "images/projects/openpros/pipeline.jpg" },
    link: "/projects/openpros",
  },
  {
    title: "Auto-Linear Phenomenon",
    authors: "Yinan Feng, Yinpeng Chen, Peng Jin, Shihang Feng, and Youzuo Lin",
    paper: "Auto-Linear Phenomenon in Subsurface Imaging",
    venue: "International Conference on Machine Learning (ICML), 2024",
    media: { type: "image", src: "images/projects/auto-linear/overview.png" },
    link: "/projects/auto-linear",
  },
  {
    title: "Physics-Guided Machine Learning for Computational Wave Imaging",
    authors: "Youzuo Lin, James Theiler, and Brendt Wohlberg",
    paper:
      "Physics-Guided Data-Driven Seismic Inversion: Recent Progress and Future Opportunities in Full-Waveform Inversion",
    venue: "IEEE Signal Processing Magazine, 2023",
    media: { type: "image", src: "media/highlights/physics-guided-ml.jpg" },
    link: "https://ieeexplore.ieee.org/document/10004771",
  },
  {
    title: "Style Transfer",
    authors: "Shihang Feng, Youzuo Lin, and Brendt Wohlberg",
    paper: "Multiscale Data-driven Seismic Full-waveform Inversion with Field Data Study",
    venue: "IEEE Transactions on Geoscience and Remote Sensing, vol. 60, 2021",
    media: { type: "video", src: "media/highlights/style-transfer.mp4", webm: "media/highlights/style-transfer.webm", poster: "media/highlights/style-transfer.jpg" },
    link: "https://ieeexplore.ieee.org/document/9556631",
  },
  {
    title: "Carbon Sequestration Monitoring",
    authors: "Shihang Feng, Xitong Zhang, Brendt Wohlberg, Neill Symons, and Youzuo Lin",
    paper: "Connect the Dots: In Situ 4D Seismic Monitoring of CO2 Storage with Spatio-temporal CNNs",
    venue: "IEEE Transactions on Geoscience and Remote Sensing, vol. 60, 2021",
    media: { type: "video", src: "media/highlights/co2-monitoring.mp4", webm: "media/highlights/co2-monitoring.webm", poster: "media/highlights/co2-monitoring.jpg" },
    link: "https://ieeexplore.ieee.org/document/9565220",
  },
  {
    title: "Edge Computing",
    authors: "Z. Wang, I. Putla, W. Jiang, and Y. Lin (in collaboration with Weiwen Jiang's group)",
    paper: "Edge-InversionNet: Enabling Efficient Inference of InversionNet on Edge Devices",
    venue: "arXiv:2310.09667, 2023",
    media: { type: "video", src: "media/highlights/edge-computing.mp4", webm: "media/highlights/edge-computing.webm", poster: "media/highlights/edge-computing.jpg" },
    link: "/projects/edge_inversionnet",
  },
  {
    title: "InversionNet3D",
    authors: "Qili Zeng, Shihang Feng, Brendt Wohlberg, and Youzuo Lin",
    paper: "InversionNet3D: Efficient and Scalable Learning for 3D Full Waveform Inversion",
    venue: "IEEE Transactions on Geoscience and Remote Sensing, vol. 60, 2021",
    media: { type: "video", src: "media/highlights/inversionnet3d.mp4", webm: "media/highlights/inversionnet3d.webm", poster: "media/highlights/inversionnet3d.jpg" },
    link: "https://ieeexplore.ieee.org/document/9648315",
  },
  {
    title: "Data-Driven Ultrasound Tomography for Breast Cancer Detection",
    authors: "Luke Lozenski, Hanchen Wang, Fu Li, Mark Anastasio, Brendt Wohlberg, Youzuo Lin, and Umberto Villa",
    paper: "Learned Full Waveform Inversion Incorporating Task Information for Ultrasound Computed Tomography",
    venue: "IEEE Transactions on Computational Imaging, vol. 10, 2024",
    media: { type: "image", src: "media/highlights/usct.jpg" },
    link: "/projects/tasked_usct",
  },
];
