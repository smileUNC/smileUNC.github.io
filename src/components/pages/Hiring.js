import React from "react";
import HiringItem from "./HiringItem";

const Hiring = () => {
  const jobListings = [
    {
      title: "PHD student",
      about: "Team information",
      requirements: ["experience", "papers", "Strong problem-solving skills"],
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
