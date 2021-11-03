import React from "react";

import { AppBar, Typography, Toolbar } from "@mui/material";


const NavBar = () => {
  return (
    <>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <Typography variant="h5" display="flex" justifyContent="center">
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