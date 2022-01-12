import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import AboutComp from "../about/AboutComp";
import CollectionComp from "../collection/CollectionComp";
import RarityComp from "../rarity/RarityComp";

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
    </Container>
  );
};

export default MainLayout;