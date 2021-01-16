import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import "./About.scss";
import profilePicture from "./Schets.jpg";
import Navigation from "../../component/Navbar";

export default function About() {
  return (
    <div className="background-about" style={{ position: "relative" }}>
      <div style={{ position: "absolute", zIndex: 2 }}>
        <Navigation color="dark"></Navigation>
      </div>
      <div style={{ display: "flex" }}>
        <img
          src="https://freepngimg.com/thumb/graphic_design/6-2-graphic-design-transparent.png"
          style={{
            position: "absolute",
            bottom: "-30vh",
            width: "100vw",
          }}
        ></img>
      </div>
      <Grid
        container
        style={{ display: "flex", alignItems: "center", marginTop: "10%" }}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
          <div>
            <img
              src={profilePicture}
              style={{ width: "30vw", borderRadius: "1000px" }}
            ></img>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <div style={{ paddingLeft: "80px", textAlign: "left" }}>
            <Typography
              variant="h4"
              style={{ fontWeight: 500, marginBottom: "20px" }}
            >
              About me
            </Typography>

            <Typography variant="p" style={{ fontWeight: 500 }}>
              I'm a junior full-stack developer and I have set my mind on
              further develop my skills. In 2020 I've decided it was time for me
              to switch gears and give my career a new direction. With a
              background in product development and business marketing I have a
              broad perspective on development processes which comes in handy as
              a web developer. Codaisseur code academy has given me a jump start
              in achieving my goal to become a developer. In a 11 week program I
              developed a fundamental web development skillset that has enabled
              me to make advanced react web and native applications.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container></Grid>
    </div>
  );
}
