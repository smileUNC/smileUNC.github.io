import React from "react";
import "./Teamcard.css";
import TeamItem from "./Team_item";

export default function Alumni() {
  return (
    <div>
      <div className="team_title2">Alumni</div>

      <div className="teamcards__container">
        <div className="teamcards__wrapper">
          <ul className="teamcards__items">
            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/shihang.jpg`}
              text={
                <p>
                  <strong> Shihang Feng </strong>
                  <br />
                  <>Los Alamos National Lab</>
                </p>
              }
              label="Research Associate"
              path="https://www.linkedin.com/in/shihang-feng-46681780/"
            />

            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/xitong.jpg`}
              text={
                <p style={{}}>
                  <strong> Xitong Zhang </strong>
                  <br />
                  {"Michigan State University"}
                </p>
              }
              label="Graduate Research intern"
              path="https://www.linkedin.com/in/xitozhang/"
            />
            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/cyd.jpg`}
              text={
                <p style={{}}>
                  <strong> Chengyuan Deng </strong>
                  <br />
                  {"Los Alamos National Lab"}
                </p>
              }
              label="PHD"
              path="/"
            />
            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/qili.jpg`}
              text={
                <p style={{}}>
                  <strong> Qili Zeng </strong>
                  <br />
                  {"Qualcomm"}
                </p>
              }
              label="Computer Vision System Engineer"
              path="https://www.linkedin.com/in/qili-zeng-63219a140/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
