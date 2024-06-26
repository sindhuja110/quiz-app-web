import { Formik } from "formik";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { TransactionHistorySchema } from "../../pages/TransactionHistory/TransactionHistoryValidation";
import BasicButton from "../../Components/BasicButton";
import TextInput from "../../Components/TextInput";

import { useAddTransactionhistoryMutation } from "../../redux/features/api/TransactionHistoryApi"
import { toast } from "react-toastify";



const AddTransactionhistory = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [upiId, setUpiId] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [image, setImage] = useState("");
  const [paidOn, setpaidOn] = useState("");



  
  const [TransactionhistoryAddData,{isLoading}]=useAddTransactionhistoryMutation();
  
 

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/admin/transaction-history");
  };

 
  const initialValues = {
    phoneNumber: "",
    upiId: "",
    modeOfPayment: "",
    amount: "",
    transactionId: "",
    image: "",
    paidOn:"",
   
    
  };
  const handleAddData = async () => {
    try {
      const response = await TransactionhistoryAddData ({
        phoneNumber: phoneNumber,
        upiId: upiId,
        modeOfPayment:modeOfPayment,
        amount: amount,
        transactionId: transactionId,
        image:image,
        paidOn:paidOn,
       
     
      
        
      });
    
   
      if (response?.data) {
        setPhoneNumber("");
        setUpiId("");
        setModeOfPayment("");
        setAmount("");
        setTransactionId("");
        setImage("");
        setpaidOn("");
        toast.success(response?.data?.message, { autoClose: 1000 });
        setTimeout(() => navigate("/admin/transaction-history"), 3000);
       
       
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
          validationSchema={TransactionHistorySchema}
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
                    <h4>Add Transaction History</h4>
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
                        (phoneNumber=== '')||
                        upiId === ''||
                        (modeOfPayment=== '')||
                        amount === ''||
                        (transactionId=== '')||
                        image === ''||

                          (touched.phoneNumber && errors.phoneNumber) ||
                        (touched.upiId && errors.upiId) ||
                        (touched.modeOfPayment && errors.modeOfPayment) ||
                        (touched.amount && errors.amount) || 
                        (touched.transactionId && errors.transactionId) ||
                        (touched.image && errors.image) 
                        
                       
                          ? handleSubmit
                          : handleAddData
                      }  />
                  </Col>
                </Row>
                <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
                  <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                 
                
                   
                    
                    <Col
                      className="m-2"
                      lg="6"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="phone Number"
                        type=""
                        name="phoneNumber"
                        className={`form-control ${
                          touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setPhoneNumber(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.phoneNumber && errors.phoneNumber ? (
                            <p className="text-danger">{errors.phoneNumber}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                

                    <Col
                      className="m-2"
                      lg="6"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Upi Id"
                        type=""
                        name="upiId"
                        className={`form-control ${
                          touched.upiId && errors.upiId ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setUpiId(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.upiId && errors.upiId ? (
                            <p className="text-danger">{errors.upiId}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="6"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Mode Of Payment"
                        type=""
                        name="modeOfPayment"
                        className={`form-control ${
                          touched.modeOfPayment && errors.modeOfPayment ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setModeOfPayment(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.modeOfPayment && errors.modeOfPayment ? (
                            <p className="text-danger">{errors.modeOfPayment}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
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


                    <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
                
                
                   
                    
                 
                    <Col
                      className="m-2"
                      lg="6"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Amount"
                        type=""
                        name="amount"
                        className={`form-control ${
                          touched.amount && errors.amount ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setAmount(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.amount && errors.amount ? (
                            <p className="text-danger">{errors.amount}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>
                


                    <Col
                      className="m-2"
                      lg="6"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Transaction Id"
                        type=""
                        name="transactionId"
                        className={`form-control ${
                          touched.transactionId && errors.transactionId ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setTransactionId(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.transactionId && errors.transactionId ? (
                            <p className="text-danger">{errors.transactionId}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>

                    <Col
                      className="m-2"
                      lg="6"
                      xxl="6"
                      xl="12"
                      md="12"
                      sm="12"
                    >
                      <TextInput
                        label="Paid On"
                        type="date"
                        name="paidOn"
                        className={`form-control ${
                          touched.paidOn && errors.paidOn ? "is-invalid" : ""
                        }`}
                        onChange={(e) => {
                            setpaidOn(e.target.value);
                          handleChange(e);
                        }}
                        onBlur={handleBlur}
                        validation={
                          touched.paidOn && errors.paidOn ? (
                            <p className="text-danger">{errors.paidOn}</p>
                          ) : (
                            ""
                          )
                        }
                      />
                    </Col>


                    


                 
                    </Col>
                </Row>

                <Row className="d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center">
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
                        (phoneNumber=== '')||
                        upiId === ''||
                        (modeOfPayment=== '')||
                        amount === ''||
                        (transactionId=== '')||
                        image === ''||

                          (touched.phoneNumber && errors.phoneNumber) ||
                        (touched.upiId && errors.upiId) ||
                        (touched.modeOfPayment && errors.modeOfPayment) ||
                        (touched.amount && errors.amount) || 
                        (touched.transactionId && errors.transactionId) ||
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
export default AddTransactionhistory;