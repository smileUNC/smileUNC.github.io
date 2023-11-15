import React from "react";
import { Link } from "react-router-dom";
import "./efwi.item.css";

function EfwiItem(props) {
  return (
    <>
      <li className="efwicards__item">
        <Link className="efwicards__item__link" to={props.path}>
          <figure
            className="efwicards__item__pic-wrap"
            data-category={props.label}
          >
            <img className="efwicards__item__img" alt="EFWI" src={props.src} />
          </figure>
          <div className="efwicards__item__info">
            <h5 className="efwicards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default EfwiItem;
