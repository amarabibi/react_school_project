import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AdmissionModal = ({ show, onHide }) => {
  const formFields = [
    "Full Name",
    "Email Address",
    "Phone Number",
    "Grade Applying For",
    "Parent/Guardian Name",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admission form submitted successfully!");
    onHide(); // ✅ use onHide instead of setShow(false)
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to Our School!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="enrollForm" onSubmit={handleSubmit}>
          {formFields.map((label, index) => (
            <Form.Group className="mb-3" key={index}>
              <Form.Label>{label}</Form.Label>
              <Form.Control type="text" required placeholder={label} />
            </Form.Group>
          ))}

          <div className="text-end">
            <Button variant="secondary" onClick={onHide} className="me-2">
              Close
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AdmissionModal;
