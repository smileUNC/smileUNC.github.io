// ---------------------------------------------------------------------------
// Team members shown on /team.
//
//   name         Display name (also used to bold lab members in publication lists)
//   role         Optional, e.g. "PhD Student", "Research Scientist"
//   affiliation  Institution shown under the name
//   photo        Optional. Square image in public/images/team/ (~800x800 px).
//                Leave it out and the card shows the person's initials instead.
//   link         Optional. Clicking the card opens this page (website or LinkedIn)
//   website, linkedin, scholar
//                Optional profile links, shown as small icons under the card text
//   period       Optional time in the group, e.g. "Summer intern, 2019"
//   aliases      Optional other spellings that appear in author lists
//
// Alumni: `role` and `affiliation` are their current position (leave them out if
// unknown); `period` is their time in the group (optional, shown in small print).
// To move someone to alumni, cut their entry from `currentMembers` and paste it
// into `alumni`.
// ---------------------------------------------------------------------------

const YOUZUO_WEBSITE = "https://sites.google.com/site/youzuolin044/home";

export const currentMembers = [
  {
    name: "Youzuo Lin",
    role: "Associate Professor",
    affiliation: "UNC Chapel Hill",
    photo: "images/team/ylin.jpg",
    link: YOUZUO_WEBSITE,
    website: YOUZUO_WEBSITE,
    linkedin: "https://www.linkedin.com/in/youzuo-lin-3a388616/",
    scholar: "https://scholar.google.com/citations?user=CMXuHYgAAAAJ&hl=en",
  },
  {
    name: "Peng Jin",
    role: "Research Scientist",
    affiliation: "UNC Chapel Hill",
    photo: "images/team/peng.jpg",
    link: "https://www.linkedin.com/in/peng-jin-763606a9/",
    linkedin: "https://www.linkedin.com/in/peng-jin-763606a9/",
    scholar: "https://scholar.google.com/citations?user=Q1OwDyAAAAAJ&hl=en",
  },
  {
    name: "Yinpeng Chen",
    role: "Collaborating Research Scientist",
    affiliation: "Google DeepMind",
    photo: "images/team/yinpeng.jpg",
    link: "https://www.linkedin.com/in/yinpeng-chen-366491b9/",
    linkedin: "https://www.linkedin.com/in/yinpeng-chen-366491b9/",
    scholar: "https://scholar.google.com/citations?user=V_VpLksAAAAJ&hl=en",
  },
  {
    name: "Yinan Feng",
    role: "PhD Student",
    affiliation: "UNC Chapel Hill",
    photo: "images/team/yinan.jpg",
    link: "https://www.linkedin.com/in/yinan-feng-a3a5091b3/",
    linkedin: "https://www.linkedin.com/in/yinan-feng-a3a5091b3/",
    scholar: "https://scholar.google.com/citations?user=LySxJYUAAAAJ&hl=en",
  },
  {
    name: "Yuzhe Guo",
    role: "PhD Student",
    affiliation: "UNC Chapel Hill",
    photo: "images/team/yuzhe.jpg",
  },
  {
    name: "Mosha (Andy) Huang",
    role: "PhD Student",
    affiliation: "UNC Chapel Hill",
    photo: "images/team/mosha.jpg",
    aliases: ["Mosha Huang", "Andy Huang"],
  },
  {
    name: "Titus Spielvogel",
    role: "Research Assistant",
    affiliation: "UNC Chapel Hill",
    photo: "images/team/titus.jpg",
  },
  {
    name: "Yi Tang",
    role: "Research Assistant",
    affiliation: "UNC Chapel Hill",
  },
];

