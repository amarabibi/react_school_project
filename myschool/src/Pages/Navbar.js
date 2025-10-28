import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavBar = ({ setShow }) => {
  return (
    <nav className="navbar bg-light shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand / Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/images/Navy Blue Gold and White Simple Modern School Logo.png"
            alt="School Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <span className="fw-bold">School System</span>
        </Link>

        {/* Nav Links */}
        <ul className="nav align-items-center">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>

          {/* ✅ Admission Button */}
          <li className="nav-item">
            <Button
              variant="link"
              className="nav-link text-primary"
              onClick={() => setShow(true)}
            >
              Admission
            </Button>
          </li>

          <li className="nav-item">
            <Link to="/faculty" className="nav-link">
              Faculty
            </Link>
          </li>

          <li className="nav-item">
            <a href="#vision" className="nav-link">
              Vision
            </a>
          </li>

          <li className="nav-item">
            <Link to="/teachers" className="nav-link">
              Teachers
            </Link>
          </li>

          <li className="nav-item">
            <a href="#subjects" className="nav-link">
              Subjects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
