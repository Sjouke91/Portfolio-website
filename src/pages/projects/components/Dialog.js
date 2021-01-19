import React, { useState } from "react";
import { Dialog, DialogTitle, TextField, Button } from "@material-ui/core";
import "./Dialog.scss";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export default function PopUpDialog({ addProject, open, setOpen }) {
  const [newProject, set_newProject] = useState({
    icon: "",
    title: "",
    company: "",
    content: "",
    date: "",
  });

  return (
    <div>
      <Dialog aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle style={{ display: "flex" }} id="simple-dialog-title">
          New project
          <IconButton onClick={setOpen} style={{ marginLeft: "160px" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            id="outlined-basic"
            className="dialog-label"
            style={{ margin: "10px" }}
            label="Title"
            variant="outlined"
            onChange={(e) =>
              set_newProject({ ...newProject, title: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Company"
            style={{ margin: "10px" }}
            variant="outlined"
            onChange={(e) =>
              set_newProject({ ...newProject, company: e.target.value })
            }
            className="dialog-label"
          />
          <TextField
            id="outlined-basic"
            label="Date"
            style={{ margin: "10px" }}
            variant="outlined"
            onChange={(e) =>
              set_newProject({ ...newProject, date: e.target.value })
            }
            className="dialog-label"
          />
          <TextField
            id="outlined-basic"
            label="Content"
            style={{ margin: "10px" }}
            variant="outlined"
            onChange={(e) =>
              set_newProject({ ...newProject, content: e.target.value })
            }
            multiline
            rows={5}
            className="dialog-label"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ margin: "10px" }}
            style={{ margin: "10px" }}
            onClick={(e) => addProject(newProject)}
          >
            Add project
          </Button>
        </form>
      </Dialog>
    </div>
  );
}
