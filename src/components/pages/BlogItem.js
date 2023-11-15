import React from "react";
import { Link } from "react-router-dom";
import "./BlogItem.css"; // Make sure to create a Blog.css file for your styles

export default function BlogItem({ image, title, author, date, summary }) {
  const titleSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return (
    <Link
      to={`/blogs/${titleSlug}`}
      className="blog-post"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="blog-post-image">
        <img src={image} alt={title} />
      </div>
      <div className="blog-post-content">
        <h3 className="blog-post-title">{title}</h3>
        <div className="blog-post-meta">
          by: <span className="blog-post-author">{author}</span>,{" "}
          <span className="blog-post-date">{date}</span>
        </div>
        <p className="blog-post-summary">{summary}</p>
      </div>
    </Link>
  );
}
