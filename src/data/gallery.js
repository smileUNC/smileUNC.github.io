// ---------------------------------------------------------------------------
// Photos on /gallery, newest first. Clicking a photo opens it full size.
//
//   src       Photo in public/images/gallery/ (JPEG, about 1600 px on the long side)
//   alt       What the photo shows, for people using screen readers
//   caption   Shown under the photo and in the full-size view
//   date      Optional, e.g. "Oct 2026"
//   featured  Optional: shown full width above the other photos
//   position  Optional focus point when the grid crops the photo, e.g. "center 60%"
//
// To add a photo: resize a copy to about 1600 px on the long side, make sure it carries
// no location data (on a Mac: Preview → Tools → Show Inspector → GPS → Remove Location
// Info), put it in public/images/gallery/ and add an entry below.
// ---------------------------------------------------------------------------

export const gallery = [
  {
    src: "images/gallery/ius-2026-lab-tour.jpg",
    alt: "A large group of lab members and visitors wearing symposium badges poses in a seminar room in front of a slide titled “UNC Labs”.",
    caption: "Lab-tour visitors at UNC–Chapel Hill during IEEE IUS 2026",
    date: "Oct 2026",
    featured: true,
  },
  {
    src: "images/gallery/lab-members.jpg",
    alt: "Four lab members stand in a room with tall windows looking out over campus; monitors on the left show wave data.",
    caption: "In the lab",
  },
  {
    src: "images/gallery/team-lunch.jpg",
    alt: "Four lab members smile at a table in a casual restaurant.",
    caption: "Team lunch",
  },
  {
    src: "images/gallery/team-lunch-selfie.jpg",
    alt: "A lab member takes a selfie with colleagues seated at a restaurant table behind.",
    caption: "Lunch selfie",
  },
  {
    src: "images/gallery/lab-dinner.jpg",
    alt: "Lab members gathered around a round table at a restaurant after dinner.",
    caption: "Lab dinner",
    position: "center 60%",
  },
];
