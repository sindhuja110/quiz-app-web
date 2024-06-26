import React, { useState } from 'react';
import { Button, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import Footer from '../footer';
import Header from '../header';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Lottie from 'react-lottie';
import successAnimation from '../../../assets/images/SuccessAnimation.json';
import 'react-toastify/dist/ReactToastify.css';
import { useSendContactMutation } from '../../../redux/features/api/ContactUs';

const ContactUsSchema = Yup.object().shape({
  name: Yup.string().max(25, 'Name must be 25 characters or less').required('Name is required...!'),
  email: Yup.string().email('Invalid email address').required('Email is required...!'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required...!'),
  message: Yup.string().max(500, 'Message must be 500 characters or less').required('Message is required...!'),
});

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [sendContact] = useSendContactMutation();

  const handleSendRequest = async (values, { setSubmitting, resetForm }) => {
    try {
      await sendContact({
        phoneNumber: values.phone,
        userName: values.name,
        email: values.email,
        message: values.message,
      }).unwrap();

      setSuccessMessage("Your message has been sent successfully!");
      setShowModal(true);
      setTimeout(() => setShowModal(false), 4000);
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.", { autoClose: 1000 });
    } finally {
      setSubmitting(false);
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <Header />
      <div className="contact-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <h1 className="text-center mb-4">Contact Us</h1>
              <Formik
                initialValues={{ name: "", email: "", phone: "", message: "" }}
                validationSchema={ContactUsSchema}
                onSubmit={handleSendRequest}
              >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  errors,
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name" className="mt-3">
                      <Form.Label>Name:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Name.."
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.name && !!errors.name}
                        style={{ borderColor: '#6B78B7' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="email" className="mt-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email.."
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.email && !!errors.email}
                        style={{ borderColor: '#6B78B7' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="phone" className="mt-3">
                      <Form.Label>Phone Number:</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Phone Number.."
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.phone && !!errors.phone}
                        style={{ borderColor: '#6B78B7' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="message" className="mt-3">
                      <Form.Label>Message:</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter your Message.."
                        rows={4}
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={touched.message && !!errors.message}
                        style={{ borderColor: '#6B78B7' }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Row className="justify-content-center">
                      <Col xs="auto" className="mt-3">
                        <Button
                          variant="warning" type="submit" className="mt-3"
                          disabled={isSubmitting}
                        >
                          Send your message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          <Lottie options={defaultOptions} height={80} width={80} />
          <p style={{ fontSize: "18px", textAlign: "center", fontWeight: "bold" }}>
            {successMessage}
          </p>
        </Modal.Body>
      </Modal>

      <Footer />
    </>
  );
};

export default Contact;
