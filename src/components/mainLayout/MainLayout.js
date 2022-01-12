import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import CollectionComp from "../collection/CollectionComp";
import RarityComp from "../rarity/RarityComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import FAQComp from "../faq/FAQComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home">
        <BannerComp/>
      </Row>
      <Row id="about">
        <AboutComp/>
      </Row>
      <Row id="collection">
        <CollectionComp/>
      </Row>
      <Row id="rarity">
        <RarityComp/>
      </Row>
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="faq">
        <FAQComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;