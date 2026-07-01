import { useState } from "react";
import "./App.css";

function App() {

  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All");

  const students = [
    {
      id: 1,
      name: "Hussein Zidan",
      age: 22,
      email: "zidan@gmail.com",
      grade: "A+",
      image: "img/img.jpeg",
    },

    {
      id: 2,
      name: "Ahmed Ali",
      age: 21,
      email: "ahmed@gmail.com",
      grade: "A",
      image: "img/images.jpeg",
    },

    {
      id: 3,
      name: "Sara Mohamed",
      age: 20,
      email: "sara@gmail.com",
      grade: "B+",
      image: "img/images (2).jpeg",
    },

    {
      id: 4,
      name: "Marim Amr",
      age: 28,
      email: "marim@gmail.com",
      grade: "A+",
      image: "img/images (4).jpeg",
    },

    {
      id: 5,
      name: "Ali Amran",
      age: 27,
      email: "ali@gmail.com",
      grade: "B",
      image: "img/images (6).jpeg",
    },

    {
      id: 6,
      name: "Omnia Ali",
      age: 24,
      email: "omnia@gmail.com",
      grade: "A",
      image: "img/images (5).jpeg",
    },

    {
      id: 7,
      name: "Tamer Mohamed",
      age: 34,
      email: "tamer@gmail.com",
      grade: "C",
      image: "img/images (7).jpeg",
    },

    {
      id: 8,
      name: "Yasmen Selim",
      age: 32,
      email: "yasmen@gmail.com",
      grade: "A+",
      image: "img/images (8).jpeg",
    },

    {
      id: 9,
      name: "Ramadan Ali",
      age: 45,
      email: "ramadan@gmail.com",
      grade: "B+",
      image: "img/images (10).jpeg",
    },
  ];

  const studentsList = students.filter((student) => {

    const nameMatch = student.name
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const gradeMatch =
      gradeFilter === "All" ||
      student.grade === gradeFilter;

    return nameMatch && gradeMatch;

  });

  return (
    <>

      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">
            Final Project
          </span>
        </div>
      </nav>

      <div className="container mt-4">

        <h2 className="text-center mb-4">
          Students
        </h2>

        <div className="row mb-4">

          <div className="col-md-8">

            <input
              type="text"
              className="form-control"
              placeholder="Search by name..."
              value={searchText}
              onChange={(e) =>
                setSearchText(e.target.value)
              }
            />

          </div>

          <div className="col-md-4">

            <select
              className="form-select"
              value={gradeFilter}
              onChange={(e) =>
                setGradeFilter(e.target.value)
              }
            >
              <option value="All">All Grades</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>

          </div>

        </div>

        <div className="row">
                    {studentsList.map((student) => (
            <div className="col-lg-4 col-md-6 mb-4" key={student.id}>

              <div
                className="card shadow-sm"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSelectedStudent(student);
                  setShowModal(true);
                }}
              >

                <img
                  src={student.image}
                  alt={student.name}
                  className="card-img-top"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">

                  <h4>{student.name}</h4>

                  <p>
                    <strong>Age :</strong> {student.age}
                  </p>

                  <p>
                    <strong>Email :</strong> {student.email}
                  </p>

                  <p>
                    <strong>Grade :</strong> {student.grade}
                  </p>

                  

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
            {showModal && selectedStudent && (

        <div
          className="modal d-block"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)"
          }}
        >

          <div className="modal-dialog">

            <div className="modal-content">

              <div className="modal-header">

                <h4 className="modal-title">
                  Student Details
                </h4>
              </div>

              <div className="modal-body text-center">

                <img
                  src={selectedStudent.image}
                  alt={selectedStudent.name}
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover"
                  }}
                />

                <h3>{selectedStudent.name}</h3>


                <p>
                  <strong>Age :</strong> {selectedStudent.age}
                </p>

                <p>
                  <strong>Email :</strong> {selectedStudent.email}
                </p>

                <p>
                  <strong>Grade :</strong> {selectedStudent.grade}
                </p>

              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-danger"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default App;