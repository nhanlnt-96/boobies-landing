import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import {Timeline, TimelineItem} from 'vertical-timeline-component-for-react';

import './RoadmapComp.scss';
import {roadmapData} from "../../configs/roadmapData";

const RoadmapComp = () => {
  return (
    <Container fluid className="roadmap-comp comp-height comp-primary-bg">
      <Container className="roadmap-comp-container">
        <Row className="title d-flex justify-content-center align-items-center">
          <TitleComp title={"ROADMAP"}/>
        </Row>
        <Row className="roadmap-comp-content">
          <Timeline lineColor={'#ddd'}>
            {
              roadmapData.map((val, index) => (
                <TimelineItem
                  key={index}
                  dateText={val.title}
                  style={{color: '#e86971'}}
                >
                  <p>{val.content}</p>
                </TimelineItem>
              ))
            }
          </Timeline>
        </Row>
      </Container>
    </Container>
  );
};

export default RoadmapComp;