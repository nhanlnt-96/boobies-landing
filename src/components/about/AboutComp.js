import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AboutImg from '../../assets/imgs/bgAbout.png';
import TitleComp from "../title/TitleComp";

import './AboutComp.scss';

const AboutComp = () => {
  return (
    <Container fluid className="about-comp comp-height comp-secondary-bg">
      <Container className="about-comp-container">
        <Row className="about-comp-title d-flex justify-content-center align-items-center">
          <TitleComp title={"ABOUT"}/>
        </Row>
        <Row className="about-comp-content justify-content-center align-items-center">
          <Col ld={6} md={7} sm={12} className="about-comp-left">
            <div className="about-content-container">
              <p className="content">We are creating an immersive metaverse experience, complete with role-playing games
                where you will be able to use your NFT as in-game avatars, train your companion NFTS, and hang out with
                your friends. Inspired by the majestic blue footed boobies, AdventureBoobies aspires to do more than
                just create an immersive experience, we also want to help preserve them and other majestic creatures. We
                will be doing a 10% donation of our total mint to the Galapagos Conservancy, along with 2% of royalties
                on secondary sales.</p>
            </div>
          </Col>
          <Col ld={6} md={5} sm={12} className="about-comp-right d-flex justify-content-center align-items-center">
            <img src={AboutImg} alt="about-boobies"/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutComp;