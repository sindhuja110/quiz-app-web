// import { Formik } from "formik";
// import React, { useState } from "react";
// import { Col, Container, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import UserListSchema from '../../pages/Userlist/UserValidation';
// import BasicButton from "../../../src/components/BasicButton";
// import TextInput from "../../../src/components/TextInput";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

// import { useAddUserListMutation } from "../../redux/features/api/UserListApi"
// import { toast } from "react-toastify";

// const AddUser = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordIcon, setPasswordIcon] = useState(false);
//   const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false);
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [UserAddData, { isLoading }] = useAddUserListMutation();
//   const navigate = useNavigate();

//   const handleCancel = () => {
//     navigate("/admin/user-list");
//   };

//   const initialValues = {
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };

//   const showPassword = () => {
//     let eye = document.getElementById("password");
//     if (eye.type === "password") {
//       eye.type = "text";
//       setPasswordIcon(true);
//     } else {
//       eye.type = "password";
//       setPasswordIcon(false);
//     }
//   };

//   const showConfirmPassword = () => {
//     let eye = document.getElementById("confirmPassword");
//     if (eye.type === "password") {
//       eye.type = "text";
//       setConfirmPasswordIcon(true);
//     } else {
//       eye.type = "password";
//       setConfirmPasswordIcon(false);
//     }
//   };

//   const handleAddData = async () => {
//     try {
//       // Check if passwords match
//       if (password !== confirmPassword) {
//         // Set error message for confirm password field
//         console.log("Passwords do not match");
//         return;
//       }

//       const response = await UserAddData({
//         email: email,
//         password: password,
//         confirmPassword: confirmPassword,
//       });

//       if (response?.data) {
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");

//         navigate("/admin/user-list");
//         toast.success(response?.data?.message, { autoClose: 1000 });
//         setTimeout(() => navigate("/admin/user-list"), 3000);
//         console.log(response.error.data);
//       } else {
//         toast.error(response?.error?.data.error, { autoClose: 1000 });
//         console.log("else part");
//         console.log(response.error.data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <Container fluid>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={UserListSchema}
//           onSubmit={handleAddData}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//             handleSubmit,
//             isSubmitting,
//           }) => (
//             <>
//               <Form>
//                 <Row className="d-flex flex-row justify-content-between align-items-center">
//                   <Col className="d-flex justify-content-start mb-3 mt-3">
//                     <h4 onClick={handleCancel}>
//                       <AiOutlineArrowLeft />
//                     </h4>
//                     <h4>Add User</h4>
//                   </Col>
//                   <Col className="d-sm-none d-none d-md-none d-lg-flex d-xxl-flex d-xl-flex flex-row justify-content-end align-items-center">
//                     <BasicButton
//                       className="m-1"
//                       variant="secondary"
//                       onClick={handleCancel}
//                       label="Cancel"
//                     />
//                     <BasicButton
//                       className="m-1"
//                       label="Save"
//                       type="button"
//                       isLoading={isLoading}
//                       loaderVariant="info"
//                       disabled={isSubmitting}
//                       onClick={
//                         (email === '') ||
//                         (password === '') ||
//                         confirmPassword === '' ||
//                         (touched.email && errors.email) ||
//                         (touched.password && errors.password) ||
//                         (touched.confirmPassword && errors.confirmPassword)
//                           ? handleSubmit
//                           : handleAddData
//                       }
//                     />
//                   </Col>
//                 </Row>
//                 <Row className="d-flex flex-wrap flex-lg-row flex-xxl-row flex-xl-row flex-column flex-md-column flex-sm-column  mt-4">
//                   <Col className="m-1 p-4 d-flex flex-wrap flex-column shadow rounded">
//                     <Col
//                       className="m-2"
//                       lg="6"
//                       xxl="6"
//                       xl="12"
//                       md="12"
//                       sm="12"
//                     >
//                       <TextInput
//                         label="Email"
//                         type="email"
//                         name="email"
//                         className={`form-control ${
//                           touched.email && errors.email ? "is-invalid" : ""
//                         }`}
//                         onChange={(e) => {
//                           setEmail(e.target.value);
//                           handleChange(e);
//                         }}
//                         onBlur={handleBlur}
//                         validation={
//                           touched.email && errors.email ? (
//                             <p className="text-danger">{errors.email}</p>
//                           ) : (
//                             ""
//                           )
//                         }
//                       />
//                     </Col>
//                     <Col
//                       className="m-2"
//                       lg="6"
//                       xxl="6"
//                       xl="12"
//                       md="12"
//                       sm="12"
//                     >
//                       <Row className="d-flex flex-row justify align-items-center">
//                         <Col className="d-flex flex-row justify-end align-items-center">
//                           <Form.Label
//                             htmlFor="password*"
//                             className="d-flex flex-row justify-start"
//                           >
//                             password<span className="text-danger">*</span>
//                           </Form.Label>
//                         </Col>
//                       </Row>
//                       <Row className="d-flex flex-row justify-between align-items-center">
//                         <Col className="d-flex flex-row justify-content-end align-items-center">
//                           <Form.Control
//                             name="password"
//                             type="password"
//                             size="md"
//                             id="password"
//                             className={`position-relative form-control ${
//                               touched.password && errors.password
//                                 ? "border-danger"
//                                 : ""
//                             }`}
//                             onChange={(e) => {
//                               setPassword(e.target.value.trim());
//                               handleChange(e);
//                             }}
//                             onBlur={handleBlur}
//                           ></Form.Control>
//                           <div
//                             className="position-absolute m-2 pointer"
//                             onClick={showPassword}
//                           >
//                             {password ? (
//                               <>
//                                 {!passwordIcon ? (
//                                   <AiOutlineEyeInvisible />
//                                 ) : (
//                                   <AiOutlineEye />
//                                 )}
//                               </>
//                             ) : (
//                               ""
//                             )}
//                           </div>
//                         </Col>
//                       </Row>
//                       {touched.password && errors.password ? (
//                         <p className="text-danger">{errors.password}</p>
//                       ) : (
//                         ""
//                       )}
//                     </Col>
//                     <Col className="m-2" lg="6" xxl="6" xl="12" md="12" sm="12">
//                       <Row className="d-flex flex-row justify align-items-center">
//                         <Col className="d-flex flex-row justify-end align-items-center">
//                           <Form.Label
//                             htmlFor="confirmPassword"
//                             className="d-flex flex-row justify-start"
//                           >
//                             Confirm Password<span className="text-danger">*</span>
//                           </Form.Label>
//                         </Col>
//                       </Row>
//                       <Row className="d-flex flex-row justify-between align-items-center">
//                         <Col className="d-flex flex-row justify-content-end align-items-center">
//                           <Form.Control
//                             name="confirmPassword"
//                             type="password"
//                             size="md"
//                             id="confirmPassword"
//                             className={`position-relative form-control ${
//                               touched.confirmPassword && errors.confirmPassword
//                                 ? "border-danger"
//                                 : ""
//                             }`}
//                             onChange={(e) => {
//                               setConfirmPassword(e.target.value.trim());
//                               handleChange(e);
//                             }}
//                             onBlur={handleBlur}
//                           ></Form.Control>
//                             <div
//                             className="position-absolute m-2 pointer"
//                             onClick={showConfirmPassword}
//                           >
//                             {confirmPassword ? (
//                               <>
//                                 {!confirmPasswordIcon ? (
//                                   <AiOutlineEyeInvisible />
//                                 ) : (
//                                   <AiOutlineEye />
//                                 )}
//                               </>
//                             ) : (
//                               ""
//                             )}
//                           </div>
//                         </Col>
//                       </Row>
//                       {touched.confirmPassword && errors.confirmPassword && (
//                         <p className="text-danger">{errors.confirmPassword}</p>
//                       )}
//                     </Col>
//                   </Col>
//                 </Row>
//                 <Row className="d-sm-flex d-flex d-md-flex d-lg-none d-xxl-none d-xl-none flex-row justify-content-between align-items-center">
//                   <Col className="d-flex justify-content-start align-items-center">
//                     <BasicButton
//                       className="m-1"
//                       variant="secondary"
//                       onClick={handleCancel}
//                       label="Cancel"
//                     />
//                   </Col>
//                   <Col className="d-flex justify-content-end align-items-center">
//                     <BasicButton
//                       className="m-1"
//                       label="Save"
//                       type="button"
//                       isLoading={isLoading}
//                       loaderVariant="info"
//                       disabled={isSubmitting}
//                       onClick={
//                         (email === '') ||
//                         (password === '') ||
//                         confirmPassword === '' ||
//                         (touched.email && errors.email) ||
//                         (touched.password && errors.password) ||
//                         (touched.confirmPassword && errors.confirmPassword)
//                           ? handleSubmit
//                           : handleAddData
//                       }
//                     />
//                   </Col>
//                 </Row>
//               </Form>
//             </>
//           )}
//         </Formik>
//       </Container>
//     </div>
//   );
// };
// export default AddUser;
