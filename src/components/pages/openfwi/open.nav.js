import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../efwi/efwi.nav.css";
import "katex/dist/katex.min.css"; // import styles

export default function OpenFWINav() {
  const location = useLocation();
  React.useEffect(() => {
    // Scrolls to the top every time the location changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return (
    <>
      <nav className="vertical-navbar">
        <div className="vertical-navbar-container">
          <ul>
            <li className="vertical-nav-links">
              <Link to="/projects/openfwi" className="vertical-nav-links">
                OpenFWI
              </Link>
            </li>
            <li className="vertical-nav-links">
              <Link
                to="/projects/openfwi/datasets"
                className="vertical-nav-links"
              >
                Datasets
              </Link>
            </li>
            <li className="vertical-nav-links">
              <Link
                to="/projects/openfwi/benchmarks"
                className="vertical-nav-links"
              >
                Benchmarks
              </Link>
            </li>

            <li className="vertical-nav-links">
              <Link
                to="/projects/openfwi/resources"
                className="vertical-nav-links"
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
