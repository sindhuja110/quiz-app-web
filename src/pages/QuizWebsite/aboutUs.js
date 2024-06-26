import { Row, Col, Container } from "react-bootstrap";
import MissionImage from "../../assets/images/companylogo.png";
import ServiceImage from "../../assets/images/companylogo.png";
import Footer from "./footer";
import Header from "./header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      {/* ----------------About row start---------------- */}
      <div className="Aboutus-row">
        <Container className="">
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h1
                style={{
                  textAlign: "center",
                  fontFamily: "'Comic Sans MS', cursive, sans-serif",
                }}
              >
                About Us
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <---About us row end---------> */}

      {/* <---Who we are row start---------> */}
      <Container className="mt-4 mb-4">
        <Row>
          <Col xs={12}>
            <h2
              className="mb-3"
              style={{
                fontSize: "24px",
                color: "#FF6F61",
                letterSpacing: "1px",
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              Welcome to FunQuiz Kids App!
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={12}>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              <b> Where Learning Meets Fun! </b>
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              Welcome to <b>"FunQuiz Kids App"</b> - the ultimate destination
              for kids to learn and play! Our app offers a variety of
              educational games that make learning fun and exciting.
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              Kids can explore different games like guessing animal sounds,
              matching images, and simple math challenges. Our platform is
              designed to engage young minds and make learning an adventure!
            </p>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              At <b>"FunQuiz Kids App"</b>, children can earn coins by taking
              quizzes and see their rankings on the leaderboard. Plus, there's a
              BMI calculator to help kids learn about healthy living.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <---Who we are row end---------> */}

      {/* <---Our mission row start---------> */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#FF6F61",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                textAlign: "center",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              At <b>"FunQuiz Kids App"</b>, our mission is to make learning a
              delightful experience for kids. We aim to provide a safe and
              engaging platform where children can learn, play, and grow. Our
              games are designed to spark curiosity and foster a love for
              learning.
            </p>
          </Col>
          <Col xs={12} lg={6} className="d-flex justify-content-end">
            <img
              src={MissionImage}
              alt="our mission"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                borderRadius: "15px",
              }}
            />
          </Col>
        </Row>
      </Container>
      {/* <---Our mission row end---------> */}

      {/* <---Driven by Better Service row start---------> */}
      <Container className="mt-4 mb-4">
        <Row className="align-items-center">
          <Col xs={12} lg={6} className="d-flex justify-content-start">
            <img
              src={ServiceImage}
              alt="better service"
              style={{
                maxWidth: "100%",
                maxHeight: "300px",
                borderRadius: "15px",
              }}
            />
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0">
            <h2
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "24px",
                color: "#FF6F61",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              Driven by Fun and Learning
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                letterSpacing: "1px",
                textAlign: "center",
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
              }}
            >
              At <b>"FunQuiz Kids App"</b>, we are passionate about delivering
              an enriching and enjoyable learning experience. Our goal is to
              blend education and entertainment, making sure kids have a great
              time while they learn. Join us on this exciting journey of
              discovery and growth!
            </p>
          </Col>
        </Row>
      </Container>
      {/* <---Driven by Better Service row end---------> */}
      <Footer />
      </div>
  );
};

export default AboutUs;
