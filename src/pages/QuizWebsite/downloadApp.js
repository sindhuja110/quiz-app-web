import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mainimag from "../../assets/images/walkanime.json";
import playstore from "../../assets/images/play-store-badge-.webp";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: mainimag,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const DownloadAppSection = () => {
  return (
    <div className="mb-5">
      <Container className="mt-4 mb-4 download-page">
        <Row>
          <Col
            xs={12}
            xl={6}
            sm={12}
            xxl={6}
            md={6}
            lg={6}
            className="fade-in-up mt-4 text-center"
            data-wow-delay="0.1s"
          >
            <div className="section-title position-relative mb-4 pb-2">
              <h2 className="mt-2">
                <br />
                <br />
                Download Our App
              </h2>
            </div>
            <p className="mb-4" style={{ fontSize: "20px" }}>
              Wherever you're going, we're right there with you
            </p>
            <p style={{ fontSize: "20px" }}>
              "Download the Bet and Play app today. Get access to trusted,
              authentic, and real-time information about sports events, game
              schedules, betting odds, player stats, and more at your
              fingertips."
            </p>
            <a
              href="https://play.google.com/store/apps/details?id="
              target="blank"
            >
              <img
                src={playstore}
                alt="Quiz Time App Google Play"
                title="Quiz Time App Google Play"
                style={{ width: "150px", height: "auto" }}
              />
            </a>
          </Col>
          <Col
            xs={12}
            xl={6}
            sm={12}
            xxl={6}
            md={6}
            lg={6}
            className="d-flex justify-content-center align-items-center fade-in-up mt-4"
            data-wow-delay="0.1s"
          >
            <Lottie
              options={defaultOptions}
              style={{ width: "100%", height:'100%', maxWidth: "500px", maxHeight: "250px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DownloadAppSection;
