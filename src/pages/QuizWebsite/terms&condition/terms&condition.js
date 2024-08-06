import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="privacy-page justify-content-md-center">
          <Col >
            <h4 className="text-center">Terms and Conditions</h4>
            <h6>Introduction</h6>
            <p>Welcome to our app! By using our app, you agree to these terms and conditions.</p>

            <h6>Use of the App</h6>
            <p>This app is intended for kids. Parents or guardians should supervise the use of this app.</p>

            <h6>Accounts</h6>
            <p>Parents or guardians may create accounts for their children. The information provided should be accurate and up to date.</p>

            <h6>Privacy</h6>
            <p>We are committed to protecting your privacy. Please review our Privacy Policy for more details.</p>

            <h6>Intellectual Property</h6>
            <p>All content in this app is owned by us or our licensors. You may not use this content without our permission.</p>

            <h6>Limitation of Liability</h6>
            <p>We are not liable for any damages that may arise from the use of this app.</p>

            <h6>Changes to These Terms</h6>
            <p>We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.</p>

            <h6>Contact Us</h6>
            <p>If you have any questions about these terms, please contact us at support@kidsapp.com.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
