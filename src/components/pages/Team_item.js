import React from "react";
import "./Teamcard.css";
function TeamItem(props) {
  return (
    <>
      <li className="teamcards__item">
        <a
          className="teamcards__item__link"
          href={props.path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure
            className="teamcards__item__pic-wrap"
            // data-category={props.label}
          >
            <img className="teamcards__item__img" alt="Team" src={props.src} />
          </figure>
          <div className="teamcards__item__info">
            <h5 className="teamcards__item__text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default TeamItem;
