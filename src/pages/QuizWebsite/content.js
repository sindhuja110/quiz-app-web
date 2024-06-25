import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import learnimages from '../../Assets/companylogo.png'

function Content() {
  return (
    <div>
      <Container>   
        <Row className="content-section">
      <Col md={6} className='text-center'>
        <h1 className="content-title">Quiz and Grade at the Speed of Learning</h1>
        <p className="content-text">
          Immediate feedback is a vital part of the learning process. Socrative gives you just that for the classroom or office – an efficient way to monitor and evaluate learning that saves time for educators while delivering fun and engaging interactions for learners.
        </p>
        <Button variant="primary" className="mr-2">Download the app</Button><br/><br/>
        <Button variant="outline-primary">Contact our team</Button>
      </Col>
      <Col md={6} className="text-center">
        <img src={learnimages} alt="Illustration" className="img-fluid" />
      </Col>
    </Row>
    </Container>

    </div>
  );
}

export default Content;
