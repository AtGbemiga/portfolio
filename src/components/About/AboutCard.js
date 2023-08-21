import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi. I'm <span className="purple">Gbemiga Atolagbe, </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />
            <br />
            A Software Engineer with a lot of experience working as a Social
            Media Manager and Email Marketing Specialist. <br />
            <br />
            I'm used to working under the Scrum methodology with
            multidisciplinary teams to develop real-life products, always under
            time and budget constraints.
            <br />
            <br />
            I have a background in Information and Communication Technology and
            have a BSc, which gives me a unique perspective on the technical
            aspects of projects.
            <br />
            <br />
            I'm passionate about web development and I'm always looking for new
            challenges.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <span>
                <ImPointRight />
              </span>
              <span>&nbsp;&nbsp;&nbsp;</span> Read history and science books
            </li>
            <li className="about-activity">
              <span>
                <ImPointRight />
              </span>
              <span>&nbsp;&nbsp;&nbsp;</span> Play basketball with friends
            </li>
            <li className="about-activity">
              <span>
                <ImPointRight />
              </span>
              <span>&nbsp;&nbsp;&nbsp;</span> Surf the internet
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
