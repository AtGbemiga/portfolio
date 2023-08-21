import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGithubBadge, DiNpm } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiVercel,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiNetlify,
  SiCanva,
} from "react-icons/si";
import { VscTerminalCmd } from "react-icons/vsc";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge /> <span>GitHub</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <span>Visual Studio</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm /> <span>npm</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> <span>Vercel</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> <span>Postman</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify /> <span>Netlify</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> <span>Figma</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger /> <span>Swagger</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva /> <span>Canva</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscTerminalCmd /> <span>Terminal</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
