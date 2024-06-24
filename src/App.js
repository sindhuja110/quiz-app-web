import "./App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./pages/footer";
import Kidslearn from "./pages/kidsLear";

function App() {
  return (
    <div className="App">
      <Container
        fluid
        style={{
          backgroundColor: "#F5F6FA",
          height: "100vh",
          width: "100%",
          overflowY: "auto",
        }}
      >
        <Row>
          <Kidslearn />
          <Footer />

          <Col lg={12} xxl={12} xl={12} xs={12}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
