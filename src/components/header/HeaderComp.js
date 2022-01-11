import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

import './HeaderComp.scss';
import {headerMenuData} from "../../configs/headerMenuData";

const HeaderComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-comp">
      <Container className="d-flex justify-content-end align-items-center">
        <div className="header-comp-container">
          {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <div className="toggle-btn-container">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-comp-toggle-custom"/>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav" className="header-comp-menu">
            <Nav className="me-auto">
              {
                headerMenuData.map((val, index) => (
                  <Nav.Link className="menu-item" key={index} href={val.path}>{val.label}</Nav.Link>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default HeaderComp;