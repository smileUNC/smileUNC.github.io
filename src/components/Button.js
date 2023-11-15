import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
  newTab = false, // Added newTab prop with default value as false
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // Render an anchor tag if newTab is true
  const renderLink = () => {
    if (newTab) {
      return (
        <a
          href={link}
          className={`btn ${checkButtonStyle} ${checkButtonSize} btn-mobile`}
          target="_blank" // Opens in a new tab/window
          rel="noopener noreferrer" // For security reasons
          onClick={onClick}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to={link} className="btn-mobile">
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      );
    }
  };

  return renderLink();
};
