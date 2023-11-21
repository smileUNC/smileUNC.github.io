import React from "react";
import HiringItem from "./HiringItem";

const Hiring = () => {
  const jobListings = [
    {
      title: "Coming soon",
      about: "Coming soon",
      requirements: [],
      link: "/hiring",
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
