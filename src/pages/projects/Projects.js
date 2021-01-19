import React, { useEffect, useState } from "react";
import "./Projects.scss";
import { projects } from "./components/projects";
import ProjectCard from "./components/ProjectCard";
import Navigation from "../../component/Navbar";
import addProjectToArray from "./components/projects";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

import PopUpDialog from "./components/Dialog";

export default function Projects() {
  const [showAlert, set_showAlert] = useState(false);
  const [open, set_open] = useState(false);
  const [newProject, set_newProject] = useState({
    icon: "",
    title: "",
    company: "",
    content: "",
  });

  const addProject = (project) => {
    console.log(project);
    addProjectToArray(project);
    setOpen();
  };

  const setOpen = () => {
    set_open(!open);
  };

  return (
    <div className="projects-background">
      <div style={{ position: "absolute", zIndex: 2 }}>
        <Navigation color="black"></Navigation>
      </div>
      <div className="top-half"></div>
      <div
        className="content-half"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          overflow: "scroll",
          minWidth: "100vw",
        }}
      >
        {projects.map((p) => {
          return (
            <div
              key={p.title}
              className="project-board"
              style={{ margin: "10px" }}
            >
              <ProjectCard
                title={p.title}
                content={p.content}
                icon={p.icon}
                date={p.date}
                company={p.company}
              ></ProjectCard>
            </div>
          );
        })}
      </div>
      <div className="bottom-half">
        <div className="row">
          <div className="col-10">
            <PopUpDialog
              setOpen={setOpen}
              open={open}
              addProject={addProject}
            ></PopUpDialog>
          </div>
          <div className="col-2" style={{ marginTop: "20px" }}>
            <IconButton
              onClick={(e) => set_open(!open)}
              style={{ backgroundColor: "#DDD" }}
            >
              <AddIcon fontSize="large"></AddIcon>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
