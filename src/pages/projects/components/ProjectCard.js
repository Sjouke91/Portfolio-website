import React from "react";
import "./ProjectCard.scss";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";

const useStyles = makeStyles({
  root: {
    width: 350,
    position: "relative",
    height: "50vh",
    backgroundColor: "rgba(255, 255, 255, 0.199)",
    color: "white",
    border: "2px solid white",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: 14,
    color: "lightGrey",
  },
  pos: {
    marginBottom: 12,
    color: "grey",
  },
  button: {
    color: "white",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 10,
    right: 5,
  },
});

export default function ProjectCard({ title, date, content, icon, company }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {company}
        </Typography>
        <Typography variant="h5" component="h2" style={{ marginBottom: 10 }}>
          {title}
        </Typography>

        <Typography variant="body2" component="p">
          {content}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          {date}
        </Typography>
      </CardContent>
      <CardActions className={classes.button}>
        <Button size="small">
          <ArrowForwardIosIcon />
        </Button>
      </CardActions>
    </div>
  );
}
