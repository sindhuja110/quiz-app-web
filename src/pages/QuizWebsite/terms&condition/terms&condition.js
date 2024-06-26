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
            <h1 className="text-center">Terms and Conditions</h1>
            <h4>Introduction</h4>
            <p>Welcome to our app! By using our app, you agree to these terms and conditions.</p>

            <h4>Use of the App</h4>
            <p>This app is intended for kids. Parents or guardians should supervise the use of this app.</p>

            <h4>Accounts</h4>
            <p>Parents or guardians may create accounts for their children. The information provided should be accurate and up to date.</p>

            <h4>Privacy</h4>
            <p>We are committed to protecting your privacy. Please review our Privacy Policy for more details.</p>

            <h4>Intellectual Property</h4>
            <p>All content in this app is owned by us or our licensors. You may not use this content without our permission.</p>

            <h4>Limitation of Liability</h4>
            <p>We are not liable for any damages that may arise from the use of this app.</p>

            <h4>Changes to These Terms</h4>
            <p>We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.</p>

            <h4>Contact Us</h4>
            <p>If you have any questions about these terms, please contact us at support@kidsapp.com.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
