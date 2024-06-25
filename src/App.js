import "./App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./pages/QuizWebsite/footer";
import Kidslearn from "./pages/QuizWebsite/kidsLear";
import AppBarHeader from "./pages/QuizWebsite/header";
import MainContent from "./pages/QuizWebsite/maincontent";
import Content from "./pages/QuizWebsite/content";
import WhyChooseOurs from "./pages/QuizWebsite/ChooseOurs";
import AboutUs from "./pages/QuizWebsite/aboutUs";
import FAQ from "./pages/QuizWebsite/faqPage";

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
          <AppBarHeader />
          <MainContent />
          <WhyChooseOurs/>
          <Content />
          <AboutUs/>
          <Kidslearn />
          <FAQ/>
          <Footer />

          <Col lg={12} xxl={12} xl={12} xs={12}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
