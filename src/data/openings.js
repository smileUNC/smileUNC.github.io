// ---------------------------------------------------------------------------
// Open positions on the "Join us" page (/hiring), copied from Youzuo Lin's
// openings page (sites.google.com/site/youzuolin044/openings-opportunities).
//
//   title     Position name
//   status    Optional badge, e.g. "Recruiting now"
//   about     Short description
//   sections  [{ heading, ordered?, items }] — an item is plain text, or
//             { text, links: [{ label, href }] } to add links after the text
//   links     Optional buttons at the bottom, [{ label, href }]
// Remove an entry when the position is filled.
// ---------------------------------------------------------------------------

const PRE_APPLICATION_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSfRHBbHkr4_b9ullN_K7rFayI4ho1U1GCUcrQmgTcd2DhRdSg/viewform?usp=dialog";
const EMAIL = "yzlin@unc.edu";

export const openings = [
  {
    title: "Ph.D. and Master’s Students (Fall 2026)",
    status: "Recruiting now",
    about:
      "We are seeking multiple highly motivated Ph.D. and Master’s students. Priority areas include scientific machine learning (AI for Science), foundation models, AI for medical imaging, AI for geophysics, computational imaging, and inverse problems.",
    sections: [
      {
        heading: "How to apply",
        ordered: true,
        items: [
          {
            text: "Submit the UNC online application (available December 2025):",
            links: [
              { label: "Ph.D. in Data Science", href: "https://sdis.unc.edu/academics/doctoral/phd-data-science/" },
              { label: "M.S. in Data Science", href: "https://sdis.unc.edu/academics/masters/ms-in-data-science/" },
            ],
          },
          { text: "Complete the pre-application form:", links: [{ label: "Pre-application form", href: PRE_APPLICATION_FORM }] },
          {
            text: "Email your CV and transcripts to",
            links: [{ label: EMAIL, href: `mailto:${EMAIL}` }],
          },
        ],
      },
    ],
    links: [
      { label: "More information", href: "https://drive.google.com/file/d/1MKDbm9GSi-1bWPhzzHMlrAwGEmxLPGUI/view?usp=sharing" },
    ],
  },
  {
    title: "2026 Research Internship",
    status: "Recruiting now",
    about:
      "We are looking for Master’s or senior undergraduate students with a strong computational background for machine learning research addressing computational imaging challenges in medicine, energy, geoscience, and beyond.",
    sections: [
      {
        heading: "Application materials",
        items: [
          "A cover letter describing your motivation, qualifications, research experience, and interest in pursuing a Ph.D. at UNC.",
          "A curriculum vitae listing your education, projects, skills, publications, presentations, and awards.",
          "One reference letter.",
        ],
      },
      {
        heading: "How to apply",
        items: [
          {
            text: "Email your materials with the subject “2026 Research Internship Application – [Your Name]” to",
            links: [
              {
                label: EMAIL,
                href: `mailto:${EMAIL}?subject=${encodeURIComponent("2026 Research Internship Application – [Your Name]")}`,
              },
            ],
          },
          { text: "Also fill in the application form:", links: [{ label: "Application form", href: PRE_APPLICATION_FORM }] },
        ],
      },
    ],
    links: [
      { label: "More information", href: "https://drive.google.com/file/d/199Od0UDZbmXBma0EII7vdA3w_CEFItq0/view?usp=sharing" },
    ],
  },
];
