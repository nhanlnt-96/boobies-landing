import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import {teamData} from "../../configs/teamData";

import './TeamComp.scss';

const TeamComp = () => {
  return (
    <Container fluid className="team-comp comp-height comp-primary-bg">
      <Container className="team-comp-container">
        <Row className="team-comp-title d-flex justify-content-center align-items-center">
          <TitleComp title={"TEAM"}/>
        </Row>
        <Row className="team-comp-content">
          {
            teamData.map((val, index) => (
              <Col data-aos="zoom-in" lg={6} md={12} sm={12} className="team-item d-flex justify-content-center align-items-center">
                <div className="team-item-container">
                  <div className="team-item-ava">
                    <img src={val.ava} alt={val.name}/>
                  </div>
                  <div className="team-item-name">
                    <p className="name">{val.name}</p>
                  </div>
                  <div className="team-item-title">
                    <p className="title">{val.title}</p>
                  </div>
                  {
                    val.about && (
                      <div className="team-item-about">
                        <p className="about">{val.about}</p>
                      </div>
                    )
                  }
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default TeamComp;