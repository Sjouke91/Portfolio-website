import React from "react";
import "./Menu.scss";

export default function Menu() {
  return (
    <div className="menu-parent">
      <div className="link-container">
        {linkTags.map((l) => {
          return (
            <div className="link-item-container">
              <a className="link-item" href="#">
                {l}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const linkTags = [
  "SNEL LEVERBAAR",
  "OCCASIONS",
  "INRUILEN",
  "CYBERTRUCK",
  "ROADSTER",
  "SEMI",
  "ENERGY",
  "TESTRIT",
  "FLEET & BUSINESS",
  "VIND EEN TESLA",
  "EVENEMENTEN",
  "SUPPORT",
  "NEDERLAND",
];
