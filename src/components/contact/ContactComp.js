import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import ContactBg from '../../assets/imgs/bgContact.svg';

import './ContactComp.scss';
import {BsInstagram, BsTwitter, BsYoutube, FaFacebookF} from "react-icons/all";

const ContactComp = () => {
  return (
    <Container fluid className="contact-comp comp-height comp-secondary-bg">
      <Container className="contact-comp-container">
        <Row className="contact-comp-title d-flex justify-content-center align-items-center">
          <TitleComp title={"CONTACT"}/>
        </Row>
        <Row className="contact-comp-content">
          <Col lg={8} md={8} sm={12}
               className="contact-comp-left d-flex flex-column justify-content-center align-items-center">
            <div data-aos="fade-up" className="contact-detail-container">
              <p className="title">If you encounter any problem,Join The AdventureBoobies Guild!</p>
              <p className="detail">Our Discord is the best place to stay up to date with all of our latest updates!
                Hang out with fellow Boobies, take part in awesome giveaways, win prizes, and be there for all of our
                collaborations! We hope to see you there! BOOB-BOOB!</p>
            </div>
          </Col>
          <Col data-aos="fade-up" lg={4} md={4} sm={12}
               className="contact-comp-right d-flex justify-content-center align-items-center">
            <img src={ContactBg} alt="boobies"/>
          </Col>
        </Row>
        <Row className="contact-comp-footer">
          <div className="footer-container d-flex justify-content-center align-items-center">
            <a href="#"><BsTwitter/></a>
            <a href="#"><FaFacebookF/></a>
            <a href="#"><BsYoutube/></a>
            <a href="#"><BsInstagram/></a>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default ContactComp;