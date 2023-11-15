import React from "react";
import { Link } from "react-router-dom";
import "./efwi.nav.css";
import { InlineMath } from "react-katex";

export default function EFWINav() {
  return (
    <>
      <nav className="vertical-navbar">
        <div className="vertical-navbar-container">
          {/* <h1 style={{ color: "black" }}>
            <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath>
          </h1> */}

          <ul>
            <li className="vertical-nav-links">
              <Link to="/projects/efwi" className="vertical-nav-links">
                <InlineMath>{"\\mathbb{E}^{FWI}"}</InlineMath> Home
              </Link>
            </li>
            <li className="vertical-nav-links">
              <Link to="/projects/efwi/datasets" className="vertical-nav-links">
                Datasets
              </Link>
            </li>
            <li className="vertical-nav-links">
              <Link
                to="/projects/efwi/benchmarks"
                className="vertical-nav-links"
              >
                Benchmarks
              </Link>
            </li>

            <li className="vertical-nav-links">
              <Link to="/projects/efwi/code" className="vertical-nav-links">
                Code
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
