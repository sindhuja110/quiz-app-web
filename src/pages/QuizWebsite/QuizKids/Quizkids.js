import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer";
import AppBarHeader from "../header";
import MainContent from "../maincontent";
import WhyChooseOurs from "../ChooseOurs";
import DownloadAppSection from '../downloadApp';
import LearningPage from '../learningPage';

export const Quizkids = () => {
  return (
    <div>
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
          <LearningPage/>
          <DownloadAppSection/>
          <Footer />

          <Col lg={12} xxl={12} xl={12} xs={12}></Col>
        </Row>
      </Container>
    </div>




    </div>
  )
}
