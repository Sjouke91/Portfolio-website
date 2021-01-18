import React from "react";
import "./Projects.scss";
import { projects } from "./components/projects";
import ProjectCard from "./components/ProjectCard";
import Navigation from "../../component/Navbar";

export default function Projects() {
  const fittrack = projects[0];

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
        }}
      >
        {projects.map((p) => {
          return (
            <div key={p.title} className="project-board">
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
      <div className="bottom-half"></div>
    </div>
  );
}
