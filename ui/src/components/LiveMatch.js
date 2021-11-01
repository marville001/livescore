import React from "react";
import "./LiveMatch.css";

export default function LiveMatch(data) {
  return (
    <div className="livematch__con">
      <div className="livematch__homeTeam">
        <span>
          <img src={data.TeamA_logo} alt="logo" />
        </span>
        {data.TeamA}
      </div>
      <div className="livematch__livescores">
        <div>
          <span>{data.TeamA_Score}</span>:<span>{data.TeamB_Score}</span>
        </div>
        <div>{data.Time}</div>
      </div>
      <div className="livematch__awayTeam">
        {data.TeamB}
        <span>
          <img src={data.TeamB_logo} alt="logo" />
        </span>
      </div>
    </div>
  );
}
