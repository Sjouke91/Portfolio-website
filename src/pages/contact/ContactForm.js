import React, { useState } from "react";
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";

export default function ContactForm() {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    content: "",
    requireNewsletter: false,
  };
  const [message, set_message] = useState(initialState);

  const submitMessage = () => {
    console.log(message);
    set_message(initialState);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        className="text-input"
        style={{ textAlign: "start", marginLeft: "10px", marginBottom: "20px" }}
      >
        Stuur een berichtje!
      </Typography>
      <TextField
        className="text-input"
        id="filled-name"
        label="Naam"
        variant="filled"
        value={message.name}
        onChange={(e) => set_message({ ...message, name: e.target.value })}
        style={{ margin: "10px" }}
      ></TextField>
      <TextField
        className="text-input"
        id="filled-phone"
        label="Telefoon"
        variant="filled"
        value={message.phone}
        onChange={(e) => set_message({ ...message, phone: e.target.value })}
        style={{ margin: "10px" }}
      ></TextField>
      <TextField
        className="text-input"
        id="filled-phone"
        label="E-mail"
        variant="filled"
        value={message.email}
        onChange={(e) => set_message({ ...message, email: e.target.value })}
        style={{ margin: "10px" }}
      ></TextField>
      <TextField
        className="text-input"
        id="filled-phone"
        label="Bericht"
        value={message.content}
        onChange={(e) => set_message({ ...message, content: e.target.value })}
        multiline
        rows={5}
        variant="filled"
        style={{ margin: "10px" }}
      ></TextField>
      <div
        style={{
          margin: " 10px",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" style={{ textAlign: "start" }}>
          Nieuwsbrief
        </Typography>
        <FormControlLabel
          value="left"
          value={message.requireNewsletter}
          onChange={(e) =>
            set_message({
              ...message,
              requireNewsletter: !message.requireNewsletter,
            })
          }
          control={<Checkbox color="primary" />}
          label="Aanmelden voor de nieuwsbrief"
          labelPlacement="end"
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => submitMessage()}
        >
          Verzenden
        </Button>
      </div>
    </div>
  );
}
