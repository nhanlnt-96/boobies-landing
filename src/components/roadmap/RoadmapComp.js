import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import Arrow1 from '../../assets/imgs/roadmapArrow1.webp';

import './RoadmapComp.scss';

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height comp-primary-bg">
      <Container className="roadmap-comp-container">
        <Row className="title d-flex justify-content-center align-items-center">
          <TitleComp title={"ROADMAP"}/>
        </Row>
        <Row className="roadmap-comp-content">
          <div className="content-container">
            <div className="content-item">
              <div className="progress-container">
                <img src={Arrow1} alt="roadmap-boobies"/>
                
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;