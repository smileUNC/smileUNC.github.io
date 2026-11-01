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
    src: "images/gallery/group-photo-reinhard-drews.jpg",
    alt: "The research group and Prof. Reinhard Drews stand in a row in front of the UNC School of Data and Information Sciences sign.",
    caption: "Research group photo with Prof. Reinhard Drews from the University of Tübingen",
    date: "Oct 2026",
  },
  {
    src: "images/gallery/lab-members.jpg",
    alt: "Four lab members stand in a room with tall windows looking out over campus; monitors on the left show wave data.",
    caption: "In the lab",
  },
];
