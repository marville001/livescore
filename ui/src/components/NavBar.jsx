import React from "react";

import { AppBar, Typography, Toolbar } from "@mui/material";


const NavBar = () => {
  return (
    <>
      <AppBar position="static" color={"error"}>
        <Toolbar>
          <Typography variant="h5" display="flex" justifyContent="center" alignItems="center">
            <h5 >
              Live Match Day
            </h5>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;