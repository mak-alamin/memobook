import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";

import MainContent from "./MainContent/MainContent";

function Layout() {
  return (
    <Container fluid>
      <Header />
      <Container>
        <Row>
          <Col>
            <LeftSidebar />
          </Col>

          <Col xs={6}>
            <MainContent />
          </Col>

          <Col>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Layout;
