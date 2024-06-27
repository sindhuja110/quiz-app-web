import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Ratings from "../../assets/images/Kids-playing.avif";
import playstore from "../../assets/images/play-store-badge-.webp";

const DownloadAppSection = () => {
  return (
    <div>
      <Container className="mt-4 mb-4">
        <Row>
          <Col
            xs={12}
            xl={6}
            sm={12}
            xxl={6}
            md={6}
            lg={6}
            className="fade-in-up mt-4"
            data-wow-delay="0.1s "
          >
            {" "}
            <img
              className="img-fluid wow zoomIn"
              data-wow-delay="0.5s"
              src={Ratings}
              alt="Flawk"
            />
          </Col>
          <Col
            xs={12}
            xl={6}
            sm={12}
            xxl={6}
            md={6}
            lg={6}
            className="fade-in-up mt-4"
            data-wow-delay="0.1s "
          >
            {" "}
            <div className="section-title position-relative mb-4 pb-2">
              <h1 className="mt-2">
                <br />
                <br />
                Download Our App
              </h1>
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
        </Row>
      </Container>
    </div>
  );
};
export default DownloadAppSection;
