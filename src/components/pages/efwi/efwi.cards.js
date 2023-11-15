import React from "react";
import EfwiItem from "./efwi_item";
import "./efwi.item.css";

export default function EfwiCards() {
  return (
    <div className="efwicards">
      <div className="efwicards__container">
        <ul className="efwicards__items">
          <EfwiItem
            text={
              <p>
                <strong> EFWI </strong>
              </p>
            }
            label="Home"
            path="/projects/efwi/"
          />
          <EfwiItem
            text={
              <p>
                <strong> Datasets </strong>
              </p>
            }
            label="Datasets"
            path="/projects/efwi/datasets"
          />
          <EfwiItem
            text={
              <p>
                <strong> Benchmarks </strong>
              </p>
            }
            label="Benchmarks"
            path="/projects/efwi/benchmarks"
          />
          <EfwiItem
            text={
              <p>
                <strong> Code </strong>
              </p>
            }
            label="Code"
            path="/projects/efwi/code"
          />
        </ul>
      </div>
    </div>
  );
}
