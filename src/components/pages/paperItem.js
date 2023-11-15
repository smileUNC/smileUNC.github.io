import React from "react";
import { InlineMath } from "react-katex";
import "../Content.css";

export default function PaperItem({ title, link, authors }) {
  const containsLatex = title.includes("\\");
  return (
    <li style={{ marginBottom: "10px" }}>
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {containsLatex ? (
            // Render the title with LaTeX formatting
            <span className="math-text">
              <InlineMath math={title} />
            </span>
          ) : (
            // Render the title as plain text
            title
          )}
        </a>
      </div>
      <div>{authors}</div>
    </li>
  );
}
