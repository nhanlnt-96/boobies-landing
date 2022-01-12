import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import {collectionData} from "../../configs/collectionData";
import Border from '../../assets/imgs/collectionBg.png';

import './CollectionComp.scss';

const CollectionComp = () => {
  return (
    <Container fluid className="collection-comp comp-height com-">
      <Container className="collection-comp-container">
        <Row className="collection-comp-title d-flex justify-content-center align-items-center">
          <TitleComp title={"COLLECTION"}/>
        </Row>
        <Row className="collection-comp-img d-flex flex-column justify-content-center align-items-center">
          <div className="top">
            <div className="top-container">
              {
                collectionData.map((val, index) => (
                  index <= 2 && (
                    <div className="img-container">
                      <img key={index} src={val} alt="boobies-collection"/>
                    </div>
                  )
                ))
              }
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-container">
              {
                collectionData.map((val, index) => (
                  index > 2 && (
                    <div className="img-container">
                      <img key={index} src={val} alt="boobies-collection"/>
                    </div>
                  )
                ))
              }
            </div>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default CollectionComp;