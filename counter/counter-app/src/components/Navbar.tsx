import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { NavButton } from "../styles/pageStyles";

interface Tab {
  name: string;
  route: string;
}

const tabs: Tab[] = [
  { name: "About", route: "#about" },
  { name: "Counters", route: "#counters" },
  { name: "Login", route: "#login" },
  { name: "Login via Redux", route: "#loginviaredux" },
  { name: "Login via Formik", route: "#loginviaformik" },
  { name: "Get activity Saga", route: "#getactivity" },
  { name: "Login via MST", route: "#loginviamst" },
];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {tabs.map((tab, index) => (
          <NavButton
            key={index}
            variant="text"
            color="inherit"
            href={tab.route}
            sx={{
              backgroundColor:
                location.pathname === tab.route
                  ? "rgba(255, 255, 255, 0.2)"
                  : "inherit",
            }}
          >
            {tab.name}
          </NavButton>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
