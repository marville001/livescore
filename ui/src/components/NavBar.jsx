import React from "react";

import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  linkStyle: {
    color: "#fafafa",
    textDecoration: "none",
  },
});

const NavBar = () => {
  const classes = useStyles();;
  return (
    <>
      <AppBar className="header" position="static" color={"primary"}>
        <Toolbar>
          <Typography variant="h5" className={classes.root} display="flex">
            <h5 className={classes.linkStyle} to="/">
              Live Match Day
            </h5>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;