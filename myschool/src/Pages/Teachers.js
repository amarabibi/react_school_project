import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Teachers() {
  // 🧮 Step 1: Store all teachers in state
  const [teachers, setTeachers] = useState([
    { id: 1, name: "John Smith", subject: "Math", email: "john@school.com" },
    { id: 2, name: "Sara Khan", subject: "English", email: "sara@school.com" },
  ]);

  // ✏️ Step 2: Store the data typed in input fields
  const [form, setForm] = useState({ name: "", subject: "", email: "" });

  // 🧰 Step 3: Track which teacher is being edited
  const [editId, setEditId] = useState(null);

  // 💡 Update form whenever the user types something
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ➕ Step 4: Add a new teacher
  const addTeacher = () => {
    if (!form.name || !form.subject || !form.email) {
      alert("Please fill all fields!");
      return;
    }

    const newTeacher = {
      id: teachers.length + 1,
      name: form.name,
      subject: form.subject,
      email: form.email,
    };

    setTeachers([...teachers, newTeacher]); // Add new teacher to the list
    setForm({ name: "", subject: "", email: "" }); // Clear input fields
  };

  // 🖋️ Step 5: Start editing an existing teacher
  const startEdit = (id) => {
    const teacher = teachers.find((t) => t.id === id);
    setForm(teacher);
    setEditId(id);
  };

  // 🔁 Step 6: Save the updated teacher
  const updateTeacher = () => {
    const updatedList = teachers.map((t) =>
      t.id === editId ? { ...t, ...form } : t
    );
    setTeachers(updatedList);
    setForm({ name: "", subject: "", email: "" });
    setEditId(null);
  };

  // ❌ Step 7: Delete a teacher
  const deleteTeacher = (id) => {
    const updatedList = teachers.filter((t) => t.id !== id);
    setTeachers(updatedList);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Teachers Management</h2>

      {/* 🎯 Add or Edit Form */}
      <div className="card p-4 mb-4 shadow-sm">
        <h5>{editId ? "Edit Teacher" : "Add New Teacher"}</h5>

        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Teacher Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-3 text-end">
          {editId ? (
            <button className="btn btn-warning" onClick={updateTeacher}>
              Update Teacher
            </button>
          ) : (
            <button className="btn btn-success" onClick={addTeacher}>
              Add Teacher
            </button>
          )}
        </div>
      </div>

      {/* 📋 Teachers Table */}
      <table className="table table-bordered table-striped shadow-sm">
        <thead className="table-primary text-center">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Subject</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {teachers.length > 0 ? (
            teachers.map((t) => (
              <tr key={t.id}>
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.subject}</td>
                <td>{t.email}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => startEdit(t.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteTeacher(t.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-muted">
                No teachers available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* 🔙 Back Button */}
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Teachers;
