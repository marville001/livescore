import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLiveScoresLoad } from "../redux/action";
import "./LiveMatch.css";

export default function LiveMatch({ data }) {
  
  const {livescores, loading} = useSelector((state) => state.scores)
  const dispatch = useDispatch()
  const results = livescores.map((score) => score.Stage);
  
  console.log(livescores[0]);
  useEffect(() => {
    dispatch(getLiveScoresLoad())
  }, [])

  if (loading) return <h6>Loading data....</h6>
  
  return (
    <div className="livematch__container">
      {livescores[0].length !== 0 && livescores[0]?.map((data) => (
        <>
         <div className="livematch__homeTeam">
        <span>
          <img src={data.TeamA_Logo} alt="logo" />
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
          <img src={data.TeamB_Logo} alt="logo" />
        </span>
          </div>
          </>
      ))}
    </div>
  );
}
