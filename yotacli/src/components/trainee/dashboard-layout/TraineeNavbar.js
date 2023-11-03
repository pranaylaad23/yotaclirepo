import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import navcCass from "./TraineeNavbar.module.css";
import { useDispatch } from "react-redux";


const TraineeNavbar = (props) => {
  const onHamburgerClick = () => {
    props.onHamburgerClick();
  };

  var barsIcon = <i className="fas fa-bars"></i>;
  var crossIcon = <i className="fas fa-times-circle"></i>; 

  return (
    //className={`navbar-brand ${classes.yashimage}`}
    <div className={`${navcCass.headerContainer}`}>
      <Navbar expand="lg" className={`navbar navbar-dark ${navcCass.bgColor}`}>
        <Container fluid >
          {/* <i class="fa-solid fa-bars" href="#"></i> */}
          <i           
            onClick={onHamburgerClick}
            className={`bi bi-list ${navcCass.sidebarCollapse}`}>
            <span className={props.isNotActive ? "" : "hidden"}>
              {barsIcon}
            </span>
            <span className={props.isNotActive ? "hidden" : ""}>
              {crossIcon}
            </span>
          </i>

          <Navbar.Brand href="#" className={`${navcCass.title}`}> &nbsp; YOTA </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>

              <Nav.Link href="#action2">Link</Nav.Link>

              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>

                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav> */}

            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <Button variant="outline-success">Search</Button>
            </Form> */}
             
             
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

TraineeNavbar.propTypes = {};

export default TraineeNavbar;
