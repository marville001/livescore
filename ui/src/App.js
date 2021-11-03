import React from "react";
import "./App.css";
import LiveMatch from "./components/LiveMatch";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
        <div>
          <NavBar />
          <LiveMatch />
        </div>
    </Container>
  );
}

export default App;
