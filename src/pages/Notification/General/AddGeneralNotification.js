import { Formik } from "formik";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NotificationSchema } from ".././../../pages/Notification/General/GeneralValidation";
import BasicButton from "../../../../src/components/BasicButton";
import TextInput from "../../../../src/components/TextInput";

import { useAddNotificationMutation } from "../../../redux/features/api/GeneralNotificationApi";
import { toast } from "react-toastify";

const AddGeneralNotification = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [NotificationAddData, { isLoading }] = useAddNotificationMutation();

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/general");
  };

  const initialValues = {
    title: "",
    body: "",
    image: "",
  };

  const handleAddData = async () => {
    try {
      const response = await NotificationAddData({
        title: title,
        body: body,
        image: image,
      });
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        setTitle("");
        setBody("");
        setImage("");
        navigate("/admin/general");
        console.log(response.error.data);
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
        console.log("else part");
        console.log(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={NotificationSchema}
          onSubmit={handleAddData}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <>
              <Form>
                <Row className="d-flex flex-row justify-content-between align-items-center">
                  <Col className="d-flex justify-content-start mb-3 mt-3">
                    <h4 onClick={handleCancel}>
                      <AiOutlineArrowLeft />
                    </h4>
                    <h4>Add General</h4>
                  </Col>
                  <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
                    <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label="Cancel"
                    />
                    <BasicButton
                      className="m-1"
                      label="Save"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={isSubmitting}
                      onClick={
                        title === "" ||
                        body === "" ||
                        image === "" ||
                        (touched.title && errors.title) ||
                        (touched.body && errors.body) ||
                        (touched.image && errors.image)
                          ? handleSubmit
                          : handleAddData
                      }
                    />
                  </Col>
                </Row>
                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Title"
                        type=""
                        name="title"
                        className={`form-control ${
                          touched.title && errors.title ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTitle(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.title && errors.title ? (
                            <p className="text-danger">{errors.title}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="body"
                        type=""
                        name="body"
                        className={`form-control ${
                          touched.body && errors.body ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setBody(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.body && errors.body ? (
                            <p className="text-danger">{errors.body}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Image"
                        type="file"
                        name="image"
                        className={`form-control ${
                          touched.image && errors.image ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setImage(e.target.files[0]);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.image && errors.image ? (
                            <p className="text-danger">{errors.image}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>
                </Row>
                <Row className="d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center mt-3">
                  <Col className="d-flex justify-content-start align-items-center">
                    <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label="Cancel"
                    />
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center">
                    <BasicButton
                      className="m-1"
                      label="Save"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={isSubmitting}
                      onClick={
                        title === "" ||
                        body === "" ||
                        image === "" ||
                        (touched.title && errors.title) ||
                        (touched.body && errors.body) ||
                        (touched.image && errors.image)
                          ? handleSubmit
                          : handleAddData
                      }
                    />
                  </Col>
                </Row>
              </Form>
            </>
          )}
        </Formik>
      </Container>
    </div>
  );
};
export default AddGeneralNotification;
