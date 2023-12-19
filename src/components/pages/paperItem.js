import React from "react";
import { InlineMath } from "react-katex";
import "../Content.css";
import "./publications.css";

export default function PaperItem({ number, title, link, authors, info }) {
  const containsLatex = title.includes("\\");

  return (
    <li className="publication-item" style={{ marginBottom: "10px" }}>
      <span className="publication-number">{number}. </span>
      <span className="publication-authors">{authors}</span>
      {", "}

      <span className="publication-title">{title}</span>

      {", "}
      <span className="publication-info">{info}</span>

      <span className="publication-links">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            (download)
          </a>
        )}
      </span>
    </li>
  );
}
