import * as React from "react";

import { RotatingLines } from "react-loader-spinner";
import { Container } from "react-bootstrap";

const Loader = () => (
  <Container className="vh-100 d-flex flex-column flex-wrap-wrap justify-content-center align-items-center">
    <RotatingLines
      visible={true}
      height="96"
      width="96"
      strokeColor="#0077B2"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
    <p >Loading Please Wait</p>
  </Container>
);

export default Loader;
