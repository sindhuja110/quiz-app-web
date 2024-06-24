import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./pages/footer";

function App() {
  return (
    <div className="App">
      <Router>
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
            <Footer />
            <Col lg={3} xxl={2} xl={2} xs={12}>
              {/* <Sidebar /> */}
            </Col>

            <Col lg={9} xxl={10} xl={10}>
              {/* <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/notify-add" element={<Notification />} />
                
                <Route path="/settings" element={<Settings />} />

              </Routes> */}
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
