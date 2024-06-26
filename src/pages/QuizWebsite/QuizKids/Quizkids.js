import React from 'react'


import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer";
import Kidslearn from "../kidsLear";
import AppBarHeader from "../header";
import MainContent from "../maincontent";
import Content from "../content";
import WhyChooseOurs from "../ChooseOurs";
import AboutUs from "../ChooseOurs";
import FAQ from "../faqPage";

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
          <Content />
          <AboutUs/>
          <Kidslearn />
          <FAQ/>
          <Footer />

          <Col lg={12} xxl={12} xl={12} xs={12}></Col>
        </Row>
      </Container>
    </div>




    </div>
  )
}
