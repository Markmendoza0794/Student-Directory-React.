import { useState } from "react";

import HeaderContainer from "./Components/HeaderContainer";
import FormContainer from "./Components/FormContainer";
import ListContainer from "./Components/ListContainer";

import "./style.css";

const App = () => {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents((currentStudents) => [...currentStudents, student]);
  };

  const handleRemoveStudent = (studentId) => {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== studentId)
    );
  };

  return (
    <div className="app-container">
      <HeaderContainer />

      <main className="directory-layout">
        <FormContainer onAddStudent={handleAddStudent} />

        <ListContainer
          students={students}
          onRemoveStudent={handleRemoveStudent}
        />
      </main>

      <footer className="page-footer">
        Student Directory · School Project
      </footer>
    </div>
  );
};

export default App;