import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Teachers from "./Teachers";

const School = () => {
  const [show, setShow] = useState(false);

  const formFields = [
    "Full Name",
    "Date of Birth",
    "Email Address",
    "Contact Number",
    "Grade Level Applying For",
    "Address",
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-light shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand d-flex align-items-center" href="#banner">
            <img
              src="images/Navy Blue Gold and White Simple Modern School Logo.png"
              alt="School Logo"
              style={{ height: "50px", marginRight: "10px" }}
            />
            <span className="fw-bold">School System</span>
          </a>

          <ul className="nav">
            <li className="nav-item">
              <a href="#banner" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Button
                variant="link"
                className="nav-link"
                onClick={() => setShow(true)}
              >
                Admission
              </Button>
            </li>
            <li className="nav-item">
              <a href="#faculty" className="nav-link">
                Faculty
              </a>
            </li>
            <li className="nav-item">
              <a href="#vision" className="nav-link">
                Vision
              </a>
            </li>
            <li className="nav-item">
              <a href="Teachers.js" className="nav-link">
                Teachers
              </a>
            </li>
            <li className="nav-item">
              <a href="#subjects" className="nav-link">
                Subjects
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Banner */}
      <div className="banner position-relative" id="banner">
        <img
          src="images/ban3.jpg"
          alt="School Banner"
          className="w-100"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <div className="banner-text position-absolute top-50 start-50 translate-middle text-center text-dark">
          <h1 className="fw-bold">Get a Seat Now</h1>
          <p>Join our vibrant learning community today!</p>
          <Button variant="warning" onClick={() => setShow(true)}>
            Enroll Now
          </Button>
        </div>
      </div>

      {/* React-Bootstrap Modal */}
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Our School!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form id="enrollForm">
            {formFields.map((label, index) => (
              <Form.Group className="mb-3" key={index}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type="text" required placeholder={label} />
              </Form.Group>
            ))}
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Vision Section */}
      <section className="py-5 text-dark" id="vision">
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-5">Our Vision</h2>
          <div className="position-relative">
            <img
              src="images/border.jpg"
              alt="Vision"
              className="w-100 img-fluid rounded shadow"
              style={{ height: "70vh", objectFit: "cover" }}
            />
            <div className="position-absolute top-50 start-50 translate-middle px-5 text-center">
              <p className="fs-4 fw-semibold text-dark">
                To be a leading institution providing quality education that
                nurtures holistic student development, empowering them as
                lifelong learners and responsible global citizens.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 faculty-section zoom-in" id="faculty">
        <div
          className="container"
          style={{
            backgroundImage: "url(images/border.jpg)",
            backgroundSize: "cover",
            objectFit: "fill",
          }}
        >
          <h2 className="mb-5 text-center text-primary fw-bold">Our Faculty</h2>

          <div className="row g-4">
            {/* Faculty Member 1 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-center bg-white rounded shadow highlight-box">
                <img
                  src="images/beautiful-young-arabian-woman-with-dark-skin-wears-transparent-spectacles-holds-papers-notepad-has-toothy-smile.jpg"
                  alt="Dr. Sarah Johnson"
                  className="mb-3 rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">Dr. Sarah</h5>
                <p className="mb-1 text-muted">Head of Science Department</p>
                <p className="text-secondary small">
                  Dr. Johnson inspires curiosity through hands-on experiments
                  and innovative teaching methods that make science engaging and
                  practical.
                </p>
              </div>
            </div>

            {/* Faculty Member 2 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-center bg-white rounded shadow highlight-box">
                <img
                  src="images/international-day-education-celebration.jpg"
                  alt="Mr. David Lee"
                  className="mb-3 rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">Ms. Misha</h5>
                <p className="mb-1 text-muted">Mathematics Teacher</p>
                <p className="text-secondary small">
                  Ms. Misha makes math simple and fun by connecting real-life
                  examples with problem-solving strategies, encouraging logical
                  thinking in every student.
                </p>
              </div>
            </div>

            {/* Faculty Member 3 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-center bg-white rounded shadow highlight-box">
                <img
                  src="images/medium-shot-man-correcting-grammar-mistakes.jpg"
                  alt="Ms. Emily Davis"
                  className="mb-3 rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">Ms. Emily Davis</h5>
                <p className="mb-1 text-muted">English Literature Teacher</p>
                <p className="text-secondary small">
                  Ms. Davis brings literature to life through storytelling,
                  debates, and creative writing exercises that enhance students’
                  critical thinking.
                </p>
              </div>
            </div>

            {/* Faculty Member 4 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-center bg-white rounded shadow highlight-box">
                <img
                  src="images/modern-muslim-woman-hijab-office-room.jpg"
                  alt="Mr. James Carter"
                  className="mb-3 rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">Ms. Iqra</h5>
                <p className="mb-1 text-muted">Computer Science Instructor</p>
                <p className="text-secondary small">
                  With expertise in coding and AI, Ms. Iqra empowers students to
                  innovate and create through hands-on technology-based
                  learning.
                </p>
              </div>
            </div>

            {/* Faculty Member 5 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-center bg-white rounded shadow highlight-box">
                <img
                  src="images/woman-holding-book-front-view.jpg"
                  alt="Mrs. Olivia Brown"
                  className="mb-3 rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">Ms. Komal</h5>
                <p className="mb-1 text-muted">
                  History & Social Studies Teacher
                </p>
                <p className="text-secondary small">
                  Mrs. Komal makes history come alive by connecting past events
                  to current global issues, fostering awareness and civic
                  responsibility.
                </p>
              </div>
            </div>

            {/* Faculty Member 6 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-center bg-white rounded shadow highlight-box">
                <img
                  src="images/portrait-happy-young-man-eyeglasses.jpg"
                  alt="Mr. Daniel Smith"
                  className="mb-3 rounded-circle img-fluid"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5 className="fw-bold">Mr. Daniel Smith</h5>
                <p className="mb-1 text-muted">Physical Education Coach</p>
                <p className="text-secondary small">
                  Mr. Smith promotes physical fitness, teamwork, and discipline
                  through engaging sports activities and leadership training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="overflow-hidden relative py-5 text-dark"
        id="subjects"
        style={{
          backgroundImage: "url(images/students-3518726_1280.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container z-10 text-center position-relative">
          <h2 className="mb-4 text-primary fw-bold display-6">
            Subjects Offered
          </h2>
          <p className="mb-5 text-secondary lead">
            Our curriculum inspires creativity, curiosity, and critical thinking
            across a wide range of disciplines.
          </p>

          <div className="justify-content-center row g-4">
            {[
              {
                icon: "bi-calculator",
                title: "Mathematics",
                text: "Building problem-solving skills and logical reasoning.",
              },
              {
                icon: "bi-flask",
                title: "Science",
                text: "Exploring nature, experiments, and discovery.",
              },
              {
                icon: "bi-book",
                title: "English Literature",
                text: "Fostering creativity through stories, poetry, and drama.",
              },
              {
                icon: "bi-hourglass-split",
                title: "History",
                text: "Understanding our world through the lessons of the past.",
              },
              {
                icon: "bi-laptop",
                title: "Computer Science",
                text: "Innovating through coding, design, and digital thinking.",
              },
              {
                icon: "bi-palette",
                title: "Art & Design",
                text: "Expressing creativity through colors and imagination.",
              },
              {
                icon: "bi-globe-americas",
                title: "Geography",
                text: "Studying Earth’s people, landscapes, and environments.",
              },
              {
                icon: "bi-music-note-beamed",
                title: "Music",
                text: "Discovering rhythm, melody, and harmony.",
              },
              {
                icon: "bi-heart-pulse",
                title: "Physical Education",
                text: "Promoting health, teamwork, and fitness.",
              },
              {
                icon: "bi-translate",
                title: "Languages",
                text: "Learning communication and culture from around the world.",
              },
            ].map((subject, index) => (
              <div className="col-6 col-md-4 col-lg-2" key={index}>
                <div className="p-4 h-100 subject-card">
                  <i
                    className={`mb-3 text-primary bi ${subject.icon} fs-1`}
                  ></i>
                  <h5 className="fw-bold">{subject.title}</h5>
                  <p className="opacity-75 small">{subject.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <button
              type="button"
              className="px-5 py-2 rounded-pill shadow-sm btn btn-primary fw-semibold"
              style={{
                background: "linear-gradient(135deg, #2563eb, #3b82f6)",
                border: "none",
              }}
              aria-label="See more subjects"
            >
              See More Subjects
            </button>
          </div>
        </div>

        <div
          className="top-0 w-100 h-100 position-absolute start-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)",
          }}
        ></div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-3 fw-semibold"
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
            {/* Left Section */}
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
              <p className="  text-center">
                © 2025{" "}
                <span className="text-primary">School Management System</span> |
                Developed by <strong className="text-dark">Amara Bibi</strong>
              </p>
            </div>

            {/* Right Section (Social Links) */}
            <div className="col-md-6 text-center text-md-end">
              <h5 className="fw-bold text-primary mb-3">Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a
                  href="https://facebook.com"
                  className="text-primary social-icon"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="text-info social-icon"
                  aria-label="Twitter"
                >
                  <i className="bi bi-twitter fs-4"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="text-danger social-icon"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram fs-4"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-primary social-icon"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default School;
