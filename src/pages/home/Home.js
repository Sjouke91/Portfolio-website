import React from "react";
import "./Home.scss";
import { Grid, Typography, Button } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Navigation from "../../component/Navbar";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="background-image">
      <div style={{ position: "absolute", zIndex: 2 }}>
        <Navigation color="white"></Navigation>
      </div>
      <div className="overlay">
        <Grid container>
          <Grid item xs={12}>
            <div className="home-content">
              <Typography
                variant="h2"
                style={{ color: "white", fontWeight: 200 }}
              >
                Welcome to my portfolio
              </Typography>

              <Button
                variant="outline"
                color="secondary"
                component={RouterLink}
                to="/about"
                style={{ margin: "40px", color: "white", fontWeight: 800 }}
              >
                E n t e r <ArrowForwardIosIcon />
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </div>
    </div>
  );
}
