import React from "react";

const Vision = () => {
  return (
    <section className="py-5 text-dark" id="vision">
      <div className="container">
        <div className="position-relative">
          <img
            src="images/border.jpg"
            alt="Vision"
            className="w-100 img-fluid rounded shadow"
            style={{ height: "70vh", objectFit: "cover" }}
          />

          <div className="position-absolute top-50 start-50 translate-middle px-5 text-center">
            <h1
              className="text-center fw-bold text-primary mb-5"
              style={{ fontSize: "6cap" }}
            >
              Our Vision
            </h1>
            <p className="fs-4 fw-semibold text-dark bg-light bg-opacity-75 p-3 rounded shadow-sm">
              To be a leading institution providing quality education that
              nurtures holistic student development, empowering them as lifelong
              learners and responsible global citizens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
