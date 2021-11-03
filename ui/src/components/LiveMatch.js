import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLiveScoresLoad } from "../redux/action";
import "./LiveMatch.css";

export default function LiveMatch({ data }) {

  const { livescores, loading } = useSelector((state) => state.scores)
  const dispatch = useDispatch()
  const results = livescores.map((score) => score.Stage);

  console.log(livescores[0]);
  useEffect(() => {
    if (livescores.length === 0) dispatch(getLiveScoresLoad())
  }, [])

  if (loading) return <h6>Loading data....</h6>

  return (
    <div className="livematch__container">
      {livescores[0]?.map((data) => (
        <>
          <div className="matches">
            <div className="livematch__homeTeam" >
              <span>
                <img src={data.TeamA_Logo} alt="logo" />
              </span>
              <span className="team-name">{data.TeamA}</span>
            </div>
            <div className="livematch__livescores">
              <div className="score">
                <span>{data.TeamA_Score}</span>:<span>{data.TeamB_Score}</span>
              </div>
              <div className="time">{data.Time}</div>
            </div>
            <div className="livematch__awayTeam">
              <span className="team-name">{data.TeamB}</span>
              <span>
                <img src={data.TeamB_Logo} alt="logo" />
              </span>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
