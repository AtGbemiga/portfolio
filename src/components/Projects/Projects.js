import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tenzies from "../../Assets/Projects/tenzies.PNG";
import homesharing from "../../Assets/Projects/carrental.PNG";
import wikii from "../../Assets/Projects/wikii.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've recently worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homesharing}
              isBlog={false}
              title="Car Rental App"
              description=<p>
                This app allows you to search for renting vehicles or renting
                out yours. Notable features include specifying a start and end
                date duration for your hire, account management via
                authentication and authorization and renting out your vehicle.
                The app was built with a <span className="stack">Node js</span>{" "}
                backend and a <span className="stack">Next js</span> frontend,
                located on separate repositories.
              </p>
              ghLink="https://github.com/AtGbemiga/car-rental-frontend/blob/main/README.md"
              demoLink="https://car-rental-frontend-murex.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wikii}
              isBlog={false}
              title="Wikii Search"
              description=<p>
                This app is based on the Wikipedia API that provides search
                results. The app returns a list containing the search result on
                a dynamic page. Users can read a summary of their search right
                on the app and view an associated image if available then read
                the whole story on Wikipedia. If no result is found, the user is
                notified. The app was built with{" "}
                <span className="stack">Next js</span>
              </p>
              ghLink="https://github.com/AtGbemiga/tenzies-game"
              demoLink="https://preeminent-lily-9744ae.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tenzies}
              isBlog={false}
              title="Tenzies Game"
              description=<p>
                Roll the dice until all die have the same number. Click on a die
                to freeze it at a number you want to match other dice with. You
                keep freezing dice until all the numbers match then you win the
                game(Ten 6's for example). If you decide to match a number
                different from your currently matched number, simply click on
                that die to un-freeze it and start to match a new number. The
                app was built with <span className="stack">React</span>
              </p>
              ghLink="https://github.com/AtGbemiga/tenzies-game"
              demoLink="https://splendorous-kashata-0319c6.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
