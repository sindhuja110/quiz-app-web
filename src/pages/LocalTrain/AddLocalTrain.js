import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LoaclTrainSchema } from "../../pages/LocalTrain/LocalTrainValidation";
import BasicButton from "../../../src/components/BasicButton";
import TextInput from "../../../src/components/TextInput";
import { useAddLocalTrainMutation } from "../../redux/features/api/LocalTrainApi";
import { toast } from "react-toastify";

const AddLocalTrain = () => {
  const [trainNo, setTrainNo] = useState("");
  const [trainName, setTrainName] = useState("");
  const [type, setType] = useState("");
  const [zone, setZone] = useState("");
  const [updatedOn, setUpdatedOn] = useState("");
  const [from, setFrom] = useState("");
  const [departure, setDeparture] = useState("");
  const [to, setTo] = useState("");
  const [arrival, setArrival] = useState("");
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [speed, setSpeed] = useState("");
  const [halts, setHalts] = useState("");
  const [sClasses, setSClasses] = useState("");
  const [sRunsOn, setSRunsOn] = useState("");
  const [trainID, setTrainID] = useState("");
  const [city, setCity] = useState("chennai");
  const [AddLocalTrainData, { isLoading }] = useAddLocalTrainMutation();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/admin/local-train");
  };
  console.log(city);

  useEffect(() => {
    setCurrentDate();
  }, []);

  const setCurrentDate = () => {
    const currentDate = new Date().toLocaleDateString("en-GB");
    setUpdatedOn(currentDate);
  };

  const initialValues = {
    trainNo: "",
    trainName: "",
    type: "",
    zone: "",
    updatedOn: "",
    from: "",
    departure: "",
    to: "",
    arrival: "",
    duration: "",
    distance: "",
    speed: "",
    halts: "",
    sClasses: "",
    sRunsOn: "",
    trainID: "",
  };

  const handleAddData = async () => {
    try {
      const data = {
        trainNo: trainNo,
        trainName: trainName,
        from: from,
        type: type,
        zone: zone,
        updatedOn: updatedOn,
        speed: speed,
        departure: departure,
        to: to,
        arrival: arrival,
        duration: duration,
        distance: distance,
        halts: halts,
        sClasses: sClasses,
        sRunsOn: sRunsOn,
        trainID: trainID,
      };

      // Log the data to check the payload
      console.log("Request Payload:", data);

      const response = await AddLocalTrainData({ data, city });
      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        navigate("/admin/local-train");
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
          validationSchema={LoaclTrainSchema}
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
                    <h4>Add LocalTrain</h4>
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
                        trainNo === "" ||
                        trainName === "" ||
                        type === "" ||
                        zone === "" ||
                        updatedOn === "" ||
                        from === "" ||
                        departure === "" ||
                        to === "" ||
                        arrival === "" ||
                        duration === "" ||
                        distance === "" ||
                        speed === "" ||
                        halts === "" ||
                        sClasses === "" ||
                        sRunsOn === "" ||
                        trainID === "" ||
                        (touched.trainNo && errors.trainNo) ||
                        (touched.trainName && errors.trainName) ||
                        (touched.type && errors.type) ||
                        (touched.zone && errors.zone) ||
                        (touched.updatedOn && errors.updatedOn) ||
                        (touched.from && errors.from) ||
                        (touched.departure && errors.departure) ||
                        (touched.to && errors.to) ||
                        (touched.arrival && errors.arrival) ||
                        (touched.duration && errors.duration) ||
                        (touched.distance && errors.distance) ||
                        (touched.speed && errors.speed) ||
                        (touched.halts && errors.halts) ||
                        (touched.sClasses && errors.sClasses) ||
                        (touched.sRunsOn && errors.sRunsOn) ||
                        (touched.trainID && errors.trainID)
                          ? handleSubmit
                          : handleAddData
                      }
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Form
                    onSubmit={""}
                    className="d-flex flex-column flex-md-row align-items-md-center justify-content-start"
                  >
                    <Col xs={12} md={4} lg={3} className="m-2">
                      <Form.Group controlId="city">
                        <Form.Label className="fs-4">Select City:</Form.Label>
                        <Form.Control
                          as="select"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option value="chennai">Chennai</option>
                          <option value="delhi">Delhi</option>
                          <option value="pune">Pune</option>
                          <option value="kolkata">Kolkata</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="hyderabad">Hyderabad</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Form>
                </Row>

                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Train No"
                        type=""
                        name="trainNo"
                        className={`form-control ${
                          touched.trainNo && errors.trainNo ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTrainNo(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.trainNo && errors.trainNo ? (
                            <p className="text-danger">{errors.trainNo}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Train Name"
                        type=""
                        name="trainName"
                        className={`form-control ${
                          touched.trainName && errors.trainName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTrainName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.trainName && errors.trainName ? (
                            <p className="text-danger">{errors.trainName}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Type"
                        type=""
                        name="type"
                        className={`form-control ${
                          touched.type && errors.type ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setType(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.type && errors.type ? (
                            <p className="text-danger">{errors.type}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Zone"
                        type=""
                        name="zone"
                        className={`form-control ${
                          touched.zone && errors.zone ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setZone(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.zone && errors.zone ? (
                            <p className="text-danger">{errors.zone}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Created On"
                        type=""
                        name="updatedOn"
                        value={updatedOn}
                        className={`form-control ${
                          touched.updatedOn && errors.updatedOn
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setUpdatedOn(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.updatedOn && errors.updatedOn ? (
                            <p className="text-danger">{errors.updatedOn}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="From"
                        type=""
                        name="from"
                        className={`form-control ${
                          touched.from && errors.from ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setFrom(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.from && errors.from ? (
                            <p className="text-danger">{errors.from}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Departure "
                        type="time"
                        name="departure"
                        className={`form-control ${
                          touched.departure && errors.departure
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setDeparture(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.departure && errors.departure ? (
                            <p className="text-danger">{errors.departure}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="To"
                        type=""
                        name="to"
                        className={`form-control ${
                          touched.to && errors.to ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTo(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.to && errors.to ? (
                            <p className="text-danger">{errors.to}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                  </Col>

                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Arrival"
                        type="time"
                        name="arrival"
                        className={`form-control ${
                          touched.arrival && errors.arrival ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setArrival(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.arrival && errors.arrival ? (
                            <p className="text-danger">{errors.arrival}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Duration"
                        type=""
                        name="duration"
                        className={`form-control ${
                          touched.duration && errors.duration
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setDuration(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.duration && errors.duration ? (
                            <p className="text-danger">{errors.duration}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Distance"
                        type=""
                        name="distance"
                        className={`form-control ${
                          touched.distance && errors.distance
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setDistance(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.distance && errors.distance ? (
                            <p className="text-danger">{errors.distance}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Speed"
                        type=""
                        name="speed"
                        className={`form-control ${
                          touched.speed && errors.speed ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setSpeed(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.speed && errors.speed ? (
                            <p className="text-danger">{errors.speed}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Halts"
                        type=""
                        name="halts"
                        className={`form-control ${
                          touched.halts && errors.halts ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setHalts(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.halts && errors.halts ? (
                            <p className="text-danger">{errors.halts}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="SClasses"
                        type=""
                        name="sClasses"
                        className={`form-control ${
                          touched.sClasses && errors.sClasses
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setSClasses(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.sClasses && errors.sClasses ? (
                            <p className="text-danger">{errors.sClasses}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="SRunsOn"
                        type=""
                        name="sRunsOn"
                        className={`form-control ${
                          touched.sRunsOn && errors.sRunsOn ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setSRunsOn(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.sRunsOn && errors.sRunsOn ? (
                            <p className="text-danger">{errors.sRunsOn}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                    <Col
                      className="m-2"
                      lg="12"
                      xxl="12"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Train ID"
                        type=""
                        name="trainID"
                        className={`form-control ${
                          touched.trainID && errors.trainID ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setTrainID(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.trainID && errors.trainID ? (
                            <p className="text-danger">{errors.trainID}</p>
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
                        trainNo === "" ||
                        trainName === "" ||
                        type === "" ||
                        zone === "" ||
                        updatedOn === "" ||
                        from === "" ||
                        departure === "" ||
                        to === "" ||
                        arrival === "" ||
                        duration === "" ||
                        distance === "" ||
                        speed === "" ||
                        halts === "" ||
                        sClasses === "" ||
                        sRunsOn === "" ||
                        trainID === "" ||
                        (touched.trainNo && errors.trainNo) ||
                        (touched.trainName && errors.trainName) ||
                        (touched.type && errors.type) ||
                        (touched.zone && errors.zone) ||
                        (touched.updatedOn && errors.updatedOn) ||
                        (touched.from && errors.from) ||
                        (touched.departure && errors.departure) ||
                        (touched.to && errors.to) ||
                        (touched.arrival && errors.arrival) ||
                        (touched.duration && errors.duration) ||
                        (touched.distance && errors.distance) ||
                        (touched.speed && errors.speed) ||
                        (touched.halts && errors.halts) ||
                        (touched.sClasses && errors.sClasses) ||
                        (touched.sRunsOn && errors.sRunsOn) ||
                        (touched.trainID && errors.trainID)
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
export default AddLocalTrain;
