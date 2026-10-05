function Student({ name, rollNo, course, college }) {
  return (
    <div className="student-card">
      <h2>Student Profile</h2>

      <div className="student-info">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Roll No:</strong> {rollNo}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>College:</strong> {college}</p>
      </div>
    </div>
  );
}

export default Student;