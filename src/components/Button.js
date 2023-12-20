import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btns--active"];
const SIZES = ["btn--small", "btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  link,
  extraClass = "",
  newTab = false, // Added newTab prop with default value as false
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  // The 'extraClass' prop allows for additional styling like 'active'
  const className = `btn  ${extraClass} ${checkButtonStyle} ${checkButtonSize} btn-mobile`;

  // Render an anchor tag if newTab is true
  const renderLink = () => {
    if (newTab) {
      return (
        <a
          href={link}
          className={className}
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
          <button className={className} onClick={onClick} type={type}>
            {children}
          </button>
        </Link>
      );
    }
  };

  return renderLink();
};
