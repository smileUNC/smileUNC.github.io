import React from "react";
import "./Footer.css";

import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <div className="footer-subscription-text">
          If you are interested about our work and want to collaborate with us,
          please contact us as below.
          <br />
        </div>
        <div className="btns">
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            link="/contact-us"
          >
            Contact Us
          </Button>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">Home</Link>
            <Link to="/team">Meet our team</Link>
            <Link to="/updates">Updates</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>News</h2>
            <Link to="/blog">Blog</Link>
            <Link to="/publications">Publications</Link>
            <Link to="/hiring">Join our team</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              SMILE
              <img
                src={`${process.env.PUBLIC_URL}/images/logo1.png`}
                alt="Logo"
                className="image-logo"
              ></img>
            </Link>
          </div>
          <small class="website-rights">SMILE © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link email"
              to="/"
              target="_blank"
              aria-label="Email"
            >
              <i class="fa fa-envelope"></i>
            </Link>
            <Link
              class="social-icon-link github"
              to="https://github.com/lanl/OpenFWI"
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="https://www.linkedin.com/in/youzuo-lin-3a388616/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
