import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // ✅ Ensure Bootstrap icons work
import "../App.css";
const Subjects = () => {
  const subjects = [
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
  ];

  return (
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
        <h2
          className="mb-4 text-primary fw-bold display-6"
          style={{ fontSize: "6cap" }}
        >
          Subjects Offered
        </h2>
        <p className="mb-5 text-secondary lead">
          Our curriculum inspires creativity, curiosity, and critical thinking
          across a wide range of disciplines.
        </p>

        <div className="justify-content-center row g-4">
          {subjects.map((subject, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <div className="p-4 h-100 subject-card bg-white rounded shadow-sm hover-shadow transition">
                <i className={`mb-3 text-primary bi ${subject.icon} fs-1`}></i>
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

      {/* Light overlay effect */}
      <div
        className="top-0 w-100 h-100 position-absolute start-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent 70%)",
        }}
      ></div>
    </section>
  );
};

export default Subjects;
