import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import "./Tesla.scss";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MainPage from "./pages/MainPage";

export default function Tesla() {
  const [menuOpen, set_menuOpen] = useState(false);

  const menuClass = menuOpen ? "slide-in-active" : "slide-in-inactive";

  return (
    <div className="tesla-parent">
      <div className="navbar-div">
        <Navbar></Navbar>
      </div>
      <IconButton
        onClick={() => set_menuOpen(!menuOpen)}
        style={{ position: "absolute", top: 5, right: 0, zIndex: 200 }}
      >
        {!menuOpen ? <MenuIcon /> : <CloseIcon />}
      </IconButton>
      <div className={`slide-in-menu ${menuClass}`}>
        <Menu></Menu>
      </div>
      <MainPage></MainPage>
      <div
        className="down-arrow"
        style={{ position: "absolute", bottom: 20, width: "100vw" }}
      >
        <IconButton size="small">
          <KeyboardArrowDownIcon fontSize="large" style={{ color: "white" }} />
        </IconButton>
      </div>
    </div>
  );
}
