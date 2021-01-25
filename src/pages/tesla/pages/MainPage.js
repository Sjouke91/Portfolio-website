import React from "react";
import "./MainPage.scss";
import SpeedIcon from "@material-ui/icons/Speed";

export default function MainPage() {
  return (
    <div className="main-content" style={{ marginTop: "40px" }}>
      <h1 className="car-title">Model Y</h1>
      <div className="car-properties">
        <div className="speed-prop prop">
          <h3>
            <SpeedIcon style={{ fontSize: "30px", marginRight: "5px" }} />
            2.6 s
          </h3>
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
  );
}
