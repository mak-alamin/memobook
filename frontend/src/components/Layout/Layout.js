import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";

function Layout() {
  return (
    <Container fluid>
      <Header />
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Layout;
