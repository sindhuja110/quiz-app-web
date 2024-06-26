import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Col, Container, Form, Row } from "react-bootstrap";
import { StationSchema } from "../../pages/Station/StationValidation";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import BasicButton from "../../../src/components/BasicButton";
import TextInput from "../../../src/components/TextInput";
import {
  useEditStationMutation,
  useGetStationByIdQuery,
} from "../../redux/features/api/StationApi";
import { toast } from "react-toastify";

const EditStation = () => {
  const [stationCode, setStationCode] = useState("");
  const [stationName, setStationName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [tamilStationName, setTamilStationName] = useState("");
  const [tamilCity, setTamilCity] = useState("");
  const [tamilState, setTamilState] = useState("");
  const [teluguStationName, setTeluguStationName] = useState("");
  const [teluguCity, setTeluguCity] = useState("");
  const [teluguState, setTeluguState] = useState("");
  const [kannadaStationName, setKannadaStationName] = useState("");
  const [kannadaCity, setKannadaCity] = useState("");
  const [kannadaState, setKannadaState] = useState("");
  const [hindiStationName, setHindiStationName] = useState("");
  const [hindiCity, setHindiCity] = useState("");
  const [hindiState, setHindiState] = useState("");

  const { id } = useParams();
  const Id = id.startsWith(":") ? id.slice(1) : id;
  const [EditStationData, { isLoading }] = useEditStationMutation();
  const { data: editStation } = useGetStationByIdQuery(Id);

  console.log(id);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/station");
  };

  useEffect(() => {
    if (editStation && editStation.data) {
      setStationCode(editStation.data.stationCode);
      setStationName(editStation.data.stationName);
      setCity(editStation.data.city);
      setState(editStation.data.state);

      setTamilStationName(editStation.data.tamilStationName);
      setTamilCity(editStation.data.tamilCity);
      setTamilState(editStation.data.tamilState);
      setTeluguStationName(editStation.data.teluguStationName);
      setTeluguCity(editStation.data.teluguCity);
      setTeluguState(editStation.data.teluguState);
      setKannadaStationName(editStation.data.kannadaStationName);
      setKannadaCity(editStation.data.kannadaCity);
      setKannadaState(editStation.data.kannadaState);
      setHindiStationName(editStation.data.hindiStationName);
      setHindiCity(editStation.data.hindiCity);
      setHindiState(editStation.data.hindiState);
    }
  }, [editStation]);

  console.log(editStation);

  const initialValues = {
    stationCode: "",
    stationName: "",
    city: "",
    state: "",
    tamilStationName: "",
    tamilCity: "",
    tamilState: "",
    teluguStationName: "",
    teluguCity: "",
    teluguState: "",
    kannadaStationName: "",
    kannadaCity: "",
    kannadaState: "",
    hindiStationName: "",
    hindiCity: "",
    hindiState: "",
  };

  const handleEditData = async () => {
    try {
      const response = await EditStationData({
        id: Id,
        data: {
          stationCode: stationCode,
          stationName: stationName,
          city: city,
          state: state,
          tamilStationName: tamilStationName,
          tamilCity: tamilCity,
          tamilState: tamilState,
          teluguStationName: teluguStationName,
          teluguCity: teluguCity,
          teluguState: teluguState,
          kannadaStationName: kannadaStationName,
          kannadaCity: kannadaCity,
          kannadaState: kannadaState,
          hindiStationName: hindiStationName,
          hindiCity: hindiCity,
          hindiState: hindiState,
        },
      });

      console.log(response);

      if (response?.data) {
        toast.success(response?.data?.message, { autoClose: 1000 });
        console.log(response);
        navigate("/admin/station");
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
          validationSchema={StationSchema}
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
                    <h4>Edit Station</h4>
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
                      label="Update"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={isSubmitting}
                      onClick={
                        stationCode === "" ||
                        stationName === "" ||
                        city === "" ||
                        state === "" ||
                        tamilStationName === "" ||
                        tamilCity === "" ||
                        tamilState === "" ||
                        teluguStationName === "" ||
                        teluguCity === "" ||
                        teluguState === "" ||
                        kannadaStationName === "" ||
                        kannadaCity === "" ||
                        kannadaState === "" ||
                        hindiStationName === "" ||
                        hindiCity === "" ||
                        hindiState === "" ||
                        (touched.stationCode && errors.stationCode) ||
                        (touched.stationName && errors.stationName) ||
                        (touched.city && errors.city) ||
                        (touched.state && errors.state) ||
                        (touched.tamilStationName && errors.tamilStationName) ||
                        (touched.tamilCity && errors.tamilCity) ||
                        (touched.tamilState && errors.tamilState) ||
                        (touched.teluguStationName &&
                          errors.teluguStationName) ||
                        (touched.teluguCity && errors.teluguCity) ||
                        (touched.teluguState && errors.teluguState) ||
                        (touched.kannadaStationName &&
                          errors.kannadaStationName) ||
                        (touched.kannadaCity && errors.kannadaCity) ||
                        (touched.kannadaState && errors.kannadaState) ||
                        (touched.hindiStationName && errors.hindiStationName) ||
                        (touched.hindiCity && errors.hindiCity) ||
                        (touched.hindiState && errors.hindiState)
                          ? handleSubmit
                          : handleEditData
                      }
                    />
                  </Col>
                </Row>
                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                    <h4 className="mb-4">English:</h4>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Station Code"
                        type=""
                        name="stationCode"
                        value={stationCode}
                        className={`form-control ${
                          touched.stationCode && errors.stationCode
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setStationCode(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.stationCode && errors.stationCode ? (
                            <p className="text-danger">{errors.stationCode}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="Station Name"
                        type=""
                        name="stationName"
                        value={stationName}
                        className={`form-control ${
                          touched.stationName && errors.stationName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setStationName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.stationName && errors.stationName ? (
                            <p className="text-danger">{errors.stationName}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="City "
                        type=""
                        name="city"
                        value={city}
                        className={`form-control ${
                          touched.city && errors.city ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setCity(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.city && errors.city ? (
                            <p className="text-danger">{errors.city}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="State"
                        type=""
                        name="state"
                        value={state}
                        className={`form-control ${
                          touched.state && errors.state ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                          setState(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.state && errors.state ? (
                            <p className="text-danger">{errors.state}</p>
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
                        label="நிலையத்தின் பெயர்"
                        type=""
                        name="tamilStationName"
                        value={tamilStationName}
                        className={`form-control ${
                          touched.tamilStationName && errors.tamilStationName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTamilStationName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.tamilStationName &&
                          errors.tamilStationName ? (
                            <p className="text-danger">
                              {errors.tamilStationName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="நகரம் "
                        type=""
                        name="tamilCity"
                        value={tamilCity}
                        className={`form-control ${
                          touched.tamilCity && errors.tamilCity
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTamilCity(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.tamilCity && errors.tamilCity ? (
                            <p className="text-danger">{errors.tamilCity}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="மாநிலம்"
                        type=""
                        name="tamilState"
                        value={tamilState}
                        className={`form-control ${
                          touched.tamilState && errors.tamilState
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTamilState(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.tamilState && errors.tamilState ? (
                            <p className="text-danger">{errors.tamilState}</p>
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
                        label="स्थानक का नाम"
                        type=""
                        name="hindiStationName"
                        value={hindiStationName}
                        className={`form-control ${
                          touched.hindiStationName && errors.hindiStationName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHindiStationName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.hindiStationName &&
                          errors.hindiStationName ? (
                            <p className="text-danger">
                              {errors.hindiStationName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="शहर "
                        type=""
                        name="hindiCity"
                        value={hindiCity}
                        className={`form-control ${
                          touched.hindiCity && errors.hindiCity
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHindiCity(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.hindiCity && errors.hindiCity ? (
                            <p className="text-danger">{errors.hindiCity}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="राज्य"
                        type=""
                        name="hindiState"
                        value={hindiState}
                        className={`form-control ${
                          touched.hindiState && errors.hindiState
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setHindiState(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.hindiState && errors.hindiState ? (
                            <p className="text-danger">{errors.hindiState}</p>
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
                        label="స్టేషన్ పేరు"
                        type=""
                        name="teluguStationName"
                        value={teluguStationName}
                        className={`form-control ${
                          touched.teluguStationName && errors.teluguStationName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTeluguStationName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.teluguStationName &&
                          errors.teluguStationName ? (
                            <p className="text-danger">
                              {errors.teluguStationName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="నగరం "
                        type=""
                        name="teluguCity"
                        value={teluguCity}
                        className={`form-control ${
                          touched.teluguCity && errors.teluguCity
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTeluguCity(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.teluguCity && errors.teluguCity ? (
                            <p className="text-danger">{errors.teluguCity}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="రాష్ట్రం"
                        type=""
                        name="teluguState"
                        value={teluguState}
                        className={`form-control ${
                          touched.teluguState && errors.teluguState
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setTeluguState(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.teluguState && errors.teluguState ? (
                            <p className="text-danger">{errors.teluguState}</p>
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
                        label="ನಿಲ್ದಾಣದ ಹೆಸರು"
                        type=""
                        name="kannadaStationName"
                        value={kannadaStationName}
                        className={`form-control ${
                          touched.kannadaStationName &&
                          errors.kannadaStationName
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setKannadaStationName(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.kannadaStationName &&
                          errors.kannadaStationName ? (
                            <p className="text-danger">
                              {errors.kannadaStationName}
                            </p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="ನಗರ "
                        type=""
                        name="kannadaCity"
                        value={kannadaCity}
                        className={`form-control ${
                          touched.kannadaCity && errors.kannadaCity
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setKannadaCity(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.kannadaCity && errors.kannadaCity ? (
                            <p className="text-danger">{errors.kannadaCity}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
                      <TextInput
                        label="ರಾಜ್ಯ"
                        type=""
                        name="kannadaState"
                        value={kannadaState}
                        className={`form-control ${
                          touched.kannadaState && errors.kannadaState
                            ? "is-invalid"
                            : ""
                        }`}
                        onChange={(e) => {
                          setKannadaState(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.kannadaState && errors.kannadaState ? (
                            <p className="text-danger">{errors.kannadaState}</p>
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
                      className="m-1"
                      label="Update"
                      type="button"
                      isLoading={isLoading}
                      loaderVariant="info"
                      disabled={
                        isSubmitting ||
                        stationCode === "" ||
                        stationName === "" ||
                        city === "" ||
                        state === "" ||
                        tamilStationName === "" ||
                        tamilCity === "" ||
                        tamilState === "" ||
                        teluguStationName === "" ||
                        teluguCity === "" ||
                        teluguState === "" ||
                        kannadaStationName === "" ||
                        kannadaCity === "" ||
                        kannadaState === "" ||
                        hindiStationName === "" ||
                        hindiCity === "" ||
                        hindiState === "" ||
                        (touched.stationCode && errors.stationCode) ||
                        (touched.stationName && errors.stationName) ||
                        (touched.city && errors.city) ||
                        (touched.state && errors.state) ||
                        (touched.tamilStationName && errors.tamilStationName) ||
                        (touched.tamilCity && errors.tamilCity) ||
                        (touched.tamilState && errors.tamilState) ||
                        (touched.teluguStationName &&
                          errors.teluguStationName) ||
                        (touched.teluguCity && errors.teluguCity) ||
                        (touched.teluguState && errors.teluguState) ||
                        (touched.kannadaStationName &&
                          errors.kannadaStationName) ||
                        (touched.kannadaCity && errors.kannadaCity) ||
                        (touched.kannadaState && errors.kannadaState) ||
                        (touched.hindiStationName && errors.hindiStationName) ||
                        (touched.hindiCity && errors.hindiCity) ||
                        (touched.hindiState && errors.hindiState)
                          ? handleSubmit
                          : handleEditData
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

export default EditStation;
