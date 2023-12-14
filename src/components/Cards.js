import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import "katex/dist/katex.min.css"; // import styles

function Cards() {
  return (
    <div className="cards">
      <div className="cards-title">Projects</div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__item">
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
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/projects/edge.jpg`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> Edge_InversionNet </strong>{" "}
                </p>
              }
              label="Edge_InversionNet"
              path="/projects/edge_inversionnet"
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/projects/qugeo.jpg`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> QuGeo </strong>{" "}
                </p>
              }
              label="QuGeo"
              path="/projects/qugeo"
            />

            <CardItem
              src={`${process.env.PUBLIC_URL}/images/inversion/inver.png`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> InversionNet</strong>{" "}
                </p>
              }
              label="InversionNet"
              path="/projects/inversion_net"
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/gan/gan.png`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> VelocityGAN </strong>{" "}
                </p>
              }
              label="VelocityGAN"
              path="/projects/velocity_gan"
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/upfwi/upfwi0.jpg`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong>
                    {" "}
                    Unsupervised Learning of Full-Waveform Inversion{" "}
                  </strong>{" "}
                </p>
              }
              label="UPFWI"
              path="/projects/upfwi"
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/usct/usct.jpg`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> Tasked USCT </strong>{" "}
                </p>
              }
              label="Tasked USCT"
              path="/projects/tasked_usct"
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/invlint/invlint0.jpg`}
              text={
                <p style={{ fontFamily: "'Dancing Script', cursive" }}>
                  <strong> InvLint </strong>{" "}
                </p>
              }
              label="CVPR"
              path="/projects/invlint"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
