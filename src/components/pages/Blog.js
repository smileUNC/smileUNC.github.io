import React from "react";
import BlogItem from "./BlogItem";

const blogPosts = [
  {
    title: "OpenFWI",
    author: "SMILE Team",
    date: "21 Oct, 2023",
    summary: `We are thrilled to present OpenFWI, FWI is a collection of large-scale, 
    multi-structural benchmark datasets for machine learning driven seismic FWI. 
    We release twelve datasets synthesized from different priors, including one 3D dataset.
     We also provide baseline experimental results with four deep learning methods: 
     InversionNet, VelocityGAN, UPFWI and InversionNet3D. 
     OpenFWI is the first open-source platform to facilitate data-driven FWI research. 
     It will be actively developed and the datasets are expected to evolve.`,
    image: "images/openfwi.png",
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-header">Blog</div>
      <div className="blog-description">
        Welcome to our AI Blog! Here, you will find commentaries, news, and
        updates on our current research projects and progress in the field of AI
        research.
      </div>
      {blogPosts.map((post, index) => (
        <BlogItem key={index} {...post} />
      ))}
    </div>
  );
}
