import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleComp from "../title/TitleComp";
import QuestionImg from '../../assets/imgs/questionMessage.png';
import AnswerImg from '../../assets/imgs/answerMessage.png';
import {faqsData} from "../../configs/faqsData";

import './FAQComp.scss';

const FaqComp = () => {
  return (
    <Container fluid className="faq-comp comp-height comp-secondary-bg">
      <Container className="faq-comp-container">
        <Row className="faq-comp-title d-flex justify-content-center align-items-center">
          <TitleComp title={"FAQ"}/>
        </Row>
        <Row className="faq-comp-content">
          {
            faqsData.map((val, index) => (
              <div key={index}
                   className={`item-container d-flex align-items-center ${(index % 2 !== 0) && 'justify-content-end'}`}>
                <div className="item-detail">
                  <div data-aos="fade-right" className="item-question">
                    <img src={QuestionImg} alt="faqs-boobies"/>
                    <p className="question">{val.question}</p>
                  </div>
                  <div data-aos="fade-left" className="item-answer">
                    <img src={AnswerImg} alt="faqs-boobies"/>
                    <p className="answer">{val.answer}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default FaqComp;