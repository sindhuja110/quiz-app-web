import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MainContent = () => {
  return (
    <Container className="main-content mt-5 vh-100">
      <Row className="text-center">
        <Col>
          <h1>Joyful learning starts here!</h1>
          <p>Inspire a lifetime of learning and discovery with our free, fun educational program for children ages two to eight.</p>
          <div className="buttons">
            <Button variant="primary" href="https://apps.apple.com">Download on the App Store</Button>
            <Button variant="success" href="https://play.google.com">Get it on Google Play</Button>
            <Button variant="warning" href="https://www.amazon.com">Available at Amazon Appstore</Button>
          </div>
          <div className="disclaimer">100% FREE! No ads, no subscriptions.</div>
          {/* <img src="path/to/your/image.png" alt="Khan Academy Kids" className="promo-image" /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
