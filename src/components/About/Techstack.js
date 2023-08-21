import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di";

import { BiLogoTypescript, BiLogoNodejs } from "react-icons/bi";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoTypescript /> <span> TypeScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNextjs /> <span>Nextjs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <span>JavaScript</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <span>React</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> <span>HTML</span>
      </Col>
      {
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 /> <span>CSS</span>
        </Col>
      }
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandRedux /> <span>Redux</span>
      </Col>
      {
        <Col xs={4} md={2} className="tech-icons">
          <FaBootstrap /> <span>Bootstrap</span>
        </Col>
      }
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoNodejs /> <span>Nodejs</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress /> <span>Express</span>
      </Col>
    </Row>
  );
}

export default Techstack;
