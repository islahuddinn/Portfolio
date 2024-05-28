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
              title="Wanna-Come"
              description="Wanna-Come is a food business management application that allows businesses to register restaurants and manage their users. Customers can reserve tables, book events, and order food. Restaurants can choose subscription plans based on their needs. The application is developed using Node.js/Express, MongoDB, and AWS."
              ghLink="https://github.com/islahuddinn/wanna_come"
              demoLink="https://github.com/islahuddinn/wanna_come"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="2Beloved Deluxe"
              description="It's a social community app similar to Instagram, It has all features like Instagram, built using Node.js/Express for the backend and React Native for the mobile front end."
              ghLink="https://github.com/islahuddinn/2beloved-deluxe-app"
              demoLink="https://github.com/islahuddinn/2beloved-deluxe-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="WordSnap"
              description="WordSnap is an engaging mobile gaming application built with Node.js, Express, AWS, and React Native. It features three exciting modes: Time Classic Play, where players race against the clock; Solo Play, for a relaxed, self-paced experience; and Speed Play, which challenges players to form words quickly. WordSnap offers a seamless and intuitive gaming experience for all types of players."
              ghLink="https://github.com/islahuddinn/worldsnap"
              demoLink="https://play.google.com/store/apps/details?id=com.wordsnap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Consultant Website"
              description="Consultant website barakatax.com wass designed with react.js and ddeployed on GoDaddy, It has the complete functionalities to handle consultancies, like, appointments, services, detailes, services, and Contact"
              ghLink="https://github.com/islahuddinn/consulting-website"
              demoLink="www.barakatax.com"
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
