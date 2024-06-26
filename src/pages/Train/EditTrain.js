import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { TrainSchema } from "../../pages/Train/TrainValidation";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../../src/components/BasicButton";
import TextInput from "../../../src/components/TextInput";
import {
  useEditTrainMutation,
  useGetTrainByIdQuery,
} from "../../redux/features/api/TrainApi";

import { toast } from "react-toastify";
const EditTrain = () => {
  const navigate = useNavigate();
  const [TrainNo, setTrainNo] = useState("");
  const [TrainName, setTrainName] = useState("");
  const [tamilTrainName, setTamilTrainName] = useState("");
  const [teluguTrainName, setTeluguTrainName] = useState("");
  const [kannadaTrainName, setkannadaTrainName] = useState("");
  const [hindiTrainName, setHindiTrainName] = useState("");

  const { id } = useParams();
  const Id = id.startsWith(":") ? id.slice(1) : id;
  const [EditTrainData, { isLoading }] = useEditTrainMutation();
  const { data: TrainData } = useGetTrainByIdQuery(Id);

  // console.log(id);
  console.log(TrainData);
  const handleCancel = () => {
    navigate("/admin/train");
  };
  useEffect(() => {
    if (TrainData && TrainData.data) {
      setTrainNo(TrainData.data.TrainNo);
      setTrainName(TrainData.data.TrainName);
      setTamilTrainName(TrainData.data.tamilTrainName);
      setTeluguTrainName(TrainData.data.teluguTrainName);
      setkannadaTrainName(TrainData.data.kannadaTrainName);
      setHindiTrainName(TrainData.data.hindiTrainName);
    }
  }, [TrainData]);
  // console.log(TrainData);
  const initialValues = {
    TrainNo: "",
    TrainName: "",
    tamilTrainName: "",
    teluguTrainName: "",
    kannadaTrainName: "",
    hindiTrainName: "",
  };
  const handleEditData = async () => {
    try {
      const response = await EditTrainData({
        id: Id,
        data: {
          TrainNo: TrainNo,
          TrainName: TrainName,
          tamilTrainName: tamilTrainName,
          teluguTrainName: teluguTrainName,
          kannadaTrainName: kannadaTrainName,
          hindiTrainName: hindiTrainName,
        },
      });

      console.log(response);

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        navigate("/admin/train");
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
          validationSchema={TrainSchema}
          onSubmit={handleEditData}
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
                <Row className="d-flex flex-row justify-content-between align-items-center mt-3">
                  <Col className="d-flex justify-content-start mb-3">
                    <h4 onClick={handleCancel}>
                      <AiOutlineArrowLeft />
                    </h4>
                    <h4>Edit Train</h4>
                  </Col>
                  <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
                    <BasicButton
                      className="m-1"
                      variant="secondary"
                      onClick={handleCancel}
                      label="Cancel"
                    />
                    <BasicButton
                      className="m-2 d-flex justify-content-start align-items-center text-light"
                      variant={"warning"}
                      type="button"
                      disabled={isSubmitting}
                      onClick={
                        TrainNo === "" ||
                        TrainName === "" ||
                        tamilTrainName === "" ||
                        teluguTrainName === "" ||
                        kannadaTrainName === "" ||
                        hindiTrainName === "" ||
                        (touched.TrainNo && errors.TrainNo) ||
                        (touched.TrainName && errors.TrainName) ||
                        (touched.tamilTrainName && errors.tamilTrainName) ||
                        (touched.teluguTrainName && errors.teluguTrainName) ||
                        (touched.kannadaTrainName && errors.kannadaTrainName) ||
                        (touched.hindiTrainName && errors.hindiTrainName)
                          ? handleSubmit
                          : handleEditData
                      }
                      isLoading={isLoading}
                      label={"Update"}
                    />
                  </Col>
                </Row>

                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <h4 className="mb-4">English:</h4>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Train No"
                        type=""
                        name="TrainNo"
                        value={TrainNo}
                        className={`form-control ${
                          touched.TrainNo && errors.TrainNo ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTrainNo(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.TrainNo && errors.TrainNo ? (
                            <p className="text-danger">{errors.TrainNo}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Train Name"
                        type=""
                        name="TrainName"
                        value={TrainName}
                        className={`form-control ${
                          touched.TrainName && errors.TrainName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTrainName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.TrainName && errors.TrainName ? (
                            <p className="text-danger">{errors.TrainName}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>

                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <h4 className="mb-4">Tamil:</h4>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="ரயில் பெயர்"
                        type=""
                        name="tamilTrainName"
                        value={tamilTrainName}
                        className={`form-control ${
                          touched.tamilTrainName && errors.tamilTrainName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTamilTrainName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.tamilTrainName && errors.tamilTrainName ? (
                            <p className="text-danger">
                              {errors.tamilTrainName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>
                </Row>

                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <h4 className="mb-4">Hindi:</h4>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="ट्रेन का नाम"
                        type=""
                        name="hindiTrainName"
                        value={hindiTrainName}
                        className={`form-control ${
                          touched.hindiTrainName && errors.hindiTrainName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHindiTrainName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.hindiTrainName && errors.hindiTrainName ? (
                            <p className="text-danger">
                              {errors.hindiTrainName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>

                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <h4 className="mb-4">Telugu:</h4>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="రైలు పేరు"
                        type=""
                        name="teluguTrainName"
                        value={teluguTrainName}
                        className={`form-control ${
                          touched.teluguTrainName && errors.teluguTrainName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTeluguTrainName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.teluguTrainName && errors.teluguTrainName ? (
                            <p className="text-danger">
                              {errors.teluguTrainName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>
                </Row>

                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <h4 className="mb-4">Kannada:</h4>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="ರೈಲು ಹೆಸರು"
                        type=""
                        name="kannadaTrainName"
                        value={kannadaTrainName}
                        className={`form-control ${
                          touched.kannadaTrainName && errors.kannadaTrainName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setkannadaTrainName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.kannadaTrainName &&
                          errors.kannadaTrainName ? (
                            <p className="text-danger">
                              {errors.kannadaTrainName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>
                </Row>

                <Row className=" mt-3  d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center mt-3">
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
                      className="m-2 d-flex justify-content-start align-items-center text-light"
                      variant={"warning"}
                      type="button"
                      disabled={isSubmitting}
                      onClick={
                        TrainNo === "" ||
                        TrainName === "" ||
                        tamilTrainName === "" ||
                        teluguTrainName === "" ||
                        kannadaTrainName === "" ||
                        hindiTrainName === "" ||
                        (touched.TrainNo && errors.TrainNo) ||
                        (touched.TrainName && errors.TrainName) ||
                        (touched.tamilTrainName && errors.tamilTrainName) ||
                        (touched.teluguTrainName && errors.teluguTrainName) ||
                        (touched.kannadaTrainName && errors.kannadaTrainName) ||
                        (touched.hindiTrainName && errors.hindiTrainName)
                          ? handleSubmit
                          : handleEditData
                      }
                      isLoading={isLoading}
                      label={"Update"}
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

export default EditTrain;
