import "./Category.scss";
import React from "react";

export default function Category({ title, imageUrl }) {
  return (
    <div className="category-card">
      <img src={imageUrl}></img>
      <a href="#">{title}</a>
    </div>
  );
}
