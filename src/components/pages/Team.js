import React from "react";
import "./Teamcard.css";
import CurrentTeam from "./CurentTeam";
import Alumni from "./Alumni";

export default function Team() {
  return (
    <div className="teamcards">
      <div className="team_title1">Team Members</div>
      <CurrentTeam />
      <Alumni />
    </div>
  );
}
