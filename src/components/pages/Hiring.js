import React from "react";
import HiringItem from "./HiringItem";

const Hiring = () => {
  const jobListings = [
    {
      title: "Postdoctoral Researcher",
      about:
        "We are excited to announce an open position for a creative, resourceful postdoctoral researcher at SMILE lab at the School of Data Science and Society. The ideal candidate should possess strong computational skills with a focus on computational imaging and deep learning. We are looking for a highly motivated individual eager to contribute to our multidisciplinary team. The successful candidate will undertake innovative machine learning research, addressing a range of computational imaging challenges across geoscience, medicine and materials science among other fields. Please click Apply Now for more details.",
      requirements: [
        "A Ph.D. in Computational Sciences, Computer Sciences, Geophysics, Applied Mathematics, Electrical Engineering, or a related field.",
        "Experience with machine learning frameworks such as PyTorch, TensorFlow, Keras, etc.",
        "Proficiency in programming, especially in Python.",
        "Excellent communication skills, including writing and oral presentation.",
        "Strong publication record in high-impact journals and top-tier machine learning and AI conferences.",
      ],
      link: "https://unc.peopleadmin.com/postings/273218",
    },
    // ... other job listings
  ];

  return (
    <div className="hiring-container">
      {jobListings.map((job, index) => (
        <HiringItem
          key={index}
          title={job.title}
          about={job.about}
          requirements={job.requirements}
          link={job.link}
        />
      ))}
    </div>
  );
};

export default Hiring;
