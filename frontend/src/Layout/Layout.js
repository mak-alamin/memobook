import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import MainContent from "./MainContent/MainContent";
import RightSidebar from "./RightSidebar/RightSidebar";

function Layout() {
  return (
    <Container fluid>
      <Header />

      <main className="mt-4">
        <Container>
          <Row>
            <Col>
              <LeftSidebar />
            </Col>

            <Col xs={6}>
              <MainContent className="main-content" />
            </Col>

            <Col>
              <RightSidebar />
            </Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </Container>
  );
}

export default Layout;
