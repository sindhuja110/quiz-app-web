import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Form, Row, Col, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { LoaclTrainSchema } from "../../pages/LocalTrain/LocalTrainValidation";
import { useEditLocalTrainMutation ,useGetLocalTrainByIdQuery} from "../../redux/features/api/LocalTrainApi";
import { toast } from "react-toastify";
import TextInput from "../../Components/TextInput";
import BasicButton from "../../Components/BasicButton";
import { AiOutlineArrowLeft } from "react-icons/ai";

const EditTrain = () => {
  const navigate = useNavigate();
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
  const { id } = useParams();
  const Id = id && id.startsWith(":") ? id.slice(1) : id;
  const [EditLocalTrainData, { isLoading }] = useEditLocalTrainMutation();
  const { data: LocalTrainData } = useGetLocalTrainByIdQuery({id:Id,city:city});

  console.log(id);
  console.log(city);
  console.log(LocalTrainData);

  useEffect(() => {
    if (LocalTrainData && LocalTrainData.data)
     {
      setTrainNo(LocalTrainData.data.trainNo);
      setTrainName(LocalTrainData.data.trainName);
      setType(LocalTrainData.data.type);
      setZone(LocalTrainData.data.zone);
      setUpdatedOn(LocalTrainData.data.updatedOn);
      setFrom(LocalTrainData.data.from);
      setDeparture(LocalTrainData.data.departure);
      setTo(LocalTrainData.data.to);
      setArrival(LocalTrainData.data.arrival);
      setDuration(LocalTrainData.data.duration);
      setDistance(LocalTrainData.data.distance);
      setSpeed(LocalTrainData.data.speed);
      setHalts(LocalTrainData.data.halts);
      setSClasses(LocalTrainData.data.sClasses);
      setSRunsOn(LocalTrainData.data.sRunsOn);
      setTrainID(LocalTrainData.data.trainID);
    }
  }, [LocalTrainData]);
 

  const handleCancel = () => {
    navigate("/admin/local-train");
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

  const handleEditData = async () => {
    try {
      const response = await EditLocalTrainData({
         id: Id, city:city,
        data: {
          trainNo:trainNo,
          trainName:trainName,
          type:type,
          zone:zone,
          updatedOn:updatedOn,
          from:from,
          departure:departure,
          to:to,
          arrival:arrival,
          duration:duration,
          distance:distance,
          speed:speed,
          halts:halts,
          sClasses:sClasses,
          sRunsOn:sRunsOn,
          trainID:trainID,
        },
      });
      if (response?.data) {
        setTrainNo("");
        setTrainName("");
        setType("");
        setZone("");
        setUpdatedOn("");
        setFrom("");
        setDeparture("");
        setTo("");
        setArrival("");
        setDuration("");
        setDistance("");
        setSpeed("");
        setHalts("");
        setSClasses("");
        setSRunsOn("");
        setTrainID("");

        toast.success(response?.data?.message, { autoClose: 1000 });
    navigate("/admin/local-train")
      } else {
        toast.error(response?.error?.data.error, { autoClose: 1000 });
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal Server Error", { autoClose: 2000 });
    }
  };
  return (
    <div>
      <Container fluid>
        <Formik
          initialValues={initialValues}
          validationSchema={LoaclTrainSchema}
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
                    <h4>Edit LocalTrain</h4>
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
                       trainNo  === "" ||
                       trainName  === "" || 
                       type === "" ||
                       zone  === "" ||
                       updatedOn  === "" ||
                       from  === "" ||     
                       departure === "" ||
                       to === "" ||
                       arrival  === "" ||
                       duration === "" ||
                       distance  === "" ||
                       speed === "" ||
                       halts  === "" ||
                       sClasses === "" || 
                       sRunsOn === "" ||
                       trainID  === "" ||          
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
                        (touched.duration && errors.duration) ||
                        (touched.halts && errors.halts) ||
                        (touched.duration && errors.duration) ||
                        (touched.sRunsOn && errors.sRunsOn) ||
                        (touched.trainID && errors.trainID)   
                        ? handleSubmit
                        : handleEditData
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
                        value={trainNo}
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
                        value={trainName}
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
                        value={type}
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
                        value={zone}
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
                        label="UpdatedOn"
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
                        value={from}
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
                        type=""
                        name="departure"
                        value={departure}
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
                        value={to}
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
                        type=""
                        name="arrival"
                        value={arrival}
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
                        value={duration}
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
                        value={distance}
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
                        value={speed}
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
                        value={halts}
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
                        value={sClasses}
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
                        value={sRunsOn}
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
                        value={trainID}
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
                     disabled={isSubmitting}
                     onClick={
                      trainNo  === "" ||
                      trainName  === "" || 
                      type === "" ||
                      zone  === "" ||
                      updatedOn  === "" ||
                      from  === "" ||     
                      departure === "" ||
                      to === "" ||
                      arrival  === "" ||
                      duration === "" ||
                      distance  === "" ||
                      speed === "" ||
                      halts  === "" ||
                      sClasses === "" || 
                      sRunsOn === "" ||
                      trainID  === "" ||          
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
                       (touched.duration && errors.duration) ||
                       (touched.halts && errors.halts) ||
                       (touched.duration && errors.duration) ||
                       (touched.sRunsOn && errors.sRunsOn) ||
                       (touched.trainID && errors.trainID)   
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

export default EditTrain;
