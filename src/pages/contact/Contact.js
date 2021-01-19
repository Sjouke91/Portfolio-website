import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";
import "./Contact.scss";
import ContactForm from "./ContactForm";
import { contactData } from "./contactData";
import ContactInfo from "./ContactInfo";
import Socials from "./Socials";
import Navigation from "../../component/Navbar";

export default function Contact() {
  return (
    <div
      className="contact-parent"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="overlay"></div>

      <Grid
        container
        style={{
          height: "80vh",

          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          zIndex: 1,
        }}
      >
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          {contactData.map((d) => {
            return (
              <ContactInfo
                key={d.title}
                title={d.title}
                content={d.content}
                button={d.button}
              ></ContactInfo>
            );
          })}
          <Socials></Socials>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ContactForm></ContactForm>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}
