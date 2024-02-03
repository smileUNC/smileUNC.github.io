import React from "react";
import "./HiringItem.css";

const HiringItem = ({ title, about, requirements, link }) => {
  return (
    <div className="hiring-item-card">
      <h3 className="job-title">{title}</h3>
      <p className="job-about">{about}</p>
      <h3>Basic Requirements</h3>
      <ul className="job-requirements">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="apply-link"
      >
        Apply Now
      </a>
    </div>
  );
};

export default HiringItem;
