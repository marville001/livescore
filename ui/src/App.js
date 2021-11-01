import React from "react";
import "./App.css";
import LiveMatch from "./components/LiveMatch";
import NavBar from "./components/NavBar";
import { Card } from '@mui/material';
import Box from '@mui/material/Box';

function App() {
  return (
    <Card>
      <Box border={1} borderColor="black" height={600} >
        <div>
          <NavBar />
          <LiveMatch />
          <LiveMatch />
          <LiveMatch />
          <LiveMatch />
        </div>
      </Box>
    </Card>

  );
}

export default App;
