// src/Pages/About.js
import React from "react";

function About() {
  return (
    <section
      className="py-5 text-dark"
      id="about"
      style={{
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="container-fluid bg-white  rounded shadow-lg p-5"
        style={{ maxWidth: "1200px" }}
      >
        {/* Title Section */}
        <h2
          className="text-center text-primary fw-bold mb-4"
          style={{ fontSize: "6cap" }}
        >
          Our Core Values
        </h2>
        <p className="lead text-center text-dark mb-5 px-3">
          Our mission is to empower students with knowledge, creativity, and
          confidence for a brighter future.
        </p>

        <div className="text-center mb-4">
          <div className="row justify-content-center g-4 px-3">
            {[
              {
                icon: "bi bi-mortarboard-fill",
                title: "Excellence in Education",
                text: "We strive for academic distinction and continuous growth.",
                color: "bg-opacity-10 border-primary",
              },
              {
                icon: "bi bi-heart-fill",
                title: "Integrity & Respect",
                text: "We nurture character and empathy within every learner.",
                color: "bg-opacity-10 border-primary",
              },
              {
                icon: "bi bi-lightbulb-fill",
                title: "Innovation & Collaboration",
                text: "We encourage creativity and teamwork for modern learning.",
                color: "bg-opacity-10 border-primary",
              },
              {
                icon: "bi bi-globe",
                title: "Diversity & Inclusion",
                text: "We celebrate cultural diversity and inclusive learning.",
                color: "bg-opacity-10 border-primary",
              },
            ].map((value, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <div
                  className={`card h-100 shadow-sm border-2 ${value.color} rounded-4`}
                  style={{ minHeight: "220px" }}
                >
                  <div className="card-body text-center p-4">
                    {/* Icon (Black) */}
                    <i
                      className={`${value.icon} text-dark fs-1 mb-3`}
                      style={{ display: "block" }}
                    ></i>

                    {/* Title (Blue) */}
                    <h5 className="fw-bold text-primary mb-2">{value.title}</h5>

                    {/* Text */}
                    <p className="text-secondary small mb-0">{value.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
