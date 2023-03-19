import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/stop-watch.png";
import chatify from "../../Assets/Projects/newsapp.png";
import suicide from "../../Assets/Projects/suicide.png";
import leaf from "../../Assets/Projects/leaf.png";
import bitsOfCode from "../../Assets/Projects/textUtil.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NewsMonkey"
              description="Personal News App to read the lattest headlines of Business, Sports, Health, Science, Technology and Entertainment categories. This app is build with react.js, Bootstrap, and API. Have features which allows user for realtime news headlines of country of there own choice."
              ghLink="https://github.com/Sallu-sb/news-app"
              demoLink="https://github.com/Sallu-sb/news-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Text Utilities"
              description="My first ever app that I build with reactjs. It is a text utilities app that can convert text to uppercase and lowercase. It has dark and light mode. It also count words and suggest the time to read the text. It is amazing app, after creating this app I am feeling super excited and confident."
              ghLink="https://github.com/Sallu-sb/Text-Utilities"
              demoLink="https://github.com/Sallu-sb/Text-Utilities"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Stop-Watch"
              description="One of my initial project during Learning Front-end development. I created stop-watch as a practice. It is good designed and properly working. It was developed with html, css and javascript."
              ghLink="https://github.com/Sallu-sb/Stop-Watch"
              demoLink="https://github.com/Sallu-sb/Stop-Watch"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CRUD-Operation"
              description="A simple project to practice CRUD operation with JavaScript."
              ghLink="https://github.com/Sallu-sb/crud"
              demoLink="https://github.com/Sallu-sb/crud"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Food-website"
              description="Another simple food website clone while practicing Html and CSS concepts. This website is a sample food webiste of SUNBASKIT."
              ghLink="https://github.com/Sallu-sb/Sunbaskit"
              demoLink="https://github.com/Sallu-sb/Sunbaskit"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