export const alumni = [
  {
    name: "Hanchen Wang",
    role: "Applied Scientist",
    affiliation: "Amazon",
    photo: "images/team/hanchen.jpg",
    link: "https://www.linkedin.com/in/wanghanchen/",
  },
  {
    name: "Min Zhu",
    role: "PhD Student",
    affiliation: "Yale University",
    photo: "images/team/minzhu.jpg",
    link: "https://www.linkedin.com/in/min-zhu-a9b897239/",
  },
  {
    name: "Shengyu Chen",
    role: "Research Scientist",
    affiliation: "NEC Laboratories America",
    photo: "images/team/shengyu.jpg",
    link: "https://www.linkedin.com/in/shengyuchen/",
  },
  {
    name: "Yang Chen",
    role: "Software Engineer",
    affiliation: "Microsoft",
    photo: "images/team/yang.jpg",
    link: "https://www.linkedin.com/in/yang-chen-973286130/",
  },
  {
    name: "Shihang Feng",
    role: "Research Geophysicist",
    affiliation: "Viridien",
    photo: "images/team/shihang.jpg",
    link: "https://www.linkedin.com/in/shihang-feng-46681780/",
  },
  {
    name: "Xitong Zhang",
    role: "Senior Machine Learning Engineer",
    affiliation: "Qualcomm",
    photo: "images/team/xitong.jpg",
    link: "https://www.linkedin.com/in/xitozhang/",
  },
  {
    name: "Chengyuan Deng",
    role: "Postdoctoral Fellow",
    affiliation: "Johns Hopkins University",
    photo: "images/team/cyd.jpg",
    link: "https://www.linkedin.com/in/chengyuandeng/",
  },
  {
    name: "Qili Zeng",
    role: "Senior Computer Vision Systems Engineer",
    affiliation: "Qualcomm",
    photo: "images/team/qili.jpg",
    link: "https://www.linkedin.com/in/qili-zeng-63219a140/",
  },
  {
    name: "Yanhua Liu",
    role: "Research Geophysicist",
    affiliation: "Shell",
    photo: "images/team/yanhua_liu.jpg",
    link: "https://www.linkedin.com/in/yanhua-liu-phd-375600193/",
    linkedin: "https://www.linkedin.com/in/yanhua-liu-phd-375600193/",
    scholar: "https://scholar.google.com/citations?user=50gvWI0AAAAJ&hl=en",
  },

  // ----- Former students and interns at Los Alamos (from Youzuo Lin's website) -----
  { name: "Saurabh Sinha", period: "Graduate research assistant", photo: "images/team/saurabh_sinha.jpg" },
  { name: "Tiantong Wang", period: "Graduate research assistant", photo: "images/team/tiantong_wang.jpg" },
  {
    name: "Rafael Pires de Lima",
    period: "Graduate research assistant",
    role: "Data Scientist",
    affiliation: "VerAI Discoveries",
    photo: "images/team/rafael_pires_de_lima.jpg",
    aliases: ["Rafael Lima"],
  },
  {
    name: "Renan Rojas-Gomez",
    period: "Summer intern, 2019",
    role: "Machine Learning Engineer",
    affiliation: "Apple",
    photo: "images/team/renan_rojas_gomez.jpg",
    aliases: ["Renan Alfredo Rojas Gomez", "Renan A. Rojas-Gomez"],
  },
  {
    name: "Jihyun Yang",
    period: "Summer intern, 2019",
    role: "Solutions Architect",
    affiliation: "NVIDIA",
    photo: "images/team/jihyun_yang.jpg",
  },
  {
    name: "Yao Li",
    period: "Summer intern, 2019",
    role: "Research Scientist",
    affiliation: "Huawei",
    photo: "images/team/yao_li.jpg",
  },
  {
    name: "Gailin Pease",
    period: "Summer intern, 2019",
    role: "Data Scientist",
    affiliation: "Singularity Energy",
    photo: "images/team/gailin_pease.jpg",
  },
  {
    name: "Zhongping Zhang",
    period: "Graduate research assistant, 2018–2019",
    role: "Associate Professor",
    affiliation: "Harbin Engineering University",
    photo: "images/team/zhongping_zhang.jpg",
  },
  { name: "Panfeng Li", period: "Graduate research assistant, 2018–2019", photo: "images/team/panfeng_li.jpg" },
  { name: "Ningyu Sha", period: "Summer intern, 2018", photo: "images/team/ningyu_sha.jpg" },
  {
    name: "Geoffrey Sasaki",
    period: "Summer intern, 2018",
    role: "Sensor Algorithm Engineer",
    affiliation: "Boeing",
    photo: "images/team/geoffrey_sasaki.jpg",
  },
  { name: "Zheng Zhou", period: "Graduate research assistant, 2017–2018", photo: "images/team/zheng_zhou.jpg" },
  { name: "Yue Wu", period: "Graduate research assistant, 2017–2018", photo: "images/team/yue_wu.jpg" },
  { name: "Prerna Patil", period: "Summer intern, 2017", photo: "images/team/prerna_patil.jpg" },
  {
    name: "Kirtus Leyba",
    period: "Summer intern, 2017",
    role: "PhD Student",
    affiliation: "Arizona State University",
    photo: "images/team/kirtus_leyba.jpg",
  },
  { name: "Jarom Hogue", period: "Summer intern, 2017" },
];

// Every name (and alias) of current members and alumni — used to highlight
// lab members in author lists.
export const labMemberNames = new Set(
  [...currentMembers, ...alumni].flatMap((m) => [m.name, ...(m.aliases || [])])
);
