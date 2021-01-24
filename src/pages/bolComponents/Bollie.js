import "./Bollie.scss";

import React, { useState } from "react";
import Grid from "@material-ui/core";
import Category from "./components/Category";
import { categories } from "./data/fetchedData";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

export default function Bollie() {
  const [pagination, set_pagination] = useState(0);
  const onChangeCategories = (type) => {
    switch (type) {
      case "forward":
        set_pagination(pagination - 80);
        break;
      case "back":
        set_pagination(pagination + 80);
        break;
    }
  };

  const disabledBack = pagination === 0 ? "disabled" : null;
  const disabledForward =
    pagination <= (Math.floor(categories.length / 8) - 1) * -80
      ? "disabled"
      : null;

  return (
    <div className="bollie-background">
      <div className="row" style={{ height: "8vh" }}></div>
      <div className="center-column">
        <div className="center-content">
          <h3>Categorie selector</h3>

          <div className="category-pick">
            <h5 className="title">
              <strong>Kies een categorie</strong>
            </h5>
            <button
              disabled={pagination === 0}
              className={`button-back btn-styling ${disabledBack}`}
              onClick={() => onChangeCategories("back")}
            >
              <ArrowBackIosIcon color="primary" />
            </button>
            <button
              disabled={
                pagination <= (Math.floor(categories.length / 8) - 1) * -80
              }
              className={`button-forward btn-styling ${disabledForward}`}
              onClick={() => onChangeCategories("forward")}
            >
              <ArrowForwardIosIcon color="primary" />
            </button>
            <div
              className="category-caroussel"
              style={{
                transform: `translateX(${pagination}vw)`,
                transition: "transform 1s",
              }}
            >
              {categories.map((c) => {
                return (
                  <Category
                    key={c.title}
                    title={c.title}
                    imageUrl={c.imageUrl}
                  ></Category>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
