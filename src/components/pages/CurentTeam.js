import React from "react";
import "./Teamcard.css";
import TeamItem from "./Team_item";

export default function CurrentTeam() {
  return (
    <div className="teamcards">
      <div className="team_title">Current Members</div>

      <div className="teamcards__container">
        <div className="teamcards__wrapper">
          <ul className="teamcards__items">
            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/ylin.jpg`}
              text={
                <p style={{ fontFamily: "Arial, sans-serif" }}>
                  <strong> Youzuo Lin </strong>
                  <br />
                  {"Los Alamos National Lab"}
                </p>
              }
              label="Team leader"
              path="https://www.linkedin.com/in/youzuo-lin-3a388616/"
            />
            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/yinpeng.jpeg`}
              text={
                <p>
                  <strong> Yinpeng Chen </strong>
                  <br />
                  <>Microsoft</>
                </p>
              }
              label="Team leader"
              path="/"
            />

            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/hanchen.jpg`}
              text={
                <p>
                  <strong> Hanchen Wang </strong>
                  <br />
                  <>Los Alamos National Lab</>
                </p>
              }
              label="Research Associate"
              path="https://www.linkedin.com/in/wanghanchen/"
            />
            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/yinan.jpg`}
              text={
                <p>
                  <strong> Yinan Feng </strong>
                  <br />
                  <>Los Alamos National Lab</>
                </p>
              }
              label="Research Technologist"
              path="https://www.linkedin.com/in/yinan-feng-a3a5091b3/"
            />
            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/peng.jpg`}
              text={
                <p>
                  <strong> Peng Jin </strong>
                  <br />
                  <>The Pennsylvania State University</>
                </p>
              }
              label="Graduate Research intern"
              path="https://www.linkedin.com/in/peng-jin-763606a9/"
            />

            <TeamItem
              src={`${process.env.PUBLIC_URL}/images/team/yang.jpg`}
              text={
                <p style={{ fontFamily: "Arial, sans-serif" }}>
                  <strong>Yang Chen </strong>
                  <br />
                  {"Northeastern University"}
                </p>
              }
              label="Graduate Research intern"
              path="https://www.linkedin.com/in/yang-chen-973286130/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
