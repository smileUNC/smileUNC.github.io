import React from "react";
import "./Teamcard.css";
import TeamItem from "./Team_item";
import Footer from "../Footer";

function Team() {
  return (
    <div className="teamcards">
      <h1>Team members</h1>
      <div className="teamcards__container">
        <div className="teamcards__wrapper">
          <ul className="teamcards__items">
            <TeamItem
              src="images/team/ylin.jpg"
              text={
                <p style={{ fontFamily: "Arial, sans-serif" }}>
                  <strong> Youzuo Lin </strong>
                  <br />
                  {"Los Alamos National Lab"}
                </p>
              }
              label="Team leader"
              path="/"
            />
            <TeamItem
              src="images/team/yinpeng.jpeg"
              text={
                <p>
                  <strong> Yinpeng Chen </strong>
                  <br />
                  <>Microsoft Research</>
                </p>
              }
              label="Team leader"
              path="/"
            />
            <TeamItem
              src="images/team/shihang.jpg"
              text={
                <p>
                  <strong> Shihang Feng </strong>
                  <br />
                  <>Los Alamos National Lab</>
                </p>
              }
              label="PostDoc"
              path="/"
            />
            <TeamItem
              src="images/team/hanchen.jpg"
              text={
                <p>
                  <strong> Hanchen Wang </strong>
                  <br />
                  <>Los Alamos National Lab</>
                </p>
              }
              label="PostDoc"
              path="/"
            />
            <TeamItem
              src="images/team/yinan.jpg"
              text={
                <p>
                  <strong> Yinan Feng </strong>
                  <br />
                  <>Los Alamos National Lab</>
                </p>
              }
              label="PHD"
              path="/"
            />
            <TeamItem
              src="images/team/peng.jpg"
              text={
                <p>
                  <strong> Peng Jin </strong>
                  <br />
                  <>Los Alamos National Lab</>
                </p>
              }
              label="PHD"
              path="/"
            />
            <TeamItem
              src="images/team/xitong.jpg"
              text={
                <p style={{ fontFamily: "Arial, sans-serif" }}>
                  <strong> Xitong Zhang </strong>
                  <br />
                  {"Los Alamos National Lab"}
                </p>
              }
              label="PHD"
              path="/"
            />
            <TeamItem
              src="images/team/cyd.jpg"
              text={
                <p style={{ fontFamily: "Arial, sans-serif" }}>
                  <strong> Chengyuan Deng </strong>
                  <br />
                  {"Los Alamos National Lab"}
                </p>
              }
              label="PHD"
              path="/"
            />

            <TeamItem
              src="images/team/qili.jpg"
              text={
                <p style={{ fontFamily: "Arial, sans-serif" }}>
                  <strong> Qili Zeng </strong>
                  <br />
                  {"Los Alamos National Lab"}
                </p>
              }
              label="PHD"
              path="/"
            />

            <TeamItem
              src="images/team/yang.jpg"
              text={
                <p style={{ fontFamily: "Arial, sans-serif" }}>
                  <strong>Yang Chen </strong>
                  <br />
                  {"Los Alamos National Lab"}
                </p>
              }
              label="Student Intern"
              path="/"
            />
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Team;
