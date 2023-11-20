import React from "react";
import "../../Cards.css";
import ResourcesItem from "../resource_item";

export default function OpenFWIResources() {
  return (
    <div className="cards">
      <h1>OpenFWI Resources</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ResourcesItem
              src={`${process.env.PUBLIC_URL}/images/openfwi.png`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> OpenFWI source code </strong>{" "}
                </p>
              }
              label="Github"
              path="https://github.com/lanl/OpenFWI"
            />
            <ResourcesItem
              src={`${process.env.PUBLIC_URL}/images/openfwi.png`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> OpenFWI pretrained models</strong>{" "}
                </p>
              }
              label="Pretrained Models"
              path="https://drive.google.com/drive/folders/1IzRHldsiiHIqTT9CwTXHBtONuIJiNbyJ"
            />

            <ResourcesItem
              src={`${process.env.PUBLIC_URL}/images/openfwi.png`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> OpenFWI tutorial</strong>{" "}
                </p>
              }
              label="Tutorial"
              path="https://openfwi-lanl.github.io/tutorial/#/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
