import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./Pages/Navbar";
import HeroSection from "./Pages/Hero-section";
import Faculty from "./Pages/Faculty";
import Subjects from "./Pages/Subjects";
import Vision from "./Pages/Vision";
import Footer from "./Pages/Footer";
import About from "./Pages/Aboutus";
import Teachers from "./Pages/Teachers";
import AdmissionModal from "./Pages/Admission";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar setShow={setShow} />

      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection setShow={setShow} />
              <About />
              <Faculty />
              <Subjects />
              <Vision />
              <Footer />
              <AdmissionModal show={show} onHide={() => setShow(false)} />
            </>
          }
        />

        {/* 👩‍🏫 Teachers Page */}
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </>
  );
}

export default App;
