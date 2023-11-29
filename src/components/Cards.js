import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import "katex/dist/katex.min.css"; // import styles

function Cards() {
  return (
    <div className="cards">
      <div className="cards-title">Check out our projects!</div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/efwi.png`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> Elastic FWI with Deep Learning </strong>{" "}
                </p>
              }
              label="Elastic FWI"
              path="/projects/efwi"
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/openfwi.png`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> Open FWI with Deep Learning </strong>{" "}
                </p>
              }
              label="openFWI"
              path="/projects/openfwi"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
