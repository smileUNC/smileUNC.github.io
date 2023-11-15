import React from "react";
import { Link } from "react-router-dom";

function TeamItem(props) {
  return (
    <>
      <li className="teamcards__item">
        <Link className="teamcards__item__link" to={props.path}>
          <figure
            className="teamcards__item__pic-wrap"
            data-category={props.label}
          >
            <img className="teamcards__item__img" alt="Team" src={props.src} />
          </figure>
          <div className="teamcards__item__info">
            <h5 className="teamcards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default TeamItem;
