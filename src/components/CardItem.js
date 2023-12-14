import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the window
      left: 0,
      behavior: "smooth", // Optional: Defines smooth scrolling
    });
  };
  return (
    <>
      <li className="cards__item" onClick={scrollToTop}>
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img className="cards__item__img" alt="Project" src={props.src} />
          </figure>
          <div className="cards__item__info">
            <div className="cards__item__text">{props.text}</div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
