import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
// import "./Navbar.css";
import "./nav2.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const scrollToTop = () => {
    // Scrolls to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    scrollToTop();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            SMILE
            <img
              src={`${process.env.PUBLIC_URL}/images/logo1.png`}
              alt="Logo"
              className="image-logo"
            ></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/publications"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Publications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-links" onClick={closeMobileMenu}>
                Team
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/updates"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Updates
              </Link>
            </li>

            <li
              className="nav-item-mobile"
              style={{ display: button ? "none" : "block" }}
            >
              <Link
                to="/hiring"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                JOIN US
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
              link="/hiring"
            >
              JOIN US
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
