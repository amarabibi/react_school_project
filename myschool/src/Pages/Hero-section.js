import React from "react";
import { Button } from "react-bootstrap";

const HeroSection = ({ setShow }) => {
  return (
    <div className="banner position-relative" id="banner">
      <div className="banner-text position-absolute top-50 start-50 translate-middle text-center text-dark">
        <h1 className="fw-bold main" style={{ fontSize: "10cap" }}>
          Get a Seat Now
        </h1>
        <p>Join our vibrant learning community today!</p>
        <Button variant="warning" onClick={() => setShow(true)}>
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
