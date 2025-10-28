import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
const Footer = () => {
  return (
    <footer
      className="text-center py-4 fw-semibold"
      style={{
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        color: "#333",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Contact Section */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h5 className="fw-bold text-primary mb-3">Contact Us</h5>
            <p className="mb-2">
              <i className="bi bi-envelope-fill text-primary me-2"></i>
              <a
                href="mailto:info@school.edu"
                className="text-decoration-none text-dark fw-semibold"
              >
                info@school.edu
              </a>
            </p>
            <p className="mb-2">
              <i className="bi bi-telephone-fill text-primary me-2"></i>
              <a
                href="tel:+923001234567"
                className="text-decoration-none text-dark fw-semibold"
              >
                +92 300 1234567
              </a>
            </p>
            <p className="mt-3 mb-0 text-center text-md-start">
              © 2025{" "}
              <span className="text-primary">School Management System</span> |
              Developed by <strong className="text-dark">Amara Bibi</strong>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-6 text-center text-md-end">
            <h5 className="fw-bold text-primary mb-3">Follow Us</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="https://facebook.com"
                className="text-primary social-icon"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                className="text-info social-icon"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                className="text-danger social-icon"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="text-primary social-icon"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
