import React from "react";
import "./Teamcard.css";
import CurrentTeam from "./CurentTeam";
import Alumni from "./Alumni";
import Footer from "../Footer";

export default function Team() {
  return (
    <div>
      <div className="teamcards">
        <h1>Team Members</h1>
        <CurrentTeam />
        <Alumni />
      </div>
      <Footer />
    </div>
  );
}
