import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavButton } from "../routes/PageStyles";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <NavButton
          color="inherit"
          href="#about"
          sx={{
            backgroundColor:
              location.pathname === "/about"
                ? "rgba(255, 255, 255, 0.2)"
                : "inherit",
          }}
        >
          About
        </NavButton>
        <NavButton
          color="inherit"
          href="#counters"
          sx={{
            backgroundColor:
              location.pathname === "/counters"
                ? "rgba(255, 255, 255, 0.2)"
                : "inherit",
          }}
        >
          Counters
        </NavButton>
        <NavButton
          color="inherit"
          href="#login"
          sx={{
            backgroundColor:
              location.pathname === "/login"
                ? "rgba(255, 255, 255, 0.2)"
                : "inherit",
          }}
        >
          Login
        </NavButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
