import React from "react";
import { Typography, Button } from "@material-ui/core";

export default function ContactInfo({ title, content, button }) {
  let availableData = "Hello, Hi, Wassup";
  let desiredData = content.split(",");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "start", marginBottom: "10px" }}
      >
        {title}
      </Typography>
      <Typography variant="body1" style={{ textAlign: "start" }}></Typography>
      {desiredData.map((d) => (
        <Typography
          key={d.title}
          variant="body1"
          style={{ textAlign: "start" }}
        >
          {d}
        </Typography>
      ))}

      <Button
        variant="outlined"
        color="secondary"
        style={{ marginTop: "20px", width: "250px" }}
      >
        {button}
      </Button>
    </div>
  );
}
