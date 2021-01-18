import React from "react";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./Socials.scss";

export default function Socials() {
  return (
    <div className="social-test" style={{ display: "flex" }}>
      <IconButton
        className="social-button"
        style={{ backgroundColor: "#DDD", margin: "5px" }}
      >
        <FacebookIcon
          fontSize="large"
          style={{ color: "white" }}
        ></FacebookIcon>
      </IconButton>
      <IconButton
        className="social-button"
        style={{ backgroundColor: "#DDD", margin: "5px" }}
      >
        <YouTubeIcon fontSize="large" style={{ color: "white" }}></YouTubeIcon>
      </IconButton>
      <IconButton
        className="social-button"
        style={{ backgroundColor: "#DDD", margin: "5px" }}
      >
        <InstagramIcon
          fontSize="large"
          style={{ color: "white" }}
        ></InstagramIcon>
      </IconButton>
      <IconButton
        className="social-button"
        style={{ backgroundColor: "#DDD", margin: "5px" }}
      >
        <TwitterIcon fontSize="large" style={{ color: "white" }}></TwitterIcon>
      </IconButton>
      <IconButton style={{ backgroundColor: "#DDD", margin: "5px" }}>
        <LinkedInIcon
          fontSize="large"
          style={{ color: "white" }}
        ></LinkedInIcon>
      </IconButton>
    </div>
  );
}
