import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter all details");
      return;
    }

    setStudentName(name);
    setStudentEmail(email);

    setName("");
    setEmail("");
  };

  return (
    <div className="page">
      <div className="registration-card">

        <h1>Student Registration</h1>
        <p className="subtitle">Enter your details below</p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit">
            Submit
          </button>

        </form>

        <div className="result">

          <h2>Student Details</h2>

          <div className="result-box">
            <p>
              <strong>Student Name:</strong>
              <span>{studentName || "Not submitted"}</span>
            </p>

            <p>
              <strong>Student Email:</strong>
              <span>{studentEmail || "Not submitted"}</span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;