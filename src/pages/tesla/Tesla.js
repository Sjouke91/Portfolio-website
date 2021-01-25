import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import "./Tesla.scss";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

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
      <div className="main-content">
        <h1>Model Y</h1>
        <div className="car-properties">
          <div className="speed-prop prop">
            <h3>2.6 s</h3>
            <p>0 naar 100 km/u</p>
          </div>
          <div className="cargo-prop prop">
            <h3>804 l</h3>
            <p>Meeste bagageruimte in zijn klasse</p>
          </div>
          <div className="range-prop prop" style={{ border: "none" }}>
            <h3>654 km</h3>
            <p>Bereik (WLTP)</p>
          </div>
          <div className="button-prop prop" style={{ border: "none" }}>
            <button>BESTEL NU</button>
          </div>
        </div>
      </div>
    </div>
  );
}
