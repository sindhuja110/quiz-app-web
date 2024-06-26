import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../footer";
import Header from "../header";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div>
        <Container className="privacy-page mt-5 mb-5">
          <Row>
            <Col>
              <h1 className="text-center">Privacy Policy</h1>

              <p>
                Welcome to our kids' app. We take your privacy seriously. This
                privacy policy explains how we collect, use, disclose, and
                safeguard your information when you use our app. Please read
                this privacy policy carefully. If you do not agree with the
                terms of this privacy policy, please do not access the app.
              </p>

              <h2>1. Information We Collect</h2>
              <p>
                We may collect information about you in a variety of ways. The
                information we may collect via the app includes:
              </p>
              <ul>
                <li>
                  Personal Data: Personally identifiable information, such as
                  your name and email address, that you voluntarily give to us
                  when you register with the app or when you choose to
                  participate in various activities related to the app.
                </li>
                <li>
                  Derivative Data: Information our servers automatically collect
                  when you access the app, such as your IP address, your browser
                  type, your operating system, your access times, and the pages
                  you have viewed directly before and after accessing the app.
                </li>
              </ul>

              <h2>2. Use of Your Information</h2>
              <p>
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                app to:
              </p>
              <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>
                  Monitor and analyze usage and trends to improve your
                  experience with the app.
                </li>
                <li>Notify you of updates to the app.</li>
              </ul>

              <h2>3. Disclosure of Your Information</h2>
              <p>
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>
              <ul>
                <li>
                  By Law or to Protect Rights: If we believe the release of
                  information about you is necessary to respond to legal
                  process, to investigate or remedy potential violations of our
                  policies, or to protect the rights, property, and safety of
                  others, we may share your information as permitted or required
                  by any applicable law, rule, or regulation.
                </li>
                <li>
                  Third-Party Service Providers: We may share your information
                  with third parties that perform services for us or on our
                  behalf, including payment processing, data analysis, email
                  delivery, hosting services, customer service, and marketing
                  assistance.
                </li>
              </ul>

              <h2>4. Security of Your Information</h2>
              <p>
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>

              <h2>5. Children's Privacy</h2>
              <p>
                We do not knowingly collect personally identifiable information
                from children under the age of 13. If we become aware that we
                have inadvertently received personally identifiable information
                from a user under the age of 13, we will delete such information
                from our records.
              </p>

              <h2>6. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal, or regulatory reasons.
              </p>

              <h2>7. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy,
                please contact us at: support@kidsapp.com
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
