// ---------------------------------------------------------------------------
// Site-wide settings: lab name, main navigation and footer links.
// Adding a new top-level page? Add it to `nav` below and a <Route> in App.jsx.
// ---------------------------------------------------------------------------

export const site = {
  name: "OmniWave Lab",
  shortName: "OmniWave",
  school: "School of Data and Information Sciences",
  affiliation: "School of Data and Information Sciences, University of North Carolina at Chapel Hill",
  affiliationShort: "UNC Chapel Hill",
};

// Main navigation (top bar). `to` is an internal route.
export const nav = [
  { label: "Home", to: "/", end: true },
  { label: "Projects", to: "/projects" },
  { label: "Software", to: "/software" },
  { label: "Data", to: "/data" },
  { label: "Publications", to: "/publications" },
  { label: "Team", to: "/team" },
  { label: "Updates", to: "/updates" },
];

// Call-to-action button at the right end of the top bar.
export const navCta = { label: "Join us", to: "/hiring" };

// Footer columns. Internal links use `to`, external links use `href`.
export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "Projects", to: "/projects" },
      { label: "Software", to: "/software" },
      { label: "Data", to: "/data" },
      { label: "Publications", to: "/publications" },
      { label: "OpenFWI", to: "/projects/openfwi" },
    ],
  },
  {
    title: "Lab",
    links: [
      { label: "Team", to: "/team" },
      { label: "Updates", to: "/updates" },
      { label: "Blog", to: "/blog" },
      { label: "Join us", to: "/hiring" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact us", to: "/contact-us" },
      { label: "OpenFWI mailing list", href: "https://groups.google.com/g/openfwi" },
      { label: "OpenFWI on GitHub", href: "https://github.com/lanl/OpenFWI" },
    ],
  },
];

// Icons shown in the footer. `icon` is one of: "github", "linkedin", "mail".
export const social = [
  { label: "OpenFWI on GitHub", href: "https://github.com/lanl/OpenFWI", icon: "github" },
  { label: "Youzuo Lin on LinkedIn", href: "https://www.linkedin.com/in/youzuo-lin-3a388616/", icon: "linkedin" },
  { label: "Contact us", to: "/contact-us", icon: "mail" },
];
