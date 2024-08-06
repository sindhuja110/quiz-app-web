import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaVolumeUp, FaAppleAlt, FaChalkboardTeacher } from "react-icons/fa";
import { FaArrowDown19 } from "react-icons/fa6";


const LearningPage = () => {
  const facilities = [
    {
      icon: <FaVolumeUp   size={60} />,
      title: "Activity Skills",
      description: "Track your child’s Sounds, Hearing and Vision progress with our level based Phonics and Tracing activities.",
      bgColor: "#ffe8e8",
      textColor: "#ff6347",
    },
    {
      icon: <FaArrowDown19  size={60} />,
      title: "Number Sense",
      description: "Crucial early math concepts made easy through engaging stories,rhymes and games.",
      bgColor: "#e8f7e8",
      textColor: "#32cd32",
    },
    {
      icon: <FaAppleAlt size={60} />,
      title: "Thinking Skills",
      description: "Nourish your child’s never ending curiosity with our wide range of fun, interactive on study.",
      bgColor: "#fff5d8",
      textColor: "#ffa500",
    },
    {
      icon: <FaChalkboardTeacher size={60} />,
      title: "Improve Knowledge",
      description: "Our habit building series teach essential life skills that kids (and parents) are proud of.",
      bgColor: "#e8f1ff",
      textColor: "#1e90ff",
    },
  ];

  return (
    <div>
      <Container className="learn-page">
      <Row className="text-center my-5">
          <Col>
            <h2>Turn Screen Time To Learning Time</h2>
            <p className="justify-text mx-5 mt-3">
              Quiz Time delivers playful learning across Nursery, LKG and UKG
              subjects, building skills 2-6 year olds need for a rock solid
              foundation at the start of their learning journey.
            </p>
          </Col>
        </Row>
         <Row className="text-center">
          {facilities.map((facility, index) => (
            <Col key={index} md={6} lg={3} className="mb-5">
              <div className="circle-icon" style={{ backgroundColor: facility.bgColor }}>
                {facility.icon}
              </div>
              <h4 className="facility-title" style={{ color: facility.textColor }}>
                {facility.title}
              </h4>
              <p>{facility.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LearningPage;
