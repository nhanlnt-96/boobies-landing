import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";

import './RarityComp.scss';
import {rarityData} from "../../configs/rarityData";

const RarityComp = () => {
  return (
    <Container fluid className="rarity-comp comp-height comp-secondary-bg">
      <Container className="rarity-comp-container">
        <Row className="rarity-comp-title d-flex justify-content-center align-items-center">
          <TitleComp title={"RARITY"}/>
        </Row>
        <Row className="rarity-comp-content d-flex justify-content-center align-items-center">
          {
            rarityData.map((val, index) => (
              <Col data-aos="fade-up" lg={4} md={4} sm={12} key={index}
                   className="rarity-item d-flex justify-content-center align-items-center">
                <div className="item-container d-flex flex-column align-items-center">
                  <div className="item-img">
                    <img src={val.img} alt={val.name}/>
                  </div>
                  <div className="name-container">
                    <p className="name">{val.name}</p>
                  </div>
                  <div className="score-container">
                    <p className="score">{val.score}</p>
                  </div>
                  <div className="total-item">
                    <p className="label">Total items</p>
                    <p className="item">{val.items}</p>
                  </div>
                  <div className="rarity-container">
                    <p className="label">Rarity</p>
                    <p className="rarity">{val.rarity}</p>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default RarityComp;