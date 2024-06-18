import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import golangTest from "../../Assets/Projects/golang_with_test.png";
import railsTurboStream from "../../Assets/Projects/railsTurboStream.png";

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
              imgPath={golangTest}
              isBlog={false}
              title="Golang learning"
              description="Learning golang with tests"
              ghLink="https://github.com/bjchris32/learn-go-with-tests"
              demoLink="https://quii.gitbook.io/learn-go-with-tests"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railsTurboStream}
              isBlog={false}
              title="Rails7 Turbo"
              description="Implemented less Javascript solution for single page application with Rails7 built-in turbo/turbostream and sidekiq background processing"
              ghLink="https://github.com/bjchris32/sms-notification"
              demoLink="https://youtu.be/HlPmPAbrJLM"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
