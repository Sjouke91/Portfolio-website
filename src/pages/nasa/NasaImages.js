import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { Grid, Typography, Button } from "@material-ui/core";
import Navigation from "../../component/Navbar";
import "./NasaImages.scss";
import { ReactComponent as ReactLogo } from "./PickADate.svg";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function NasaImages() {
  const [data, set_data] = useState([]);

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const formattedDate = onDateSelect(startDate);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?date=${formattedDate}&api_key=ha1oM8Hia3oRGide0fgEiquDITOrqTqoTZ0rBwCd`
        );

        set_data({ title: response.data.title, img: response.data.url });
      } catch (e) {
        console.log("this is error", e);
      }
    };
    fetchData();
  }, [startDate]);

  const onDateSelect = (date) => {
    const dateFormated = moment(date).format("YYYY/MM/DD").replaceAll("/", "-");
    return dateFormated;
  };

  return (
    <div className="background-nasa">
      <Grid className="overlay" container>
        <Grid item xs={12}>
          <div
            className="home-content"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                zIndex: 5,
                border: "3px solid white",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                padding: "20px",
                top: "20%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
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
            <div style={{ position: "relative" }}>
              <div>
                <img className="nasa-picture" src={data.img}></img>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              width: "20vw",
              position: "absolute",
              color: "white",
              bottom: "30px",
              left: "165px",
            }}
          >
            <ReactLogo></ReactLogo>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              position: "relative",
              bottom: "40px",
              left: "20px",
            }}
          >
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{
                flex: "0 1 auto",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            <Typography
              variant="body1"
              style={{
                color: "white",
                marginLeft: "auto",
              }}
            >
              {data.title}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
