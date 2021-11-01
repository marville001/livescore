import React from "react";
import "./App.css";
import LiveMatch from "./components/LiveMatch";
import NavBar from "./components/NavBar";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";

function App() {
  const dummyData = {
    TeamA: "NK Rudar Labin",
    Stage: "8014",
    TeamA_Score: "1",
    TeamB_Logo: "https://lsm-static-prod.livescore.com/medium/enet/6038.png",
    Country: "Croatia",
    TeamB: "NK Istra 1961",
    TeamA_Logo: "https://lsm-static-prod.livescore.com/medium/enet/186656.png",
    _id: "553431",
    TeamB_Score: "1",
    Time: "45'",
    Stage_Name: "Cup",
  };
  return (
    <Card>
      <Box border={1} borderColor="black" height={600}>
        <div>
          <NavBar />
          <LiveMatch data={dummyData} />
          <LiveMatch data={dummyData} />
          <LiveMatch data={dummyData} />
          <LiveMatch data={dummyData} />
        </div>
      </Box>
    </Card>
  );
}

export default App;
